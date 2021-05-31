import { toThousand, wei2eth } from '.'

test('「toThousand」0', () => {
  expect(toThousand(0)).toBe('0')
})
test('「toThousand」整数不过千位', () => {
  expect(toThousand(156)).toBe('156')
})
test('「toThousand」整数超过千位', () => {
  expect(toThousand(263331000)).toBe('263,331,000')
})
test('「toThousand」带小数不过千位', () => {
  expect(toThousand(63.331)).toBe('63.331')
})
test('「toThousand」带小数超过千位', () => {
  expect(toThousand(1243263.331)).toBe('1,243,263.331')
})

test('「wei2eth」0', () => {
  expect(wei2eth(0)).toBe('0')
})
test('「wei2eth」整数不过千位', () => {
  expect(wei2eth(18 * 10 ** 18)).toBe('18')
})
test('「wei2eth」整数超过千位', () => {
  expect(wei2eth(15846 * 10 ** 18)).toBe('15,846')
})
test('「wei2eth」带小数不过千位', () => {
  expect(wei2eth(63.331 * 10 ** 18)).toBe('63.331')
})
test('「wei2eth」带小数超过千位', () => {
  expect(wei2eth(3263.331 * 10 ** 18)).toBe('3,263.331')
})
