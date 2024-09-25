function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

let num1 = ''
let num2 = ''
let mathSymbol = ''
let numbers = '1234567890'
let symbols = '+-*/'
let resultStorage = []

function operator(num1, mathSymbol, num2) {
    if (mathSymbol === '+') {
        return add(num1, num2)
    }
    else if (mathSymbol === '-') {
        return subtract(num1, num2)
    }
    else if (mathSymbol === '*') {
        return multiply(num1, num2)
    }
    else if (mathSymbol === '/') {
        return divide(num1, num2)
    }
}
let screenArray = []
const screen = document.querySelector(".display")
const seenButtons = document.querySelectorAll(".screenDisplay")
for (const button of seenButtons) {
    button.addEventListener("click", () => {screenArray.push(button.textContent)
    screen.textContent = screenArray.join('')
  })
}

function calculate() { 
    let numStr1 = ''
    let numStr2 = ''
    for ( i = 0; i < screenArray.length; i++ ) {
    if (symbols.includes(screenArray[i]) && screenArray.indexOf(screenArray[i]) !== 0 && mathSymbol === '') {
        mathSymbol = screenArray[i]
    }
    else if ( (mathSymbol === '' && (numbers.includes(screenArray[i]) || screenArray[i] === '-' )) ) {
            numStr1 += screenArray[i] 
      }
    else if ( numbers.includes(screenArray[i]) || (mathSymbol !== '' && symbols.includes(screenArray[i]))) {
        numStr2 += screenArray[i]
    }
}
    num1 = Number(numStr1)
    num2 = Number(numStr2)
    console.log(num1)
    console.log(mathSymbol)
    console.log(num2)
    let answer = operator(num1, mathSymbol, num2)
    screenArray.splice( 0, screenArray.length )
    let stringAns = answer.toString()
    let resultStorage = stringAns.split('')
    for (const number of resultStorage) {
        screenArray.push(number)
    }
    screen.textContent = ''
    screen.textContent = screenArray.join('')
    num1 = ''
    mathSymbol = ''
    num2 = ''
}
console.log(screenArray)
const equalSign = document.querySelector(".equal")
equalSign.addEventListener( "click", calculate)

