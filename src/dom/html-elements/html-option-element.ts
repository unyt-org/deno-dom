import { HTMLElement } from "../elements/html-element.ts";

export class HTMLOptionElement extends HTMLElement {
	get value() {
		return this.getAttribute("value") ?? this.textContent;
	}
	
	set value(val:string) {
		// TODO: probably not set attribute
		this.setAttribute("value", val)
	}
}