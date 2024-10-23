import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from ".";

test('Capitalize', () => {
  expect(capitalize('apple')).toBe('Apple');
  expect(capitalize('Apple')).toBe('Apple');
  expect(capitalize('')).toBe('');
  expect(capitalize(null)).toBeNull();
  expect(capitalize(undefined)).toBeUndefined();
});

test('Reverse String', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString(null)).toBeNull();
  expect(reverseString(undefined)).toBeUndefined();
});

test('Calculator', () => {
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(2, 5)).toBe(10);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(() => calculator.divide(10, 0)).toThrow();
});

test('Caesar Cipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('abc', -3)).toBe('xyz');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  expect(caesarCipher('', 3)).toBe('');
  expect(caesarCipher(null, 3)).toBeNull();
  expect(caesarCipher(undefined, 3)).toBeUndefined();
});

test('Analyze Array', () => {
  let arr = [1, 2, 3, 4, 5];
  expect(analyzeArray(arr)).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
  arr = [1,8,3,4,2,6];
  expect(analyzeArray(arr)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
  expect(analyzeArray([])).toEqual({average:0, min: undefined, max: undefined, length: 0});
  expect(analyzeArray(null)).toBeNull();
  expect(analyzeArray(undefined)).toBeUndefined();
});