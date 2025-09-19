import { has } from './has'
import { allCSSFunctions } from './cssFunctions'

export const is: { [K in keyof typeof has]: RegExp } = {} as any
for (const [key, pattern] of Object.entries(has)) {
  is[key as keyof typeof has] = new RegExp(`^${pattern.source}$`, 'i')
}

export const isFunction: { [K in keyof typeof allCSSFunctions]: RegExp } = {} as any
for (const [key, pattern] of Object.entries(allCSSFunctions)) {
  isFunction[key as keyof typeof allCSSFunctions] = new RegExp(`^${pattern.source}$`, 'i')
}
