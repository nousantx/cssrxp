import { time } from './basic'

// Complete CSS value pattern
export const cssValue: RegExp =
  /(?:inherit|initial|revert|revert-layer|unset|[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?|#(?:[a-fA-F0-9]{3,4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})|(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color)\(\s*[^)]*\s*\)|[a-zA-Z][a-zA-Z0-9_-]*\(\s*[^)]*\s*\)|"[^"]*"|'[^']*'|[a-zA-Z_][a-zA-Z0-9_-]*)/

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
