type RegExpType = { [type: string]: RegExp }

export declare const numberP: RegExp
export declare const integer: RegExp
export declare const percentage: RegExp
export declare const fraction: RegExp
export declare const ratio: RegExp
export declare const dimension: RegExp
export declare const time: RegExp
export declare const angle: RegExp
export declare const frequency: RegExp
export declare const resolution: RegExp
export declare const length: RegExp
export declare const color: RegExp
export declare const selector: RegExp
export declare const is: RegExpType
export declare const has: RegExpType

export default {
  is,
  has,
  numberP,
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
  color
}
