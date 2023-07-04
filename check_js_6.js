function numbers(numb1, numb2) {
    if (numb1 < numb2) {
        console.log(-1)
    }
    else if (numb1 > numb2) {
        console.log(1)
    }
    else {
        console.log(0)
    }
}
let numb1 = 44
let numb2 = 32
numbers(numb1, numb2)

function factorial(number) {
    let newFactorial = 1;
    for (let i = 1; i <= number; i ++) {
        newFactorial *= i;
    }
    return newFactorial
}
let number = 5
console.log(factorial(number));

let a = 1
let b = 4
let c = 9
function combineDigits(a, b, c) {
    return Number(`${a}${b}${c}`)
}
let combNumb = combineDigits(a, b, c)
console.log(combNumb)

let l = +prompt("Enter the length");
let w = +prompt("Enter the width");

function calculateArea(length, width) {
    let area = 0;
    if (typeof width === undefined) {
        area = length * 4;
    } else {
        area = length * width;
    }
    return area;
}

let result = calculateArea(l, w);
console.log(result);
