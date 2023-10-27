import { Node, REGISTERED_OBSERVERS } from "./node.ts";

export type MutationObserverInit = {
	attributes: boolean, 
	childList: boolean, 
	subtree: boolean,
	characterData: boolean,
	attributeOldValue: boolean,
	characterDataOldValue: boolean,
	attributeFilter: string[]
}

export interface MutationRecord {
	readonly type: "attributes"|"characterData"|"childList";
	readonly target: Node;
	readonly addedNodes: NodeList;
	readonly removedNodes: NodeList;
	readonly previousSibling?: Node;
	readonly nextSibling?: Node;
	readonly attributeName?: string;
	readonly attributeNamespace?: string;
	readonly oldValue?: string;
}

export type MutationCallback = (mutations: MutationRecord[], observer: MutationObserver) => void;

export const QUEUE_MUTATION_RECORD = Symbol("QUEUE_MUTATION_RECORD");

export class MutationObserver {
	
	#callback: MutationCallback
	#nodeList = new Set<WeakRef<Node>>()
	#recordQueue = new Set<MutationRecord>()

	constructor(callback: MutationCallback) {
		this.#callback = callback;
	}

	observe(target: Node, options: MutationObserverInit) {
		if (('attributeOldValue' in options || 'attributeFilter' in options) && !('attributes' in options)) 
			(options as any).attributes = true;
		if ('characterDataOldValue' in options && !('characterData' in options))
			(options as any).characterData = true;
		if (!options.childList && !options.attributes && !options.characterData) 
			throw new TypeError("Failed to execute 'observe' on 'MutationObserver': The options object must set at least one of 'attributes', 'characterData', or 'childList' to true.")
		if (options.attributeOldValue===true && options.attributes===false) 
			throw new TypeError("Failed to execute 'observe' on 'MutationObserver': The options object may only set 'attributeOldValue' to true when 'attributes' is true or not present.")
		if (options.attributeFilter && options.attributes===false) 
			throw new TypeError("Failed to execute 'observe' on 'MutationObserver': The options object may only set 'attributeFilter' when 'attributes' is true or not present.")
		// TODO: more checks https://dom.spec.whatwg.org/#registered-observer-list

		for (const registeredObserver of target[REGISTERED_OBSERVERS]) {
			if (registeredObserver[0] == this) {
				// TODO: https://dom.spec.whatwg.org/#registered-observer-list
				registeredObserver[1] = options;
				return;
			}
		}

		target[REGISTERED_OBSERVERS].add([this, options]);		
		this.#nodeList.add(new WeakRef(target));
	}

	disconnect() {
		for (const nodeRef of this.#nodeList) {
			const node = nodeRef.deref()
			if (!node) {
				this.#nodeList.delete(nodeRef);
				continue;
			}
			for (const registeredObserver of node[REGISTERED_OBSERVERS]) {
				if (registeredObserver[0] == this) {
					node[REGISTERED_OBSERVERS].delete(registeredObserver)
				}
			}
		}
		

	}

	takeRecords(): MutationRecord[] {

	}


	static #pendingMutationObservers = new Set<MutationObserver>()
	static #notifyObservers() {
		const notifySet = [...this.#pendingMutationObservers];
		this.#pendingMutationObservers.clear();
		
		for (const observer of notifySet) {
			const records = [...observer.#recordQueue];
			observer.#recordQueue.clear();
			
			for (const nodeRef of observer.#nodeList) {
				const node = nodeRef.deref()
				if (!node) {
					observer.#nodeList.delete(nodeRef);
					continue;
				}
				for (const registeredObserver of node[REGISTERED_OBSERVERS]) {
					// is transient and has observer
					if (registeredObserver[2] && registeredObserver[0] === observer) {
						node[REGISTERED_OBSERVERS].delete(registeredObserver);
					}
				}
			}
			
			if (records.length) {
				try {
					observer.#callback.call(observer, records, observer)
				}
				catch (e) {
					console.error(e)
				}
			}
		}
		// TODO: 7. slotchange
	}

	static [QUEUE_MUTATION_RECORD](record: MutationRecord) {
		// 1.
		const interestedObservers = new Map<MutationObserver, string|null>();

		// 2., 3. iterate trough ancestors
		let node:Node|null = record.target;
		while (node) {
			for (const [observer, options] of node[REGISTERED_OBSERVERS]) {
				if (
					!(node !== record.target && options.subtree == false)
					&& !(record.type == "attributes" && !options.attributes)
					&& !(record.type == "attributes" && "attributeFilter" in options && (!options.attributeFilter.includes(record.attributeName!) || record.attributeNamespace !== null ))
					&& !(record.type == "characterData" && !options.characterData)
					&& !(record.type == "childList" && !options.childList === false)
					) {
						if ((record.type == "attributes" && options.attributeOldValue) || (record.type == "characterData" && options.characterDataOldValue)) {
							interestedObservers.set(observer, record.oldValue!)
						}
						else if (!interestedObservers.has(observer)) interestedObservers.set(observer, null)
					}
			}

			node = node.parentNode;
		}

		// 4.
		for (const [observer, oldValue] of interestedObservers) {
			observer.#recordQueue.add({
				type: record.type,
				target: record.target,
				attributeName: record.attributeName,
				attributeNamespace: record.attributeNamespace,
				oldValue: oldValue ?? undefined,
				addedNodes: record.addedNodes,
				removedNodes: record.removedNodes,
				previousSibling: record.previousSibling,
				nextSibling: record.nextSibling
			})
			this.#pendingMutationObservers.add(observer)
		}
		
		// 5.
		this.#notifyObservers()
	}

}