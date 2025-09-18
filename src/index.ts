function merge(...regexes: RegExp[]): RegExp {
  const pattern = regexes.map((r) => r.source).join('|')
  const flags = [
    ...new Set(
      regexes
        .map((r) => r.flags)
        .join('')
        .split('')
    )
  ].join('')
  return new RegExp(pattern, flags)
}

// Basic number and unit patterns
export const numberPattern: RegExp = /[-+]?(?:\d*\.\d+|\d+)/
export const integer: RegExp = /[-+]?\d+/
export const percentage: RegExp = /[-+]?(?:\d*\.\d+|\d+)\%/
export const fraction: RegExp = /(?:[-+]?(?:\d*\.\d+|\d+)fr)/
export const ratio: RegExp = /(?:\d+\s*\/\s*\d+)/
export const dimension: RegExp = /[-+]?(?:\d*\.\d+|\d+)[a-zA-Z%]+/
export const time: RegExp = /-?(?:\d*\.)?\d+(?:ms|s)/
export const angle: RegExp = /-?(?:\d*\.)?\d+(?:deg|rad|grad|turn)/
export const frequency: RegExp = /-?(?:\d*\.)?\d+(?:Hz|kHz)/
export const resolution: RegExp = /-?(?:\d*\.)?\d+(?:dpi|dpcm|dppx|x)/
export const length =
  /-?(?:\d*\.)?\d+(?:px|em|rem|ex|ch|vw|vh|vmin|vmax|cm|mm|in|pt|pc|Q|%|cap|ic|lh|rlh|vi|vb|svw|svh|lvw|lvh|dvw|dvh)/

// Color patterns
export const hexColor: RegExp = /#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})/
export const colorFunction: RegExp =
  /(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)/
export const namedColor: RegExp =
  /\b(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b/
export const color: RegExp = merge(hexColor, colorFunction, namedColor)

// Selector patterns
export const selector: RegExp =
  /(?:[.#][a-zA-Z0-9_-]+|[a-zA-Z_][a-zA-Z0-9_-]*|\*|\[(?:[a-zA-Z0-9_-]+(?:[~|^$*]?=(?:"[^"]*"|'[^']*'|[^\]]*))?)?\]|::?[a-zA-Z][a-zA-Z0-9_-]*(?:\([^\)]*\))?|>|\+|~|\s|,)+/

// CSS Functions
export const cssFunction: RegExp = /[a-zA-Z][a-zA-Z0-9_-]*\(\s*[^)]*\s*\)/
export const cssCalcFunc: RegExp = /calc\(\s*[^)]*\s*\)/
export const cssVariable: RegExp = /--[a-zA-Z0-9_-]+/
export const cssVariableUsage: RegExp = /var\(\s*(--[a-zA-Z0-9_-]+)(?:\s*,\s*([^)]*))?\s*\)/

// Animation and transition patterns
export const animationName: RegExp = /[a-zA-Z_][a-zA-Z0-9_-]*/
export const animationDuration: RegExp = time
export const animationTimingFunction: RegExp =
  /(?:linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|cubic-bezier\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){4}\)|steps\(\s*[^)]*\s*\))/
export const animationDelay: RegExp = time
export const animationIterationCount: RegExp = /(?:infinite|[-+]?(?:\d*\.\d+|\d+))/
export const animationDirection: RegExp = /(?:normal|reverse|alternate|alternate-reverse)/
export const animationFillMode: RegExp = /(?:none|forwards|backwards|both)/
export const animationPlayState: RegExp = /(?:running|paused)/

// Grid patterns
export const gridLine: RegExp = /(?:[-+]?\d+|[a-zA-Z_][a-zA-Z0-9_-]*(?:\s+[-+]?\d+)?)/
export const gridArea: RegExp =
  /(?:(?:[-+]?\d+|[a-zA-Z_][a-zA-Z0-9_-]*(?:\s+[-+]?\d+)?)\s*\/?\s*){1,4}/
