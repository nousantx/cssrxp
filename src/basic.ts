import { cssUnits } from './lib/cssUnits'

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
export const length: RegExp = new RegExp(`-?(?:\d*\.)?\d+(?:${cssUnits.join('|')})`)
export const enhancedRatio: RegExp =
  /(?:(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?)\s*\/\s*(?:[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+|fr)?))/
export const unit: RegExp = new RegExp(`(?:${cssUnits.join('|')})`)
export const globalKeywords: RegExp = /(?:inherit|initial|revert|revert-layer|unset)/
export const numberWithUnit: RegExp = /[-+]?(?:\d*\.\d+|\d+)(?:[a-zA-Z%]+)?/
