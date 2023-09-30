import { CTOR_KEY } from "../../constructor-lock.ts";
import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";
import { Element } from "../element.ts";
import { Node } from "../node.ts";
import { HTMLTag } from "../types/tags.ts";

export class HTMLElement extends Element {

	style = CSSStyleDeclaration.create()

	constructor(
		tagName: HTMLTag,
		parentNode: Node | null,
		attributes: [string, string][],
		key: typeof CTOR_KEY
	) {
		super(
			tagName,
			"http://www.w3.org/1999/xhtml",
			parentNode,
			attributes,
			key,
		);

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


	dataset = {}
}