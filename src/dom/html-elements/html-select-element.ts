import { HTMLElement } from "../elements/html-element.ts";

export class HTMLSelectElement extends HTMLElement {
	get value() {
		return (this.querySelector("option[selected]") as HTMLOptionElement)?.value
	}
}