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