# Odd Numbers

### Problem

**Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.**

- We'll want to iterate through all numbers
- We'll want to include a new log statement for each number
- There's no return value

### Examples

N/A

### Data Structures

- A loop

### Algorithm

- Start a counter at 1
- Print the value of the counter to the console
- Increment the count
- Exit once 99 has been printed

### Code

**Answer**

```js
let count = 1;

while (count <= 99) {
  console.log(count);
  count += 2;
}
```

**Refactored To Be More Flexible**

```js

function logNums(maxVal, startVal, stepVal) {

  maxVal = (typeof maxVal !== 'undefined') ? maxVal : 99;
  startVal = (typeof startVal !== 'undefined') ? startVal : 1;
  stepVal = (typeof stepVal !== 'undefined') ? stepVal : 1;

  while (startVal <= maxVal) {
    console.log(startVal);
    startVal += stepVal;
  }
}
```


