import fizzBuzz from '../src/index'

describe('First test', () => {
  test('return same number', () => {
    expect(fizzBuzz(1)).toBe(1)
  })

  test('return Fizz to set number fivisible to 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(6)).toBe('Fizz')
  })
})
