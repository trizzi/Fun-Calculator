let runningTotal = 0;
let buffer = '0s';

const screen = document.querySelector('.screen');
const button = document.querySelector('.cal-button');

button.addEventListener('click', function (e) {
  e.preventDefault();
  buttonClick(e.target.innerText);
  console.log(
    'Element clicked through function!',
    e.target.innerText
  );
});

const buttonClick = (value) => {
  if (isNaN(parseInt(value))) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
};

const handleSymbol = (value) => {};

const handleNumber = (value) => {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
};
