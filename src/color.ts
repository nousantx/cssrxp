import { merge } from './utils/merge'

export const hexColor: RegExp = /#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})/
export const colorFunction: RegExp =
  /(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)/
export const namedColor: RegExp =
  /\b(?:aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)\b/
export const color: RegExp = merge(hexColor, colorFunction, namedColor)
export const colorFunctions = {
  // RGB color space
  rgb: /rgba?\(\s*(?:\d+(?:\.\d+)?%?\s*,\s*){2}\d+(?:\.\d+)?%?(?:\s*,\s*(?:\d*\.)?\d+(?:%|\s*\/\s*(?:\d*\.)?\d+%?)?)?\s*\)/,

  // HSL color space
  hsl: /hsla?\(\s*(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,\s*){2}\d+(?:\.\d+)?%?(?:\s*,\s*(?:\d*\.)?\d+(?:%|\s*\/\s*(?:\d*\.)?\d+%?)?)?\s*\)/,

  // HWB color space
  hwb: /hwb\(\s*(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d+(?:\.\d+)?%\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,

  // LAB color space
  lab: /lab\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:[-+]?\d+(?:\.\d+)?%?\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  oklab:
    /oklab\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:[-+]?\d+(?:\.\d+)?%?\s*,?\s*){2}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,

  // LCH color space
  lch: /lch\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,
  oklch:
    /oklch\(\s*(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?%?\s*,?\s*){1}(?:\d+(?:\.\d+)?(?:deg|rad|grad|turn)?\s*,?\s*){1}(?:\d*\.)?\d+%?(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,

  // Generic color function
  color: /color\(\s*[a-zA-Z0-9-]+(?:\s+[\d.%]+){1,4}(?:\s*\/\s*(?:\d*\.)?\d+%?)?\s*\)/,

  // Color manipulation functions
  colorMix:
    /color-mix\(\s*in\s+[a-zA-Z0-9-]+(?:\s+[a-zA-Z0-9-]+)?\s*,\s*[^,)]+(?:\s+\d+(?:\.\d+)?%)?\s*,\s*[^)]+(?:\s+\d+(?:\.\d+)?%)?\s*\)/,
  contrastColor: /contrast-color\(\s*[^)]*\s*\)/,
  deviceCmyk: /device-cmyk\(\s*[^)]*\s*\)/,
  lightDark: /light-dark\(\s*[^,)]+\s*,\s*[^)]+\s*\)/,

  // Combined pattern for all color functions
  all: /(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color|color-mix|contrast-color|device-cmyk|light-dark)\(\s*[^)]*\s*\)/
}
