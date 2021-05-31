/**
 * * 千分位方法
 *
 * @param {(number)} number
 * @return {*}  {string}
 */
export const toThousand = (number: number): string => {
  if (number === 0) {
    return '0'
  }
  const result: string[] = []
  let counter = 0

  const integer = number.toString().split('.')[0]
  const decimal = number.toString().split('.')[1]

  const num = integer.toString().split('')
  for (let i = num.length - 1; i >= 0; i--) {
    counter++
    result.unshift(num[i])
    if (!(counter % 3) && i !== 0) {
      result.unshift(',')
    }
  }
  return result.join('') + (decimal ? `.${decimal}` : '')
}

/**
 * * wei转eth,并加千分位
 *
 * @param {number} number
 * @return {*}  {string}
 */
export const wei2eth = (number: number): string => {
  const res = number / 10 ** 18
  return toThousand(res)
}
