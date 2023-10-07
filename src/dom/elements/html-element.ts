import { CTOR_KEY } from "../../constructor-lock.ts";
import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";
import { DOMStringMap } from "uix/uix-dom/dom/deno-dom/src/dom/dom-string-map.ts";
import { Element } from "../element.ts";
import { Node } from "../node.ts";
import { HTMLTag } from "../types/tags.ts";

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
			tagName ?? "-placeholder-",
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

		// set initial style
		if (this.hasAttribute("style")) {
			this.style.cssText = this.getAttribute("style")!
		}

		// bind style to style attribute
		this._setAttributeDef("style", {
			get: () => this.style.cssText,
			set: (value: string) => 4//this.style.cssText = value
		})
	}

	dataset = DOMStringMap.create(this)
}