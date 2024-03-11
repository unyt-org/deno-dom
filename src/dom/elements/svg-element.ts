import { CTOR_KEY } from "../../constructor-lock.ts";
import { DOMStringMap } from "../dom-string-map.ts";
import { Element } from "../element.ts";
import { Node } from "../node.ts";
import { SVGTag } from "../types/tags.ts";
import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";

export class SVGElement extends Element {
	style = CSSStyleDeclaration.create()

	constructor(
		tagName: SVGTag,
		parentNode: Node | null,
		attributes: [string, string][],
		key: typeof CTOR_KEY
	) {
		super(
			tagName,
			"http://www.w3.org/2000/svg",
			parentNode,
			attributes,
			key,
		);

		// set initial style
		if (this.hasAttribute("style")) {
			this.style.cssText = this.getAttribute("style")!
		}

		// bind style to style attribute	
		this.style.onUpdate(()=>this.#handleStyleUpdate())
		this.#handleStyleUpdate()
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