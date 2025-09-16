let calcNum1 = 10;
let calcOperator = 'forwardSlash';
let calcNum2 = 10;

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

function operate(num1, num2, operator) {
  if (operator === 'plus') {
    return add(num1, num2);
  } else if (operator === 'minus') {
    return subtract(num1, num2);
  } else if (operator === 'asterisk') {
    return multiply(num1, num2);
  } else if (operator === 'forwardSlash') {
    return divide(num1, num2);
  }
}

console.log(operate(calcNum1, calcNum2, calcOperator));
