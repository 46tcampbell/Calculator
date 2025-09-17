let calcNum1 = undefined;
let calcOperator = undefined;
let calcNum2 = undefined;

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

const calcDisplay = document.querySelector('#calc-display');
const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {
  if (calcNum1 && calcNum2 === undefined && calcOperator === 'forwardSlash') {
    return alert(`Hey, you can't divide by 0 you Silly Sally`);
  } else if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '0';
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '0';
  }
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '1';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '1';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '1';
  }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '2';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '2';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '2';
  }
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '3';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '3';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '3';
  }
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '4';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '4';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '4';
  }
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '5';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '5';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '5';
  }
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '6';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '6';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '6';
  }
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '7';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '7';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '7';
  }
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '8';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '8';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '8';
  }
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
  if (
    calcDisplay.textContent === '0' ||
    (calcNum1 && calcOperator === undefined && calcNum2 === undefined)
  ) {
    calcDisplay.textContent = '9';
  } else if (calcNum1 && calcOperator && calcNum2 === undefined) {
    calcDisplay.textContent = '9';
    calcNum2 = null;
  } else if (calcDisplay.textContent.length >= 17) {
  } else {
    calcDisplay.textContent += '9';
  }
});

const btnDivide = document.querySelector('#btnDivide');
btnDivide.addEventListener('click', () => {
  if (
    calcDisplay.textContent &&
    calcNum1 === undefined &&
    calcNum2 === undefined &&
    calcOperator === undefined
  ) {
    calcNum1 = Number(calcDisplay.textContent);
    calcOperator = 'forwardSlash';
    // calcDisplay.textContent += ' /';
  } else if (
    calcDisplay.textContent &&
    calcNum1 &&
    calcNum2 === null &&
    calcOperator
  ) {
    calcNum2 = Number(calcDisplay.textContent);
    calcDisplay.textContent = operate(calcNum1, calcNum2, calcOperator);
    if (
      calcDisplay.textContent.length >= 17 &&
      calcDisplay.textContent.includes('.')
    ) {
      calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(15);
    }
    calcNum1 = Number(calcDisplay.textContent);
    calcNum2 = undefined;
    calcOperator = 'forwardSlash';
  }
});

const btnMultiply = document.querySelector('#btnMultiply');
btnMultiply.addEventListener('click', () => {
  if (
    calcDisplay.textContent &&
    calcNum1 === undefined &&
    calcNum2 === undefined &&
    calcOperator === undefined
  ) {
    calcNum1 = Number(calcDisplay.textContent);
    calcOperator = 'asterisk';
    // calcDisplay.textContent += ' /';
  } else if (
    calcDisplay.textContent &&
    calcNum1 &&
    calcNum2 === null &&
    calcOperator
  ) {
    calcNum2 = Number(calcDisplay.textContent);
    calcDisplay.textContent = operate(calcNum1, calcNum2, calcOperator);
    if (
      calcDisplay.textContent.length >= 17 &&
      calcDisplay.textContent.includes('.')
    ) {
      calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(15);
    }
    calcNum1 = Number(calcDisplay.textContent);
    calcNum2 = undefined;
    calcOperator = 'asterisk';
  }
});

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => {
  if (
    calcDisplay.textContent &&
    calcNum1 === undefined &&
    calcNum2 === undefined &&
    calcOperator === undefined
  ) {
    calcNum1 = Number(calcDisplay.textContent);
    calcOperator = 'plus';
    // calcDisplay.textContent += ' /';
  } else if (
    calcDisplay.textContent &&
    calcNum1 &&
    calcNum2 === null &&
    calcOperator
  ) {
    calcNum2 = Number(calcDisplay.textContent);
    calcDisplay.textContent = operate(calcNum1, calcNum2, calcOperator);
    if (
      calcDisplay.textContent.length >= 17 &&
      calcDisplay.textContent.includes('.')
    ) {
      calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(15);
    }
    calcNum1 = Number(calcDisplay.textContent);
    calcNum2 = undefined;
    calcOperator = 'plus';
  }
});

const btnSubtract = document.querySelector('#btnSubtract');
btnSubtract.addEventListener('click', () => {
  if (
    calcDisplay.textContent &&
    calcNum1 === undefined &&
    calcNum2 === undefined &&
    calcOperator === undefined
  ) {
    calcNum1 = Number(calcDisplay.textContent);
    calcOperator = 'minus';
    // calcDisplay.textContent += ' /';
  } else if (
    calcDisplay.textContent &&
    calcNum1 &&
    calcNum2 === null &&
    calcOperator
  ) {
    calcNum2 = Number(calcDisplay.textContent);
    calcDisplay.textContent = operate(calcNum1, calcNum2, calcOperator);
    if (
      calcDisplay.textContent.length >= 17 &&
      calcDisplay.textContent.includes('.')
    ) {
      calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(15);
    }
    calcNum1 = Number(calcDisplay.textContent);
    calcNum2 = undefined;
    calcOperator = 'minus';
  }
});

const btnEquals = document.querySelector('#btnEquals');
btnEquals.addEventListener('click', () => {
  if (
    calcDisplay.textContent &&
    calcNum1 &&
    (calcNum2 === undefined || calcNum2 === null) &&
    calcOperator
  ) {
    calcNum2 = Number(calcDisplay.textContent);
    calcDisplay.textContent = operate(calcNum1, calcNum2, calcOperator);
    if (
      calcDisplay.textContent.length >= 17 &&
      calcDisplay.textContent.includes('.')
    ) {
      calcDisplay.textContent = Number(calcDisplay.textContent).toFixed(15);
    }
    calcNum1 = undefined;
    calcNum2 = undefined;
  }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  calcDisplay.textContent = '';
  calcNum1 = undefined;
  calcNum2 = undefined;
  calcOperator = undefined;
});

// console.log(operate(calcNum1, calcNum2, calcOperator));

// console.log(calcNum1, calcNum2, calcOperator)
