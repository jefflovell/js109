## Sum or Product of Consecutive Integers
*Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.*

**Examples:**
```
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
```
```
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
```

### PEDAC

**Problem**
- inputs
  - integer number > 0
  - prompt for sum calculation (addition) OR
  - prompt for product calculation (multiplication)
- outputs
  - sum or product (based on input) of all consecutive integer (whole) numbers between 1 and the input integer (inclusive)

- considerations:
  - input validation? AND/OR
  - input sanitation? AND/OR
  - input error handling?
  - performance optimization?
    - very simple to build an iterative solution but would be O(n) time

**Examples**
- see above

**Data Structure**
- simple structures, primitive values and arithmetic
- numbers
- strings (input is string)
- variables

**Algorithm**

- // dependency to get user input (readline-sync)
- take a user input A (will be a string) and convert it to an integer
- check that the integer is greater than 0
  - if not, inform the user and ask for a new integer // subroutine?
- assign input A to a variable

- take a user input B (will be string) for either a summation or product calculation
- use input A as starting value of a decrementing loop
- declare a results variable
  - if product
    - multiply starting value by input A minus 1 and add to result
    - decrement starting value until 1
    - exit loop and print result
  - if summation
    - add input A minus 1 to starting value and store to result
    - decrement starting value until 1
    - exit loop and print result
- ask user if they want to perform another caluclation? // subroutine?

**Code** *(with intent...)*

```js
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
```

**LS Answer**
```js
function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}
```

### Discussion
*For brevity and simplicity, our solution doesn't try too hard to validate the user input. Your own solution should probably try to validate input and issue error messages as needed.*

*The solution defines two helper functions: computeSum and computeProduct. Which one will be used depends on the input that is provided by the user ('p' or 's'). Note the starting value for total in both of these functions. It is 1 for computeProduct, instead of 0; otherwise the value returned would always be 0.*