export const gridTrackSize: RegExp =
  /(?:auto|min-content|max-content|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?|minmax\(\s*[^)]*\s*\)|fit-content\(\s*[^)]*\s*\))/
export const gridTemplate: RegExp =
  /(?:none|subgrid|repeat\(\s*[^)]*\s*\)|(?:\[?[a-zA-Z_][a-zA-Z0-9_-]*(?:\s+[a-zA-Z_][a-zA-Z0-9_-]*)*\]?\s*)?(?:auto|min-content|max-content|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?|minmax\(\s*[^)]*\s*\)|fit-content\(\s*[^)]*\s*\))(?:\s+(?:\[?[a-zA-Z_][a-zA-Z0-9_-]*(?:\s+[a-zA-Z_][a-zA-Z0-9_-]*)*\]?\s*)?(?:auto|min-content|max-content|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?|minmax\(\s*[^)]*\s*\)|fit-content\(\s*[^)]*\s*\)))*)/

// Flexbox patterns
export const flexGrow: RegExp = /[-+]?(?:\d*\.\d+|\d+)/
export const flexShrink: RegExp = /[-+]?(?:\d*\.\d+|\d+)/
export const flexBasis: RegExp =
  /(?:auto|content|fill|max-content|min-content|fit-content|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?)/
export const flexDirection: RegExp = /(?:row|row-reverse|column|column-reverse)/
export const flexWrap: RegExp = /(?:nowrap|wrap|wrap-reverse)/
export const justifyContent: RegExp =
  /(?:flex-start|flex-end|center|space-between|space-around|space-evenly|start|end|left|right)/
export const alignItems: RegExp =
  /(?:stretch|flex-start|flex-end|center|baseline|start|end|self-start|self-end)/
export const alignContent: RegExp =
  /(?:stretch|flex-start|flex-end|center|space-between|space-around|space-evenly|start|end)/

// Border patterns
export const borderStyle: RegExp =
  /(?:none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)/
