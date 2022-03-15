# Isn't it Odd?

**Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.**

### Problem

- The input will be a number
- The output will be a boolean
- We only have to deal with integer numbers

### Examples

```js
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```
### Data Structures

- primitive values
- maybe a ternary operator or if/else block

### Algorithm

- get the absolute value of the input
- check if it's odd
  - if it's odd, return true
  - else return false
- exit

### Code

```js
function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}
```