export function merge(...regexes: RegExp[]): RegExp {
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
