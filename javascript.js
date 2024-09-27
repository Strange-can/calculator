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
let numStr1 = ''
let numStr2 = ''
let mathSymbol = ''
let numbers = '1234567890'
let symbols = '+-*/'
let resultStorage = []
let nextSymbol = ''

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
let testNumStr1 = ''
let testNumStr2 = ''
let testMathSymbol = ''

const sign = document.querySelectorAll(".sign")
for (const signButton of sign) {
    signButton.addEventListener("click", () => {
        screenArray.push(signButton.textContent)
        screen.textContent = screenArray.join('')
        testEq()
    })
}

function testEq() {
    for ( i = 0; i < screenArray.length; i++ ) {
        if (symbols.includes(screenArray[i]) && i !== 0 && testMathSymbol === '') {
            testMathSymbol = screenArray[i]
        }
        else if ( (testMathSymbol === '' && (numbers.includes(screenArray[i]) || screenArray[i] === '-' 
        || screenArray[i] === '+' || screenArray[i] === '.')) ) {
                testNumStr1 += screenArray[i] 
          }
        else if ( numbers.includes(screenArray[i]) || (testMathSymbol !== '' && 
            (symbols.includes(screenArray[i]) || screenArray[i] === '.'))) {
              testNumStr2 += screenArray[i]
              if ((testNumStr2.endsWith('-') || testNumStr2.endsWith('+') || testNumStr2.endsWith('*') || 
                   testNumStr2.endsWith('/')) && testNumStr2.length > 1) {
                    nextSymbol = screenArray[screenArray.length - 1]
                    screenArray.splice(screenArray.length - 1, 1)
                    calculate()
                   }
            
        }}
    if ( testNumStr2 === '') {
       testNumStr1 = ''
       testMathSymbol = ''
    }
}

function makeEq() {
    for ( i = 0; i < screenArray.length; i++ ) {
        if (symbols.includes(screenArray[i]) && i !== 0 && mathSymbol === '') {
            mathSymbol = screenArray[i]
        }
        else if ( (mathSymbol === '' && (numbers.includes(screenArray[i]) || screenArray[i] === '-' 
        || screenArray[i] === '+' || screenArray[i] === '.')) ) {
                numStr1 += screenArray[i] 
          }
        else if ( numbers.includes(screenArray[i]) || (mathSymbol !== '' && 
            (symbols.includes(screenArray[i]) || screenArray[i] === '.') )) {
            numStr2 += screenArray[i]
            
        }}
    if ( numStr2 === '') {
       numStr1 = ''
       mathSymbol = ''
    }
}
function calculate() {
    makeEq()
    if (numStr1 !== '' && mathSymbol !== '' && numStr2 !== '') {
    num1 = Number(numStr1)
    num2 = Number(numStr2)
    if (num2 === 0) {
        screen.textContent = ''
        screen.textContent = 'bruh.' 
        nextSymbol = ''
        numStr1 = ''
        numStr2 = ''
        num1 = ''
        mathSymbol = ''
        num2 = ''
        testNumStr1 = ''
        testNumStr2 = ''
        testMathSymbol = ''
        screenArray.splice( 0, screenArray.length )
    }
    else {
    let answer = operator(num1, mathSymbol, num2)
    screenArray.splice( 0, screenArray.length )
    if (isNaN(answer)) { 
        screen.textContent = ''
        screen.textContent = 'ERROR' 
        nextSymbol = ''
        numStr1 = ''
        numStr2 = ''
        num1 = ''
        mathSymbol = ''
        num2 = ''
        testNumStr1 = ''
        testNumStr2 = ''
        testMathSymbol = ''
    }
    else {
        if (Number.isInteger(answer) === false) {
            estimate = Math.round(answer * 100000)/100000
            answer = estimate
        }
    let stringAns = answer.toString()
    let resultStorage = stringAns.split('')
    for (const number of resultStorage) {
        screenArray.push(number)
    }
    if (nextSymbol !== '') {
        screenArray.push(nextSymbol)
    }
    nextSymbol = ''
    screen.textContent = ''
    screen.textContent = screenArray.join('')
    numStr1 = ''
    numStr2 = ''
    num1 = ''
    mathSymbol = ''
    num2 = ''
    testNumStr1 = ''
    testNumStr2 = ''
    testMathSymbol = ''
  }}
}}
const equalSign = document.querySelector(".equal")
equalSign.addEventListener( "click", calculate)

const clearSign = document.querySelector(".clear")
clearSign.addEventListener("click", () => {
    screenArray.splice(0, screenArray.length)
    screen.textContent = ''
    testNumStr1 = ''
    testNumStr2 = ''
    testMathSymbol = ''
})

const decimalPoint = document.querySelector(".decimal")
decimalPoint.addEventListener("click", () => {
    for ( i = 0; i < screenArray.length; i++ ) {
        if (symbols.includes(screenArray[i]) && i !== 0 && testMathSymbol === '') {
            testMathSymbol = screenArray[i]
        }
        else if ( (testMathSymbol === '' && (numbers.includes(screenArray[i]) || screenArray[i] === '-' 
        || screenArray[i] === '+' || screenArray[i] === '.')) ) {
                testNumStr1 += screenArray[i] 
        }
        else if ( numbers.includes(screenArray[i]) || (testMathSymbol !== '' && 
            (symbols.includes(screenArray[i]) || screenArray[i] === '.') )) {
              testNumStr2 += screenArray[i]
        }
}
    if (testNumStr1.includes('.') === false && testNumStr2 === '') {
        screenArray.push(decimalPoint.textContent)
        screen.textContent = screenArray.join('')
    }
    else if (testNumStr2.includes('.') === false && testMathSymbol !== '') {
        screenArray.push(decimalPoint.textContent)
        screen.textContent = screenArray.join('')
    }
    else { return }
        testNumStr1 = ''
        testNumStr2 = ''
        testMathSymbol = ''

})