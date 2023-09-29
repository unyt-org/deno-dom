import { HTMLElement } from "./elements/html-element.ts";

type CustomElementOptions = {extends: string};

export class CustomElementRegistry {

	static #registries  = new Set<CustomElementRegistry>()
	static getConstructor(name: string) {
		name = name.toUpperCase();
		for (const registry of this.#registries) {
			const constructor = registry.get(name);
			if (constructor) return constructor;
		}
	}

	constructor() {
		CustomElementRegistry.#registries.add(this)
	}

	#elements = new Map<string, {constructor: typeof HTMLElement, options?: CustomElementOptions}>

	define(name: string, constructor: typeof HTMLElement, options?: CustomElementOptions) {
		name = name.toUpperCase();
		this.#elements.set(name, {constructor, options})
	}

	get(name: string) {
		name = name.toUpperCase();
		return this.#elements.get(name)?.constructor;
	}

	getName(constructor: typeof HTMLElement) {
		for (const [name, el] of this.#elements) {
			if (el.constructor == constructor) return name;
		}
	}
}