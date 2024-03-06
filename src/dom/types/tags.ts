export type HTMLTag = keyof HTMLElementTagNameMap | Uppercase<keyof HTMLElementTagNameMap>
export type HTMLElementByTag<Tag extends HTMLTag> = HTMLElementTagNameMap[Lowercase<Tag>]

export type SVGTag = keyof SVGElementTagNameMap
export type SVGElementByTag<Tag extends SVGTag> = SVGElementTagNameMap[Tag]

export type MathMLTag = keyof MathMLElementTagNameMap | Uppercase<keyof MathMLElementTagNameMap>
export type MathMLElementByTag<Tag extends MathMLTag> = MathMLElementTagNameMap[Lowercase<Tag>]