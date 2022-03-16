# Arithmetic Integer
*Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.*

Example

```js
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
```
The final output above shows how JavaScript displays numbers that are too large for its `Number` type. The number represents approximately `1.41 * 100,000,000,000,000,000,000,000` using what is called `floating-point notation`. If you want to see what the exact value is, you can use JavaScript's `BigInt` type by appending an `n` to both `23` and `17`:

```js
> 23n ** 17n    // 141050039560662968926103n
```

## Answer
```js
const readlineSync = require('readline-sync');
let num1 = readlineSync.question('Please enter a number...');
let num2 = readlineSync.question('Please enter another number...');

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ^ ${num2} = ${BigInt(num1 ** num2)}`);

```
## LS Answer

```js
const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
```

### Discussion
There's an edge case that we're ignoring in this exercise -- division by `0` in JavaScript returns either `Infinity`, `-Infinity`, or `NaN` depending on whether the first number is positive, negative, or zero.