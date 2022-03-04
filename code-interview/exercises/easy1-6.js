const readlineSync = require('readline-sync');
const SPACER1 = '=';
const SPACER2 = '-';

console.clear();

function displayWelcome() {
  let welcome = 'Continuous Series Addition / Multiplication Calculator';
  console.log(SPACER1.repeat(welcome.length));
  console.log(welcome.toUpperCase());
  console.log(SPACER1.repeat(welcome.length));
}

function displaySeries(userNum) {
  let seriesMessage = `The series to operate on is 1 through ${userNum}`;
  console.log(SPACER2.repeat(seriesMessage.length));
  console.log(seriesMessage);
  console.log(SPACER2.repeat(seriesMessage.length));
}

displayWelcome();

let num = parseInt(readlineSync.question('\nPlease enter a number greater than 0...\n'), 10);

while (true) {
  if (num < 1 || Number.isNaN(num)) {
    console.clear();
    console.log(`I'm sorry, ${num} is not valid, please try again...`);
    num = parseInt(readlineSync.question('\nPlease enter a number greater than 0...\n'), 10);
  } else {
    break;
  }
}

console.clear();
displayWelcome();
displaySeries(num);

let operation = readlineSync.question('Enter "S" to calculate sum or "P" to calculate product...\n').toUpperCase();

while (true) {
  if (operation === "S" || operation === "P") {
    break;
  } else {
    console.log(`I'm sorry, "${operation}" is not valid, please try again...`);
    operation = readlineSync.question('Enter "S" to calculate sum or "P" to calculate product...\n').toUpperCase();
  }
}

let result = num;

if (operation === "S") {
  for (let count = num; count > 1; count -= 1) {
    result += count - 1;
  }
} else {
  for (let count = num; count > 1; count -= 1) {
    result *= count - 1;
  }
}

function displayCalc(opSelect) {
  if (opSelect === 'S') {
    opSelect = 'sum';
  } else {
    opSelect = 'product';
  }
  let resultMessage = `The ${opSelect} of the series 1 through ${num} is ${result}`;
  console.log(SPACER2.repeat(resultMessage.length));
  console.log(resultMessage);
  console.log(SPACER2.repeat(resultMessage.length));
}

console.clear();
displayWelcome();
displaySeries(num);
displayCalc(operation);

