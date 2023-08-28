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
let firstNumber = "";
let secondNumber = "";
let operator = "";

function operate(firstNumber, secondNumber) {
  return add(firstNumber, secondNumber);
}

// Define Number buttons and input function
let isNumber = document.querySelectorAll(".numbers");

isNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    firstNumber += button.textContent;
    console.log(firstNumber);
  });
});

// Define Operator buttons and input function
let isOperator = document.querySelectorAll(".operators");

isOperator.forEach(function (button) {
  button.addEventListener("click", function () {
    operator = button.textContent;
    console.log(operator);
  });
});
