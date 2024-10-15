import { CTOR_KEY } from "../../constructor-lock.ts";
import { Element } from "../element.ts";
import { Node } from "../node.ts";
import { MathMLTag } from "../types/tags.ts";

export class MathMLElement extends Element {
	constructor(
		tagName: MathMLTag,
		parentNode: Node | null,
		attributes: [string, string][],
		key: typeof CTOR_KEY
	) {
		super(
			tagName,
			"http://www.w3.org/1998/Math/MathML",
			parentNode,
			attributes,
			key,
		);
	}

	override _shallowClone(): MathMLElement {
		// FIXME: This attribute copying needs to also be fixed in other
		// elements that override _shallowClone like <template>
		const attributes: [string, string][] = [];
		for (const attribute of this.getAttributeNames()) {
		  attributes.push([attribute, this.getAttribute(attribute)!]);
		}
		return new (this.constructor as typeof MathMLElement)(this.tagName as MathMLTag, null, attributes, CTOR_KEY);
	}

}