let runningTotal = 0;
let typedValue = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');
const button = document.querySelector('.calc-buttons');

button.addEventListener('click', function (e) {
  buttonClick(e.target.innerText);
});

const buttonClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
};

const handleSymbol = (value) => {
  switch (value) {
    case 'C':
      typedValue = '0';
      runningTotal = 0;
      previousOperator = null;
      break;
    case '=':
      if (previousOperator === null) {
        return;
      } else {
        flushOperation(parseInt(typedValue));
        previousOperator = null;
        typedValue = '' + runningTotal;
        runningTotal = 0;
      }
      break;
    case '←':
      if (typedValue.length === 1) {
        typedValue = '0';
      } else {
        typedValue = typedValue.substring(
          0,
          typedValue.length - 1
        );
      }
      break;
    default:
      handleMath(value);
      break;
  }
};

const handleNumber = (value) => {
  if (typedValue === '0') {
    typedValue = value;
  } else {
    typedValue += value;
  }
};

const handleMath = (value) => {
  const intTypedvalue = parseInt(typedValue);
  if (runningTotal === 0) {
    runningTotal = intTypedvalue;
  } else {
    flushOperation(intTypedvalue);
  }
  previousOperator = value;
  typedValue = '0';
};

const flushOperation = (intTypedvalue) => {
  if (previousOperator === '+') {
    runningTotal += intTypedvalue;
  } else if (previousOperator === '-') {
    runningTotal -= intTypedvalue;
  } else if (previousOperator === 'X') {
    runningTotal *= intTypedvalue;
  } else {
    runningTotal /= intTypedvalue;
  }
};

const rerender = () => {
  screen.innerText = typedValue;
};
