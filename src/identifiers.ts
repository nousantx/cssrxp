// Basic patterns
export const identifier: RegExp = /[a-zA-Z_][a-zA-Z0-9_-]*/
export const propertyName: RegExp = /(?:-webkit-|-moz-|-ms-|-o-)?[a-zA-Z][a-zA-Z0-9-]*/
export const string: RegExp = /(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/

// Selector patterns
export const selector: RegExp =
  /(?:[.#][a-zA-Z0-9_-]+|[a-zA-Z_][a-zA-Z0-9_-]*|\*|\[(?:[a-zA-Z0-9_-]+(?:[~|^$*]?=(?:"[^"]*"|'[^']*'|[^\]]*))?)?\]|::?[a-zA-Z][a-zA-Z0-9_-]*(?:\([^\)]*\))?|>|\+|~|\s|,)+/

// Media query patterns
export const mediaFeature: RegExp =
  /(?:width|height|aspect-ratio|orientation|resolution|color|color-index|monochrome|scan|grid|update|overflow-block|overflow-inline|color-gamut|dynamic-range|video-dynamic-range|inverted-colors|pointer|hover|any-pointer|any-hover|prefers-color-scheme|prefers-contrast|prefers-reduced-motion|prefers-reduced-transparency|forced-colors|scripting|device-width|device-height|device-aspect-ratio)/
export const mediaQuery: RegExp =
  /(?:(?:only|not)?\s*)?(?:all|print|screen|speech|(?:[a-zA-Z_][a-zA-Z0-9_-]*))(?:\s+and\s+\([^)]+\))*(?:\s*,\s*(?:(?:only|not)?\s*)?(?:all|print|screen|speech|(?:[a-zA-Z_][a-zA-Z0-9_-]*))(?:\s+and\s+\([^)]+\))*)*/

// Container queries
export const containerQuery: RegExp =
  /(?:\(\s*(?:width|height|inline-size|block-size|aspect-ratio|orientation)\s*(?:[<>]=?|=)\s*[^)]+\s*\)(?:\s+and\s+\(\s*(?:width|height|inline-size|block-size|aspect-ratio|orientation)\s*(?:[<>]=?|=)\s*[^)]+\s*\))*)/

// URL patterns
export const dataUrl: RegExp =
  /data:([a-zA-Z][a-zA-Z0-9]*(?:\/[a-zA-Z][a-zA-Z0-9]*)?)?(?:;[a-zA-Z0-9-]+=[a-zA-Z0-9-]+)*;base64,[a-zA-Z0-9+/]+=*/
export const httpUrl: RegExp = /https?:\/\/[^\s)]+/
