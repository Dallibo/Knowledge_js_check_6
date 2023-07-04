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