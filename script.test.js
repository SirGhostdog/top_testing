import { Caeser, Calculator, capitalFirst, reverseString } from './script.js'

test ('turns chicago into Chicago', () => {
    expect(capitalFirst('chicago')).toBe('Chicago');
})

test ('turns chicago into ogacihc', () => {
    expect(reverseString('chicago')).toBe('ogacihc');
})

test ('add', () => {
    expect(Calculator.add(1, 2)).toBe(3);
})

test ('subtract', () => {
    expect(Calculator.subtract(4, 2)).toBe(2);
})

test ('multiply', () => {
    expect(Calculator.multiply(5, 2)).toBe(10);
})

test ('divide', () => {
    expect(Calculator.division(6, 2)).toBe(3);
})

test ('Hello, World! cipher shift', () => {
    const code = new Caeser('Hello, World!', 3)
    // expect(code.cipher()).toBe('Khoor, Zruog!')
    // expect(code.strip()).toBe('HelloWorld')
    expect(code.shiftLetters()).toBe('KhoorZruog')
})