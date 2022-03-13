# Multiples of 3 and 5

*Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).*

*You may assume that the number passed in is an integer greater than 1.*

Examples:

```js
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
```

## Answer

```js
function multisum(max) {
  let result = 0;
  for (let num = max; num > 2; num -= 1) {
    if ((num % 3 === 0) || (num % 5 === 0)) {
      result += num;
    }
  }
  return result;
}
```

## LS Answer

```js
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}
```

### Discussion
The solution begins with an isMultiple function that returns true if the given number is a multiple of the divisor, or false if it is not. This function isn't entirely necessary, but it makes the main function a bit more readable.

The main function, multisum, adds each value in the range to our sum variable if the value is a multiple of 3 or 5.