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

const screen = document.querySelector(".display")
const seenButtons = document.querySelectorAll(".screenDisplay")
for (const button of seenButtons) {
    button.addEventListener("click", () => screen.textContent = button.textContent)
}