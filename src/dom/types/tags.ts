import type { HTMLElement } from "../elements/html-element.ts";
import { SVGElement } from "../elements/svg-element.ts";
import type { HTMLFormElement } from "../html-elements/html-form-element.ts";
import { MathMLElement } from "../elements/math-ml-element.ts";
import { HTMLTemplateElement } from "../html-elements/html-template-element.ts";
import { HTMLDivElement } from "../html-elements/html-div-element.ts";
import { HTMLImageElement } from "../html-elements/html-image-element.ts";
import { HTMLVideoElement } from "../html-elements/html-video-element.ts";
import { HTMLButtonElement } from "../html-elements/html-button-element.ts";
import { HTMLHeadingElement } from "../html-elements/html-heading-element.ts";
import { HTMLInputElement } from "../html-elements/html-input-element.ts";

export interface HTMLElementTagNameMap {
    "a": HTMLElement // HTMLAnchorElement;
    "abbr": HTMLElement;
    "address": HTMLElement;
    // "area": HTMLAreaElement;
    "article": HTMLElement;
    "aside": HTMLElement;
    // "audio": HTMLAudioElement;
    "b": HTMLElement;
    // "base": HTMLBaseElement;
    "bdi": HTMLElement;
    "bdo": HTMLElement;
    // "blockquote": HTMLQuoteElement;
    "body": HTMLElement // HTMLBodyElement;
    // "br": HTMLBRElement;
    "button": HTMLButtonElement;
    // "canvas": HTMLCanvasElement;
    // "caption": HTMLTableCaptionElement;
    "cite": HTMLElement;
    "code": HTMLElement;
    // "col": HTMLTableColElement;
    // "colgroup": HTMLTableColElement;
    // "data": HTMLDataElement;
    // "datalist": HTMLDataListElement;
    "dd": HTMLElement;
    // "del": HTMLModElement;
    "details": HTMLElement // HTMLDetailsElement;
    "dfn": HTMLElement;
    // "dialog": HTMLDialogElement;
    "div": HTMLDivElement;
    // "dl": HTMLDListElement;
    "dt": HTMLElement;
    "em": HTMLElement;
    // "embed": HTMLEmbedElement;
    // "fieldset": HTMLFieldSetElement;
    "figcaption": HTMLElement;
    "figure": HTMLElement;
    "footer": HTMLElement;
    "form": HTMLFormElement;
    "h1": HTMLHeadingElement;
    "h2": HTMLHeadingElement;
    "h3": HTMLHeadingElement;
    "h4": HTMLHeadingElement;
    "h5": HTMLHeadingElement;
    "h6": HTMLHeadingElement;
    "head": HTMLElement // HTMLHeadElement;
    "header": HTMLElement;
    "hgroup": HTMLElement;
    // "hr": HTMLHRElement;
    "html": HTMLElement//HTMLHtmlElement;
    "i": HTMLElement;
    "iframe": HTMLElement // HTMLIFrameElement;
    "img": HTMLImageElement;
    "input": HTMLInputElement;
    // "ins": HTMLModElement;
    "kbd": HTMLElement;
    "label": HTMLElement // HTMLLabelElement;
    // "legend": HTMLLegendElement;
    "li": HTMLElement // HTMLLIElement;
    "link": HTMLElement // HTMLLinkElement;
    "main": HTMLElement;
    // "map": HTMLMapElement;
    "mark": HTMLElement;
    // "menu": HTMLMenuElement;
    // "meta": HTMLMetaElement;
    // "meter": HTMLMeterElement;
    "nav": HTMLElement;
    "noscript": HTMLElement;
    // "object": HTMLObjectElement;
    // "ol": HTMLOListElement;
    // "optgroup": HTMLOptGroupElement;
    "option": HTMLElement // HTMLOptionElement;
    // "output": HTMLOutputElement;
    "p": HTMLElement // HTMLParagraphElement;
    // "picture": HTMLPictureElement;
    // "pre": HTMLPreElement;
    "progress": HTMLElement // HTMLProgressElement;
    // "q": HTMLQuoteElement;
    "rp": HTMLElement;
    "rt": HTMLElement;
    "ruby": HTMLElement;
    "s": HTMLElement;
    "samp": HTMLElement;
    "script": HTMLElement // HTMLScriptElement;
    "search": HTMLElement;
    "section": HTMLElement;
    "select": HTMLElement // HTMLSelectElement;
    // "slot": HTMLSlotElement;
    "small": HTMLElement;
    "source": HTMLElement // HTMLSourceElement;
    // "span": HTMLSpanElement;
    "strong": HTMLElement;
    // "style": HTMLStyleElement;
    "sub": HTMLElement;
    "summary": HTMLElement;
    "sup": HTMLElement;
    // "table": HTMLTableElement;
    // "tbody": HTMLTableSectionElement;
    // "td": HTMLTableCellElement;
    "template": HTMLTemplateElement;
    "textarea": HTMLElement // HTMLTextAreaElement;
    // "tfoot": HTMLTableSectionElement;
    // "th": HTMLTableCellElement;
    // "thead": HTMLTableSectionElement;
    // "time": HTMLTimeElement;
    "title": HTMLElement // HTMLTitleElement;
    // "tr": HTMLTableRowElement;
    // "track": HTMLTrackElement;
    "u": HTMLElement;
    "ul": HTMLElement // HTMLUListElement;
    "var": HTMLElement;
    "video": HTMLVideoElement;
    "wbr": HTMLElement;
}