export const borderWidth: RegExp = /(?:thin|medium|thick|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?)/
export const borderRadius: RegExp =
  /(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?(?:\s+[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?){0,3})/

// Shadow patterns
export const boxShadow: RegExp =
  /(?:none|(?:inset\s+)?(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?\s+){2,4}(?:#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z_][a-zA-Z0-9_-]*)?(?:\s*,\s*(?:inset\s+)?(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?\s+){2,4}(?:#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z_][a-zA-Z0-9_-]*)?)*)/
export const textShadow: RegExp =
  /(?:none|(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?\s+){2,3}(?:#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z_][a-zA-Z0-9_-]*)?(?:\s*,\s*(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?\s+){2,3}(?:#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z_][a-zA-Z0-9_-]*)?)*)/

// Media query patterns
export const mediaFeature: RegExp =
  /(?:width|height|aspect-ratio|orientation|resolution|color|color-index|monochrome|scan|grid|update|overflow-block|overflow-inline|color-gamut|dynamic-range|video-dynamic-range|inverted-colors|pointer|hover|any-pointer|any-hover|prefers-color-scheme|prefers-contrast|prefers-reduced-motion|prefers-reduced-transparency|forced-colors|scripting|device-width|device-height|device-aspect-ratio)/
export const mediaQuery: RegExp =
  /(?:(?:only|not)?\s*)?(?:all|print|screen|speech|(?:[a-zA-Z_][a-zA-Z0-9_-]*))(?:\s+and\s+\([^)]+\))*(?:\s*,\s*(?:(?:only|not)?\s*)?(?:all|print|screen|speech|(?:[a-zA-Z_][a-zA-Z0-9_-]*))(?:\s+and\s+\([^)]+\))*)*/

// Container queries
export const containerQuery: RegExp =
  /(?:\(\s*(?:width|height|inline-size|block-size|aspect-ratio|orientation)\s*(?:[<>]=?|=)\s*[^)]+\s*\)(?:\s+and\s+\(\s*(?:width|height|inline-size|block-size|aspect-ratio|orientation)\s*(?:[<>]=?|=)\s*[^)]+\s*\))*)/

// Font patterns
export const fontWeight: RegExp =
  /(?:100|200|300|400|500|600|700|800|900|normal|bold|bolder|lighter)/
export const fontSize: RegExp =
  /(?:xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large|larger|smaller|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?)/
export const fontStyle: RegExp = /(?:normal|italic|oblique(?:\s+[-+]?(?:\d*\.\d+|\d+)deg)?)/
export const fontVariant: RegExp =
  /(?:normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps)/
export const fontStretch: RegExp =
  /(?:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|[-+]?(?:\d*\.\d+|\d+)%)/
export const fontFamily: RegExp =
  /(?:"[^"]*"|'[^']*'|[a-zA-Z_][a-zA-Z0-9_-]*(?:-[a-zA-Z0-9_-]+)*)(?:\s*,\s*(?:"[^"]*"|'[^']*'|[a-zA-Z_][a-zA-Z0-9_-]*(?:-[a-zA-Z0-9_-]+)*))*(?:\s*,\s*(?:serif|sans-serif|monospace|cursive|fantasy|system-ui|ui-serif|ui-sans-serif|ui-monospace|ui-rounded|emoji|math|fangsong))?/

// Enhanced ratio and unit patterns
export const enhancedRatio: RegExp =
  /(?:(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?)\s*\/\s*(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?))/
export const unit: RegExp =
  /(?:px|em|rem|ex|ch|vw|vh|vmin|vmax|cm|mm|in|pt|pc|Q|%|cap|ic|lh|rlh|vi|vb|svw|svh|lvw|lvh|dvw|dvh|fr|deg|rad|grad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx|x)/
export const globalKeywords: RegExp = /(?:inherit|initial|revert|revert-layer|unset)/

// Basic patterns
export const identifier: RegExp = /[a-zA-Z_][a-zA-Z0-9_-]*/
export const propertyName: RegExp = /(?:-webkit-|-moz-|-ms-|-o-)?[a-zA-Z][a-zA-Z0-9-]*/
export const string: RegExp = /(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/
export const numberWithUnit: RegExp = /[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?/

// URL patterns
export const dataUrl: RegExp =
  /data:([a-zA-Z][a-zA-Z0-9]*(?:\/[a-zA-Z][a-zA-Z0-9]*)?)?(?:;[a-zA-Z0-9-]+=[a-zA-Z0-9-]+)*;base64,[a-zA-Z0-9+/]+=*/
export const httpUrl: RegExp = /https?:\/\/[^\s)]+/

// Complete CSS value pattern
export const cssValue: RegExp =
  /(?:inherit|initial|revert|revert-layer|unset|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?|#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z][a-zA-Z0-9_-]*\(\s*[^)]*\s*\)|"[^"]*"|'[^']*'|[a-zA-Z_][a-zA-Z0-9_-]*)/

// Color functions
export const colorFunctions = {
  rgb: /rgba?\(\s*(?:\d+(?:\.\d+)?%?\s*,\s*){2}\d+(?:\.\d+)?%?(?:\s*,\s*(?:\d*\.)?\d+(?:%|\s*\/\s*(?:\d*\.)?\d+%?)?)?\s*\)/,
  hsl: /hsla?\(\s*(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,\s*){2}\d+(?:\.\d+)?%?(?:\s*,\s*(?:\d*\.)?\d+(?:%|\s*\/\s*(?:\d*\.)?\d+%?)?)?\s*\)/,
  hwb: /hwb\(\s*(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d+(?:\.\d+)?%\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  lab: /lab\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:[-+]?\d+(?:\.\d+)?%?\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  lch: /lch\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  oklab:
    /oklab\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:[-+]?\d+(?:\.\d+)?%?\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  oklch:
    /oklch\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  color: /color\(\s*[a-zA-Z0-9-]+(?:\s+[\d.%]+){1,4}(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  colorMix:
    /color-mix\(\s*in\s+[a-zA-Z0-9-]+(?:\s+[a-zA-Z0-9-]+)?\s*,\s*[^,)]+(?:\s+\d+(?:\.\d+)?%)?\s*,\s*[^)]+(?:\s+\d+(?:\.\d+)?%)?\s*\)/,
  lightDark: /light-dark\(\s*[^,)]+\s*,\s*[^)]+\s*\)/
}

// Gradient functions
export const gradientFunctions = {
  linearGradient: /linear-gradient\(\s*[^)]*\s*\)/,
  radialGradient: /radial-gradient\(\s*[^)]*\s*\)/,
  conicGradient: /conic-gradient\(\s*[^)]*\s*\)/,
  repeatingLinearGradient: /repeating-linear-gradient\(\s*[^)]*\s*\)/,
  repeatingRadialGradient: /repeating-radial-gradient\(\s*[^)]*\s*\)/,
  repeatingConicGradient: /repeating-conic-gradient\(\s*[^)]*\s*\)/
}

