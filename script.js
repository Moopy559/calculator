// Basic operator functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// Variables for operator functions
let firstNumber = '';
let secondNumber = '';
let operator = '';

function operate(firstNumber, secondNumber) {
    return add(firstNumber, secondNumber);
}

let isNumber = document.querySelectorAll('.numbers');
console.log(isNumber);

isNumber.forEach(function(button) {
  button.addEventListener('click', function() {
    firstNumber += button.textContent;
    console.log(firstNumber);
  });
});