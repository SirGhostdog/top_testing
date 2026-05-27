export function capitalFirst(str) {
    if (!str){
        return ""
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }  
}

export function reverseString(str){
    if (!str){
        return ""
    } else {
        return str.split("").reverse().join("")
    }
}

export class Calculator {

    static add(x, y){
        return x + y
    }

    static subtract(x, y){
        return x - y;
    }

    static multiply(x, y){
        return x * y;
    }

    static division(x, y){
        return x / y
    }
}

export class Caeser {
    
    constructor(plain, shift) {
        this.plain = plain;
        this.shift = shift;
    }

    cipher() {
        this.shiftLetters()
    }

    // strip(){

    //     const string = this.plain;
    //     const letters = string.replace(/[^a-zA-Z]/g, "")
    //     return letters

    // }

    shiftLetters() {

        const stripped = this.plain
        let charCode = []
        
        for (i = 0; i < stripped.length; i++){

            if((64 < stripped.charCodeAt(i) && stripped.charCodeAt(i) < 91) || (96 < stripped.charCodeAt(i) && stripped.charCodeAt(i) < 123)) {
            charCode.push(stripped.charCodeAt(i) + this.shift)
            } else {
                charCode.push(stripped.charCodeAt(i))
            }
        }

        const shifted = String.fromCharCode(...charCode)

        return shifted 
    }
}

export function analyzeArray(numbers) {

    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length

    const min = Math.min(...numbers)

    const max = Math.max(...numbers)

    const length = numbers.length

    return {
        average,
        min,
        max,
        length
    }
}