// Transform functions
export const transformFunctionsList = {
  matrix: /matrix\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){6}\)/,
  matrix3d: /matrix3d\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){16}\)/,
  translate: /translate\(\s*[^)]*\s*\)/,
  translateX: /translateX\(\s*[^)]*\s*\)/,
  translateY: /translateY\(\s*[^)]*\s*\)/,
  translateZ: /translateZ\(\s*[^)]*\s*\)/,
  translate3d: /translate3d\(\s*[^)]*\s*\)/,
  scale: /scale\(\s*[^)]*\s*\)/,
  scaleX: /scaleX\(\s*[^)]*\s*\)/,
  scaleY: /scaleY\(\s*[^)]*\s*\)/,
  scaleZ: /scaleZ\(\s*[^)]*\s*\)/,
  scale3d: /scale3d\(\s*[^)]*\s*\)/,
  rotate: /rotate\(\s*[^)]*\s*\)/,
  rotateX: /rotateX\(\s*[^)]*\s*\)/,
  rotateY: /rotateY\(\s*[^)]*\s*\)/,
  rotateZ: /rotateZ\(\s*[^)]*\s*\)/,
  rotate3d: /rotate3d\(\s*[^)]*\s*\)/,
  skew: /skew\(\s*[^)]*\s*\)/,
  skewX: /skewX\(\s*[^)]*\s*\)/,
  skewY: /skewY\(\s*[^)]*\s*\)/,
  perspective: /perspective\(\s*[^)]*\s*\)/
}

// Filter functions
export const filterFunctionsList = {
  blur: /blur\(\s*[^)]*\s*\)/,
  brightness: /brightness\(\s*[^)]*\s*\)/,
  contrast: /contrast\(\s*[^)]*\s*\)/,
  dropShadow: /drop-shadow\(\s*[^)]*\s*\)/,
  grayscale: /grayscale\(\s*[^)]*\s*\)/,
  hueRotate: /hue-rotate\(\s*[^)]*\s*\)/,
  invert: /invert\(\s*[^)]*\s*\)/,
  opacity: /opacity\(\s*[^)]*\s*\)/,
  saturate: /saturate\(\s*[^)]*\s*\)/,
  sepia: /sepia\(\s*[^)]*\s*\)/
}