export interface SVGElementTagNameMap {
    "a": SVGElement // SVGAElement;
    // "animate": SVGAnimateElement;
    // "animateMotion": SVGAnimateMotionElement;
    // "animateTransform": SVGAnimateTransformElement;
    // "circle": SVGCircleElement;
    // "clipPath": SVGClipPathElement;
    // "defs": SVGDefsElement;
    // "desc": SVGDescElement;
    // "ellipse": SVGEllipseElement;
    // "feBlend": SVGFEBlendElement;
    // "feColorMatrix": SVGFEColorMatrixElement;
    // "feComponentTransfer": SVGFEComponentTransferElement;
    // "feComposite": SVGFECompositeElement;
    // "feConvolveMatrix": SVGFEConvolveMatrixElement;
    // "feDiffuseLighting": SVGFEDiffuseLightingElement;
    // "feDisplacementMap": SVGFEDisplacementMapElement;
    // "feDistantLight": SVGFEDistantLightElement;
    // "feDropShadow": SVGFEDropShadowElement;
    // "feFlood": SVGFEFloodElement;
    // "feFuncA": SVGFEFuncAElement;
    // "feFuncB": SVGFEFuncBElement;
    // "feFuncG": SVGFEFuncGElement;
    // "feFuncR": SVGFEFuncRElement;
    // "feGaussianBlur": SVGFEGaussianBlurElement;
    // "feImage": SVGFEImageElement;
    // "feMerge": SVGFEMergeElement;
    // "feMergeNode": SVGFEMergeNodeElement;
    // "feMorphology": SVGFEMorphologyElement;
    // "feOffset": SVGFEOffsetElement;
    // "fePointLight": SVGFEPointLightElement;
    // "feSpecularLighting": SVGFESpecularLightingElement;
    // "feSpotLight": SVGFESpotLightElement;
    // "feTile": SVGFETileElement;
    // "feTurbulence": SVGFETurbulenceElement;
    // "filter": SVGFilterElement;
    // "foreignObject": SVGForeignObjectElement;
    // "g": SVGGElement;
    // "image": SVGImageElement;
    // "line": SVGLineElement;
    // "linearGradient": SVGLinearGradientElement;
    // "marker": SVGMarkerElement;
    // "mask": SVGMaskElement;
    // "metadata": SVGMetadataElement;
    // "mpath": SVGMPathElement;
    // "path": SVGPathElement;
    // "pattern": SVGPatternElement;
    // "polygon": SVGPolygonElement;
    // "polyline": SVGPolylineElement;
    // "radialGradient": SVGRadialGradientElement;
    // "rect": SVGRectElement;
    // "script": SVGScriptElement;
    // "set": SVGSetElement;
    // "stop": SVGStopElement;
    // "style": SVGStyleElement;
    // "svg": SVGSVGElement;
    // "switch": SVGSwitchElement;
    // "symbol": SVGSymbolElement;
    // "text": SVGTextElement;
    // "textPath": SVGTextPathElement;
    // "title": SVGTitleElement;
    // "tspan": SVGTSpanElement;
    // "use": SVGUseElement;
    // "view": SVGViewElement;
}

export interface MathMLElementTagNameMap {
    "annotation": MathMLElement;
    // "annotation-xml": MathMLElement;
    // "maction": MathMLElement;
    // "math": MathMLElement;
    // "merror": MathMLElement;
    // "mfrac": MathMLElement;
    // "mi": MathMLElement;
    // "mmultiscripts": MathMLElement;
    // "mn": MathMLElement;
    // "mo": MathMLElement;
    // "mover": MathMLElement;
    // "mpadded": MathMLElement;
    // "mphantom": MathMLElement;
    // "mprescripts": MathMLElement;
    // "mroot": MathMLElement;
    // "mrow": MathMLElement;
    // "ms": MathMLElement;
    // "mspace": MathMLElement;
    // "msqrt": MathMLElement;
    // "mstyle": MathMLElement;
    // "msub": MathMLElement;
    // "msubsup": MathMLElement;
    // "msup": MathMLElement;
    // "mtable": MathMLElement;
    // "mtd": MathMLElement;
    // "mtext": MathMLElement;
    // "mtr": MathMLElement;
    // "munder": MathMLElement;
    // "munderover": MathMLElement;
    // "semantics": MathMLElement;
}

export type HTMLTag = keyof HTMLElementTagNameMap | Uppercase<keyof HTMLElementTagNameMap>
export type HTMLElementByTag<Tag extends HTMLTag> = HTMLElementTagNameMap[Lowercase<Tag>]

export type SVGTag = keyof SVGElementTagNameMap | Uppercase<keyof SVGElementTagNameMap>
export type SVGElementByTag<Tag extends SVGTag> = SVGElementTagNameMap[Lowercase<Tag>]

export type MathMLTag = keyof MathMLElementTagNameMap | Uppercase<keyof MathMLElementTagNameMap>
export type MathMLElementByTag<Tag extends MathMLTag> = MathMLElementTagNameMap[Lowercase<Tag>]
