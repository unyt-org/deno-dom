import { CTOR_KEY } from "../../constructor-lock.ts";
import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";
import { DOMStringMap } from "../dom-string-map.ts";
import { Element } from "../element.ts";
import { Node } from "../node.ts";
import { HTMLTag } from "../types/tags.ts";
import { CustomElementRegistry } from "../custom-element-registry.ts";

export class HTMLElement extends Element {

	style = CSSStyleDeclaration.create()

	constructor()
	constructor(
		tagName: HTMLTag,
		parentNode: Node | null,
		attributes: [string, string][],
		key: typeof CTOR_KEY
	) 
	constructor(
		tagName?: HTMLTag,
		parentNode?: Node | null,
		attributes: [string, string][] = [],
		key?: typeof CTOR_KEY
	) {
		super(
			tagName ?? "error-no-tagname-found",
			"http://www.w3.org/1999/xhtml",
			parentNode ?? null,
			attributes,
			CTOR_KEY,
		);

		if (key !== CTOR_KEY) {
			// TODO: better check, don't allow elements like HTMLDivElement or extending classes to be constructed
			if (this.constructor === HTMLElement)
				throw new TypeError("Illegal constructor.!");
		}

		if (!tagName) this.localName = this.tagName = this.nodeName = CustomElementRegistry.getTagName(this.constructor as typeof HTMLElement)!

		// set initial style
		if (this.hasAttribute("style")) {
			this.style.cssText = this.getAttribute("style")!
		}

		// bind style to style attribute	
		this.style.onUpdate(()=>this.#handleStyleUpdate())
		this.#handleStyleUpdate()
	}

	override _shallowClone(): HTMLElement {
		// FIXME: This attribute copying needs to also be fixed in other
		// elements that override _shallowClone like <template>
		const attributes: [string, string][] = [];
		for (const attribute of this.getAttributeNames()) {
		  attributes.push([attribute, this.getAttribute(attribute)!]);
		}
		return new (this.constructor as typeof HTMLElement)(this.tagName as HTMLTag, null, attributes, CTOR_KEY);
	}

	#handleStyleUpdate() {
		// todo don't allow user overwrite of style attribute
		if (this.style.cssText && !this.hasAttribute("style")) {
			this._setAttributeDef("style", {
				get: () => this.style.cssText,
				set: (value: string) => {
					this.style.cssText = value;
					if (!value) this.removeAttribute("style");
				},
			})
		}
	}

	dataset = DOMStringMap.create(this)
}