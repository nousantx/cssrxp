// CSS Functions - MDN Web Docs
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions

// COLOR FUNCTIONS

import { colorFunctions } from './color'

// BASIC CSS PATTERNS

// Generic CSS function pattern
export const cssFunction: RegExp = /[a-zA-Z][a-zA-Z0-9_-]*\(\s*[^)]*\s*\)/

// CSS variables
export const cssVariable: RegExp = /--[a-zA-Z0-9_-]+/
export const cssVariableUsage: RegExp = /var\(\s*(--[a-zA-Z0-9_-]+)(?:\s*,\s*([^)]*))?\s*\)/

// TRANSFORM FUNCTIONS

export const transformFunctions = {
  // Translation functions
  translate: /translate\(\s*[^)]*\s*\)/,
  translateX: /translateX\(\s*[^)]*\s*\)/,
  translateY: /translateY\(\s*[^)]*\s*\)/,
  translateZ: /translateZ\(\s*[^)]*\s*\)/,
  translate3d: /translate3d\(\s*[^)]*\s*\)/,

  // Rotation functions
  rotate: /rotate\(\s*[^)]*\s*\)/,
  rotateX: /rotateX\(\s*[^)]*\s*\)/,
  rotateY: /rotateY\(\s*[^)]*\s*\)/,
  rotateZ: /rotateZ\(\s*[^)]*\s*\)/,
  rotate3d: /rotate3d\(\s*[^)]*\s*\)/,

  // Scaling functions
  scale: /scale\(\s*[^)]*\s*\)/,
  scaleX: /scaleX\(\s*[^)]*\s*\)/,
  scaleY: /scaleY\(\s*[^)]*\s*\)/,
  scaleZ: /scaleZ\(\s*[^)]*\s*\)/,
  scale3d: /scale3d\(\s*[^)]*\s*\)/,

  // Skew functions
  skew: /skew\(\s*[^)]*\s*\)/,
  skewX: /skewX\(\s*[^)]*\s*\)/,
  skewY: /skewY\(\s*[^)]*\s*\)/,

  // Matrix functions
  matrix: /matrix\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){6}\)/,
  matrix3d: /matrix3d\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){16}\)/,

  // Perspective functions
  perspective: /perspective\(\s*[^)]*\s*\)/,

  // Combined pattern for all transform functions
  all: /(?:matrix(?:3d)?|translate(?:[XYZ]|3d)?|scale(?:[XYZ]|3d)?|rotate(?:[XYZ]|3d)?|skew[XY]?|perspective)\(\s*[^)]*\s*\)/
}

// MATH FUNCTIONS

export const mathFunctions = {
  // Basic arithmetic
  calc: /calc\(\s*[^)]*\s*\)/,
  calcSize: /calc-size\(\s*[^)]*\s*\)/,

  // Comparison functions
  min: /min\(\s*[^)]*\s*\)/,
  max: /max\(\s*[^)]*\s*\)/,
  clamp: /clamp\(\s*[^)]*\s*\)/,

  // Stepped value functions
  round: /round\(\s*[^)]*\s*\)/,
  mod: /mod\(\s*[^)]*\s*\)/,
  rem: /rem\(\s*[^)]*\s*\)/,

  // Trigonometric functions
  sin: /sin\(\s*[^)]*\s*\)/,
  cos: /cos\(\s*[^)]*\s*\)/,
  tan: /tan\(\s*[^)]*\s*\)/,
  asin: /asin\(\s*[^)]*\s*\)/,
  acos: /acos\(\s*[^)]*\s*\)/,
  atan: /atan\(\s*[^)]*\s*\)/,
  atan2: /atan2\(\s*[^)]*\s*\)/,

  // Exponential functions
  pow: /pow\(\s*[^)]*\s*\)/,
  sqrt: /sqrt\(\s*[^)]*\s*\)/,
  hypot: /hypot\(\s*[^)]*\s*\)/,
  log: /log\(\s*[^)]*\s*\)/,
  exp: /exp\(\s*[^)]*\s*\)/,

  // Sign-related functions
  abs: /abs\(\s*[^)]*\s*\)/,
  sign: /sign\(\s*[^)]*\s*\)/,

  // Combined pattern for all math functions
  all: /(?:calc|calc-size|clamp|min|max|abs|sign|mod|rem|sin|cos|tan|asin|acos|atan|atan2|pow|sqrt|hypot|log|exp|round)\(\s*[^)]*\s*\)/
}

