## Easy 1-4

**Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.**

***Note: 1 square meter == 10.7639 square feet***

***Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input. ***

Problem:
- inputs
  - length in meters (positive number)
  - width in meters (positive number)

- outputs
  - area in square meters (positive number)
  - area in square feet (positive number)

- rules
  - validation not necessary
  - 1 square meter == 10.7639 square feet

Examples:

Data Structures:

Algorithm:

Code:
```js
var readlineSync = require('readline-sync');

let lengthM;
let widthM;
const sqMtoSqF = 10.7639;

console.clear();
console.log('Welcome to the Area Calculator!');

console.log('\nPlease enter a length in meters...');
while (true) {
  lengthM = readlineSync.prompt();
  if (lengthM) {
    break;
  }
}

console.log('\nPlease enter a width in meters...');
while (true) {
  widthM = readlineSync.prompt();
  if (widthM) {
    break;
  }
}
console.clear();

let areaM = lengthM * widthM;
let areaF = areaM * sqMtoSqF;

console.log(`The area of a ${lengthM} meter by ${widthM} meter rectangle is: ${areaM} square meters`);
console.log(`This is equal to: ${areaF} square feet`);
```

**LS Answer**
```js
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);
```
