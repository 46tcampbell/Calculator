let calcNum1 = null;
let calcOperator;
let calcNum2 = null;

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
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '0';
  } else {
    calcDisplay.textContent += '0';
  }
});

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '1';
  } else {
    calcDisplay.textContent += '1';
  }
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '2';
  } else {
    calcDisplay.textContent += '2';
  }
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '3';
  } else {
    calcDisplay.textContent += '3';
  }
});

const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '4';
  } else {
    calcDisplay.textContent += '4';
  }
});

const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '5';
  } else {
    calcDisplay.textContent += '5';
  }
});

const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '6';
  } else {
    calcDisplay.textContent += '6';
  }
});

const btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '7';
  } else {
    calcDisplay.textContent += '7';
  }
});

const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '8';
  } else {
    calcDisplay.textContent += '8';
  }
});

const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {
  if (calcDisplay.textContent === '0') {
    calcDisplay.textContent = '9';
  } else {
    calcDisplay.textContent += '9';
  }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  calcDisplay.textContent = '';
});

console.log(operate(calcNum1, calcNum2, calcOperator));

//   below was functionality on Button 0, but I don't think I'll actually need this
//   if (calcNum1 === null && calcNum2 === null) {
//     calcNum1 = 0;
//   } else if ((calcNum1 || calcNum1 === 0) && calcNum2 === null) {
//     calcNum2 = 0;
//   }
