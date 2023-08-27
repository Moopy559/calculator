// Basic operator functions
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 3));

function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(2, 3));

function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 3));

function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(2, 3));

// Variables for operator functions
let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function operate(firstNumber, secondNumber) {
    return add(firstNumber, secondNumber);
}

console.log(operate(1,2));