// Math functions
export const mathFunctions = {
  calc: cssCalcFunc,
  clamp: /clamp\(\s*[^)]*\s*\)/,
  min: /min\(\s*[^)]*\s*\)/,
  max: /max\(\s*[^)]*\s*\)/,
  abs: /abs\(\s*[^)]*\s*\)/,
  sign: /sign\(\s*[^)]*\s*\)/,
  mod: /mod\(\s*[^)]*\s*\)/,
  rem: /rem\(\s*[^)]*\s*\)/,
  sin: /sin\(\s*[^)]*\s*\)/,
  cos: /cos\(\s*[^)]*\s*\)/,
  tan: /tan\(\s*[^)]*\s*\)/,
  asin: /asin\(\s*[^)]*\s*\)/,
  acos: /acos\(\s*[^)]*\s*\)/,
  atan: /atan\(\s*[^)]*\s*\)/,
  atan2: /atan2\(\s*[^)]*\s*\)/,
  pow: /pow\(\s*[^)]*\s*\)/,
  sqrt: /sqrt\(\s*[^)]*\s*\)/,
  hypot: /hypot\(\s*[^)]*\s*\)/,
  log: /log\(\s*[^)]*\s*\)/,
  exp: /exp\(\s*[^)]*\s*\)/,
  round: /round\(\s*[^)]*\s*\)/
}

// Grid functions
export const gridFunctions = {
  repeat: /repeat\(\s*[^)]*\s*\)/,
  minmax: /minmax\(\s*[^)]*\s*\)/,
  fitContent: /fit-content\(\s*[^)]*\s*\)/
}

// Shape functions
export const shapeFunctions = {
  polygon: /polygon\(\s*[^)]*\s*\)/,
  circle: /circle\(\s*[^)]*\s*\)/,
  ellipse: /ellipse\(\s*[^)]*\s*\)/,
  inset: /inset\(\s*[^)]*\s*\)/,
  path: /path\(\s*[^)]*\s*\)/,
  rect: /rect\(\s*[^)]*\s*\)/
}

// Image functions
export const imageFunctions = {
  url: /url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/,
  imageSet: /image-set\(\s*[^)]*\s*\)/,
  element: /element\(\s*[^)]*\s*\)/,
  crossFade: /cross-fade\(\s*[^)]*\s*\)/
}

// Easing functions
export const easingFunctions = {
  cubicBezier: /cubic-bezier\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){4}\)/,
  steps: /steps\(\s*[^)]*\s*\)/
}

// Content functions
export const contentFunctions = {
  attr: /attr\(\s*[^)]*\s*\)/,
  counter: /counter\(\s*[^)]*\s*\)/,
  counters: /counters\(\s*[^)]*\s*\)/,
  string: /string\(\s*[^)]*\s*\)/
}

// Variable and environment functions
export const variableFunctions = {
  var: cssVariableUsage,
  env: /env\(\s*[^)]*\s*\)/
}

// Layout functions
export const layoutFunctions = {
  aspectRatio: /aspect-ratio\(\s*[^)]*\s*\)/
}

// Combined specificFunctions object
export const specificFunctions = {
  ...colorFunctions,
  ...gradientFunctions,
  ...transformFunctionsList,
  ...filterFunctionsList,
  ...mathFunctions,
  ...gridFunctions,
  ...shapeFunctions,
  ...imageFunctions,
  ...easingFunctions,
  ...contentFunctions,
  ...variableFunctions,
  ...layoutFunctions
}

// Multi-function patterns for properties that accept multiple functions
export const transformFunctions: RegExp =
  /(?:matrix(?:3d)?\(\s*[^)]*\s*\)|translate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|scale(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|rotate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|skew[XY]?\(\s*[^)]*\s*\)|perspective\(\s*[^)]*\s*\))(?:\s+(?:matrix(?:3d)?\(\s*[^)]*\s*\)|translate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|scale(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|rotate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|skew[XY]?\(\s*[^)]*\s*\)|perspective\(\s*[^)]*\s*\)))*/

