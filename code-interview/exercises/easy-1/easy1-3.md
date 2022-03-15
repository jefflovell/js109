## Easy 1-3

**Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.**

Problem
- natural positive numbers
- even only
- must print each number on its own line

Examples
- The test is self evident i think

Data Structures
- numbers

Algorithm
- initialize a loop at 1
  - print the current number
  - iterate a counter by 1
- exit the loop after 99 is printed

Code with Intent

```js
for (let n = 1; n < 100; n += 1) {
  if (n % 2 === 1) continue;
  console.log(n);
}
```

*LS Answer*
```js
for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}
```