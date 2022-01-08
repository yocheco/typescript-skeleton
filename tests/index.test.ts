// To example
import fizzBuzz from '../src/index'

describe('First test', () => {
  test('return same number', () => {
    expect(fizzBuzz(1)).toBe(1)
  })

  test('return Fizz to set number fivisible to 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
    expect(fizzBuzz(6)).toBe('Fizz')
    expect(fizzBuzz(9)).toBe('Fizz')
  })

  test('should return Buzz to set number fivisible to 5', async () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
  })
})