// FILTER FUNCTIONS

export const filterFunctions = {
  blur: /blur\(\s*[^)]*\s*\)/,
  brightness: /brightness\(\s*[^)]*\s*\)/,
  contrast: /contrast\(\s*[^)]*\s*\)/,
  dropShadow: /drop-shadow\(\s*[^)]*\s*\)/,
  grayscale: /grayscale\(\s*[^)]*\s*\)/,
  hueRotate: /hue-rotate\(\s*[^)]*\s*\)/,
  invert: /invert\(\s*[^)]*\s*\)/,
  opacity: /opacity\(\s*[^)]*\s*\)/,
  saturate: /saturate\(\s*[^)]*\s*\)/,
  sepia: /sepia\(\s*[^)]*\s*\)/,

  // Combined pattern for all filter functions
  all: /(?:blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(\s*[^)]*\s*\)/
}

// IMAGE FUNCTIONS

export const imageFunctions = {
  // Basic image functions
  url: /url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/,
  image: /image\(\s*[^)]*\s*\)/,
  imageSet: /image-set\(\s*[^)]*\s*\)/,
  crossFade: /cross-fade\(\s*[^)]*\s*\)/,
  element: /element\(\s*[^)]*\s*\)/,
  paint: /paint\(\s*[^)]*\s*\)/,

  // Combined pattern for all image functions
  all: /(?:url|image|image-set|cross-fade|element|paint)\(\s*[^)]*\s*\)/
}

// Gradient functions (subset of image functions)
export const gradientFunctions = {
  linearGradient: /linear-gradient\(\s*[^)]*\s*\)/,
  radialGradient: /radial-gradient\(\s*[^)]*\s*\)/,
  conicGradient: /conic-gradient\(\s*[^)]*\s*\)/,
  repeatingLinearGradient: /repeating-linear-gradient\(\s*[^)]*\s*\)/,
  repeatingRadialGradient: /repeating-radial-gradient\(\s*[^)]*\s*\)/,
  repeatingConicGradient: /repeating-conic-gradient\(\s*[^)]*\s*\)/,

  // Combined pattern for all gradient functions
  all: /(?:(?:repeating-)?(?:linear|radial|conic)-gradient)\(\s*[^)]*\s*\)/
}

// COUNTER FUNCTIONS

export const counterFunctions = {
  counter:
    /counter\(\s*[a-zA-Z_][-\w]*(?:\s*,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  counters:
    /counters\(\s*[a-zA-Z_][-\w]*\s*,\s*(?:"[^"]*"|'[^']*')\s*(?:,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  symbols: /symbols\(\s*[^)]*\s*\)/,

  // Combined pattern for all counter functions
  all: /(?:counter|counters|symbols)\(\s*[^)]*\s*\)/
}

// SHAPE FUNCTIONS

export const shapeFunctions = {
  circle: /circle\(\s*[^)]*\s*\)/,
  ellipse: /ellipse\(\s*[^)]*\s*\)/,
  inset: /inset\(\s*[^)]*\s*\)/,
  rect: /rect\(\s*[^)]*\s*\)/,
  xywh: /xywh\(\s*[^)]*\s*\)/,
  polygon: /polygon\(\s*[^)]*\s*\)/,
  path: /path\(\s*[^)]*\s*\)/,
  shape: /shape\(\s*[^)]*\s*\)/,
  ray: /ray\(\s*[^)]*\s*\)/,

  // Combined pattern for all shape functions
  all: /(?:circle|ellipse|inset|rect|xywh|polygon|path|shape|ray)\(\s*[^)]*\s*\)/
}

// REFERENCE FUNCTIONS

export const referenceFunctions = {
  attr: /attr\(\s*[a-zA-Z_][-\w]*(?:\s+(?:string|color|url|integer|number|length|angle|time|frequency|%))?\s*(?:,\s*[^)]*)?\s*\)/,
  env: /env\(\s*[^)]*\s*\)/,
  if: /if\(\s*[^)]*\s*\)/,
  url: /url\(\s*(?:"[^"]*"|'[^']*'|[^)]*)\s*\)/,
  var: cssVariableUsage,

  // Combined pattern for all reference functions
  all: /(?:attr|env|if|url|var)\(\s*[^)]*\s*\)/
}

