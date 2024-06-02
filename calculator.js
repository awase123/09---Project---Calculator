const display = document.querySelector(".display");
const buttons = document.querySelectorAll(
  '.btn:not([data-value="AC"]):not([data-value="+/-"]):not([data-value="%"])'
);

const clearButton = document.querySelector('.btn[data-value = "AC"]');
const equalButton = document.querySelector('.btn[data-value = "="]');
const sumButton = document.querySelector('.btn[data-value = "+"]');
const subtractionButton = document.querySelector('.btn[data-value = "-"]');
const multiplicationButton = document.querySelector('.btn[data-value = "x"]');
const divisionButton = document.querySelector('.btn[data-value = "÷"]');

let currentInput = "";
let numbers = [];
let currentOperation = null;

function sum(nums) {
  return nums.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

function subtraction(nums) {
  return nums.reduce((acc, num) => {
    return acc - num;
  }, nums[0] * 2);
}

function multiplication(nums) {
  return nums.reduce((acc, num) => {
    return acc * num;
  }, 1);
}

function division(nums) {
  return nums.reduce((acc, num) => {
    return acc / num;
  });
}

clearButton.addEventListener("click", () => {
  display.textContent = "0";
  currentInput = "";
  numbers = [];
});

sumButton.addEventListener("click", () => {
  if (currentInput) {
    numbers.push(parseFloat(currentInput));
    currentInput = "";
    display.textContent = "0";
    currentOperation = "+";
  }
});

subtractionButton.addEventListener("click", () => {
  if (currentInput) {
    numbers.push(parseFloat(currentInput));
    currentInput = "";
    display.textContent = "0";
    currentOperation = "-";
  }
});

multiplicationButton.addEventListener("click", () => {
  if (currentInput) {
    numbers.push(parseFloat(currentInput));
    currentInput = "";
    display.textContent = "0";
    currentOperation = "x";
  }
});

divisionButton.addEventListener("click", () => {
  if (currentInput) {
    numbers.push(parseFloat(currentInput));
    currentInput = "";
    display.textContent = "0";
    currentOperation = "÷";
  }
});

equalButton.addEventListener("click", () => {
  if (currentInput) {
    numbers.push(parseFloat(currentInput));
    currentInput = "";
  }
  let result;
  switch (currentOperation) {
    case "+":
      result = sum(numbers);
      break;
    case "-":
      result = subtraction(numbers);
      break;
    case "x":
      result = multiplication(numbers);
      break;
    case "÷":
      result = division(numbers);
      break;
    default:
      result = numbers.length > 0 ? numbers[numbers.length] : 0;
      break;
  }
  display.textContent = result;
  numbers = [];
  currentOperation = null;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (!isNaN(value) || value === ".") {
      if (display.textContent.length < 13) {
        if (display.textContent === "0") {
          display.textContent = value;
        } else {
          display.textContent += value;
        }
        currentInput += value;
      }
    }
  });
});
