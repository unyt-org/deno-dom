import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";
import { HTMLElement } from "../elements/html-element.ts";

export class HTMLHeadingElement extends HTMLElement {

	style = CSSStyleDeclaration.create()

	dataset = {}
}