// GRID FUNCTIONS

export const gridFunctions = {
  fitContent: /fit-content\(\s*[^)]*\s*\)/,
  minmax: /minmax\(\s*[^)]*\s*\)/,
  repeat: /repeat\(\s*[^)]*\s*\)/,

  // Combined pattern for all grid functions
  all: /(?:fit-content|minmax|repeat)\(\s*[^)]*\s*\)/
}

// FONT FUNCTIONS

export const fontFunctions = {
  stylistic: /stylistic\(\s*[^)]*\s*\)/,
  styleset: /styleset\(\s*[^)]*\s*\)/,
  characterVariant: /character-variant\(\s*[^)]*\s*\)/,
  swash: /swash\(\s*[^)]*\s*\)/,
  ornaments: /ornaments\(\s*[^)]*\s*\)/,
  annotation: /annotation\(\s*[^)]*\s*\)/,

  // Combined pattern for all font functions
  all: /(?:stylistic|styleset|character-variant|swash|ornaments|annotation)\(\s*[^)]*\s*\)/
}

// EASING FUNCTIONS

export const easingFunctions = {
  linear: /linear\(\s*[^)]*\s*\)/,
  cubicBezier: /cubic-bezier\(\s*(?:[-+]?(?:\d*\.\d+|\d+)\s*,?\s*){4}\)/,
  steps: /steps\(\s*[^)]*\s*\)/,

  // Combined pattern for all easing functions
  all: /(?:linear|cubic-bezier|steps)\(\s*[^)]*\s*\)/
}

// ANIMATION FUNCTIONS

export const animationFunctions = {
  scroll: /scroll\(\s*[^)]*\s*\)/,
  view: /view\(\s*[^)]*\s*\)/,

  // Combined pattern for all animation functions
  all: /(?:scroll|view)\(\s*[^)]*\s*\)/
}

// ANCHOR POSITIONING FUNCTIONS

export const anchorPositioningFunctions = {
  anchor: /anchor\(\s*[^)]*\s*\)/,
  anchorSize: /anchor-size\(\s*[^)]*\s*\)/,

  // Combined pattern for all anchor positioning functions
  all: /(?:anchor|anchor-size)\(\s*[^)]*\s*\)/
}

// TREE COUNTING FUNCTIONS

export const treeCountingFunctions = {
  siblingIndex: /sibling-index\(\s*[^)]*\s*\)/,
  siblingCount: /sibling-count\(\s*[^)]*\s*\)/,

  // Combined pattern for all tree counting functions
  all: /(?:sibling-index|sibling-count)\(\s*[^)]*\s*\)/
}

// CONTENT FUNCTIONS (Legacy - keeping for backward compatibility)

export const contentFunctions = {
  attr: /attr\(\s*[a-zA-Z_][-\w]*(?:\s+(?:string|color|url|integer|number|length|angle|time|frequency|%))?\s*(?:,\s*[^)]*)?\s*\)/,
  counter:
    /counter\(\s*[a-zA-Z_][-\w]*(?:\s*,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  counters:
    /counters\(\s*[a-zA-Z_][-\w]*\s*,\s*(?:"[^"]*"|'[^']*')\s*(?:,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  string: /string\(\s*[a-zA-Z_][-\w]*(?:\s*,\s*(?:first|start|last|first-except))?\s*\)/,
  content: /content\(\s*(?:text|before|after|first-letter|marker)\s*\)/,
  leader: /leader\(\s*(?:"[^"]*"|'[^']*'|dotted|solid|space)\s*\)/,
  targetCounter:
    /target-counter\(\s*(?:url\([^)]+\)|attr\([^)]+\))\s*,\s*[a-zA-Z_][-\w]*\s*(?:,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  targetCounters:
    /target-counters\(\s*(?:url\([^)]+\)|attr\([^)]+\))\s*,\s*[a-zA-Z_][-\w]*\s*,\s*(?:"[^"]*"|'[^']*')\s*(?:,\s*(?:decimal|disc|circle|square|decimal-leading-zero|lower-roman|upper-roman|lower-greek|lower-latin|upper-latin|armenian|georgian|lower-alpha|upper-alpha|none|[a-zA-Z_][-\w]*))?\s*\)/,
  targetText:
    /target-text\(\s*(?:url\([^)]+\)|attr\([^)]+\))\s*(?:,\s*(?:content|before|after|first-letter))?\s*\)/,

  // Combined pattern for all content functions
  all: /(?:attr|counter|counters|string|content|leader|target-counter|target-counters|target-text)\(\s*[^)]*\s*\)/
}