export const filterFunctions: RegExp =
  /(?:blur\(\s*[^)]*\s*\)|brightness\(\s*[^)]*\s*\)|contrast\(\s*[^)]*\s*\)|drop-shadow\(\s*[^)]*\s*\)|grayscale\(\s*[^)]*\s*\)|hue-rotate\(\s*[^)]*\s*\)|invert\(\s*[^)]*\s*\)|opacity\(\s*[^)]*\s*\)|saturate\(\s*[^)]*\s*\)|sepia\(\s*[^)]*\s*\))(?:\s+(?:blur\(\s*[^)]*\s*\)|brightness\(\s*[^)]*\s*\)|contrast\(\s*[^)]*\s*\)|drop-shadow\(\s*[^)]*\s*\)|grayscale\(\s*[^)]*\s*\)|hue-rotate\(\s*[^)]*\s*\)|invert\(\s*[^)]*\s*\)|opacity\(\s*[^)]*\s*\)|saturate\(\s*[^)]*\s*\)|sepia\(\s*[^)]*\s*\)))*/

export const backdropFilterFunctions: RegExp = filterFunctions

export const has = {
  number: numberPattern,
  integer,
  percentage,
  fraction,
  ratio,
  dimension,
  time,
  angle,
  frequency,
  resolution,
  length,
  color,
  selector,
  hexColor,
  colorFunction,
  namedColor,
  cssFunction,
  fontWeight,
  fontSize,
  fontStyle,
  fontVariant,
  fontStretch,
  fontFamily,
  enhancedRatio,
  cssCalcFunc,
  cssVariable,
  cssVariableUsage,
  unit,
  globalKeywords,
  identifier,
  propertyName,
  string,
  numberWithUnit,
  transformFunctions,
  filterFunctions,
  backdropFilterFunctions,
  borderStyle,
  borderWidth,
  borderRadius,
  boxShadow,
  textShadow,
  mediaFeature,
  mediaQuery,
  containerQuery,
  dataUrl,
  httpUrl,
  cssValue,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationIterationCount,
  animationDirection,
  animationFillMode,
  animationPlayState,
  gridLine,
  gridArea,
  gridTrackSize,
  gridTemplate,
  flexGrow,
  flexShrink,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
}

export const is: { [K in keyof typeof has]: RegExp } = {} as any
for (const [key, pattern] of Object.entries(has)) {
  is[key as keyof typeof has] = new RegExp(`^${pattern.source}$`, 'i')
}

export const isFunction: { [K in keyof typeof specificFunctions]: RegExp } = {} as any
for (const [key, pattern] of Object.entries(specificFunctions)) {
  isFunction[key as keyof typeof specificFunctions] = new RegExp(`^${pattern.source}$`, 'i')
}

export default {
  merge,
  is,
  has,
  isFunction,
  specificFunctions,
  colorFunctions,
  gradientFunctions,
  transformFunctionsList,
  filterFunctionsList,
  mathFunctions,
  gridFunctions,
  shapeFunctions,
  imageFunctions,
  easingFunctions,
  contentFunctions,
  variableFunctions,
  layoutFunctions,
  numberPattern,
  integer,
  percentage,
  fraction,
  ratio,
  dimension,
  time,
  angle,
  frequency,
  resolution,
  length,
  color,
  selector,
  hexColor,
  colorFunction,
  namedColor,
  cssFunction,
  fontWeight,
  fontSize,
  fontStyle,
  fontVariant,
  fontStretch,
  fontFamily,
  enhancedRatio,
  cssCalcFunc,
  cssVariable,
  cssVariableUsage,
  unit,
  globalKeywords,
  identifier,
  propertyName,
  string,
  numberWithUnit,
  transformFunctions,
  filterFunctions,
  backdropFilterFunctions,
  borderStyle,
  borderWidth,
  borderRadius,
  boxShadow,
  textShadow,
  mediaFeature,
  mediaQuery,
  containerQuery,
  dataUrl,
  httpUrl,
  cssValue,
  animationName,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationIterationCount,
  animationDirection,
  animationFillMode,
  animationPlayState,
  gridLine,
  gridArea,
  gridTrackSize,
  gridTemplate,
  flexGrow,
  flexShrink,
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
}
