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
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator == "x") {
    return multiply(firstNumber, secondNumber);
  } else {
    return divide(firstNumber, secondNumber);
  }
}

// Define Display Value
let displayValue = document.querySelector("#display-value");

// Define Number buttons and input function
let isNumber = document.querySelectorAll(".numbers");

isNumber.forEach(function (button) {
  button.addEventListener("click", function () {
    if (firstNumber == "") {
      firstNumber += button.textContent;
      console.log(firstNumber);
      displayValue.textContent = firstNumber;
    } else if (!firstNumber == "") {
      secondNumber += button.textContent;
      console.log(secondNumber);
      displayValue.textContent = secondNumber;
    }
  });
});

// Define Operator buttons and input function
let isOperator = document.querySelectorAll(".operators");

isOperator.forEach(function (button) {
  button.addEventListener("click", function () {
    operator = button.textContent;
    console.log(operator);
    displayValue.textContent = operator;
  });
});

// Define Clear button and input function
let isClear = document.querySelector("#row1 :nth-child(4)");

isClear.addEventListener("click", function () {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue.textContent = 0;
});

//Define Equals button and input function
let isEquals = document.querySelector("#row4 :nth-child(3)");

isEquals.addEventListener("click", function () {
  firstNumber *= 1;
  secondNumber *= 1;
  console.log(operate(firstNumber, secondNumber));
  displayValue.textContent = operate(firstNumber, secondNumber);
  firstNumber = "";
  secondNumber = "";
  operator = "";
});
