import { CSSStyleDeclaration } from "../../css/CSSStyleDeclaration.ts";
import { HTMLElement } from "../elements/html-element.ts";

export class HTMLVideoElement extends HTMLElement {

	style = CSSStyleDeclaration.create()

	dataset = {}
}