// EXPERIMENTAL/FUTURE FUNCTIONS (Not yet supported)

export const experimentalFunctions = {
  calcMix: /calc-mix\(\s*[^)]*\s*\)/,
  crossorigin: /crossorigin\(\s*[^)]*\s*\)/,
  firstValid: /first-valid\(\s*[^)]*\s*\)/,
  integrity: /integrity\(\s*[^)]*\s*\)/,
  progress: /progress\(\s*[^)]*\s*\)/,
  random: /random\(\s*[^)]*\s*\)/,
  randomItem: /random-item\(\s*[^)]*\s*\)/,
  referrerpolicy: /referrerpolicy\(\s*[^)]*\s*\)/,
  src: /src\(\s*[^)]*\s*\)/,
  type: /type\(\s*[^)]*\s*\)/,
  toggle: /toggle\(\s*[^)]*\s*\)/,

  // Combined pattern for all experimental functions
  all: /(?:calc-mix|crossorigin|first-valid|integrity|progress|random|random-item|referrerpolicy|src|type|toggle)\(\s*[^)]*\s*\)/
}

// COMBINED PATTERNS FOR MULTI-FUNCTION PROPERTIES

// Transform property can have multiple transform functions
export const transformProperty: RegExp =
  /(?:matrix(?:3d)?\(\s*[^)]*\s*\)|translate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|scale(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|rotate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|skew[XY]?\(\s*[^)]*\s*\)|perspective\(\s*[^)]*\s*\))(?:\s+(?:matrix(?:3d)?\(\s*[^)]*\s*\)|translate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|scale(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|rotate(?:[XYZ]|3d)?\(\s*[^)]*\s*\)|skew[XY]?\(\s*[^)]*\s*\)|perspective\(\s*[^)]*\s*\)))*/

// Filter property can have multiple filter functions
export const filterProperty: RegExp =
  /(?:blur\(\s*[^)]*\s*\)|brightness\(\s*[^)]*\s*\)|contrast\(\s*[^)]*\s*\)|drop-shadow\(\s*[^)]*\s*\)|grayscale\(\s*[^)]*\s*\)|hue-rotate\(\s*[^)]*\s*\)|invert\(\s*[^)]*\s*\)|opacity\(\s*[^)]*\s*\)|saturate\(\s*[^)]*\s*\)|sepia\(\s*[^)]*\s*\))(?:\s+(?:blur\(\s*[^)]*\s*\)|brightness\(\s*[^)]*\s*\)|contrast\(\s*[^)]*\s*\)|drop-shadow\(\s*[^)]*\s*\)|grayscale\(\s*[^)]*\s*\)|hue-rotate\(\s*[^)]*\s*\)|invert\(\s*[^)]*\s*\)|opacity\(\s*[^)]*\s*\)|saturate\(\s*[^)]*\s*\)|sepia\(\s*[^)]*\s*\)))*/

// Backdrop-filter uses the same pattern as filter
export const backdropFilterProperty: RegExp = filterProperty

// ALL FUNCTIONS COMBINED

export const allCSSFunctions = {
  ...transformFunctions,
  ...mathFunctions,
  ...filterFunctions,
  ...colorFunctions,
  ...imageFunctions,
  ...gradientFunctions,
  ...counterFunctions,
  ...shapeFunctions,
  ...referenceFunctions,
  ...gridFunctions,
  ...fontFunctions,
  ...easingFunctions,
  ...animationFunctions,
  ...anchorPositioningFunctions,
  ...treeCountingFunctions,
  ...experimentalFunctions,

  var: cssVariableUsage,
  all: cssFunction
}

export const cssCalcFunc = mathFunctions.calc
export const transformFunctionsList = transformFunctions
export const filterFunctionsList = filterFunctions
export const specificFunctions = allCSSFunctions
export { backdropFilterProperty as backdropFilterFunctions }
