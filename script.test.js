import { Calculator, capitalFirst, reverseString } from './script.js'

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