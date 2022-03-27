# Stringy Strings
*Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.*

Examples:
```js
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
```

## Answer
```js
function stringy(posInt) {
  let result = '';
  for (let i = 1; i <= posInt; i++) {
    if (i % 2 === 1) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}
```

## LS Answer
```js
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
```

### Discussion
The solution makes use of a for loop to incrementally build the result string. At every iteration of the loop, the solution checks to see if the index position is even. If so, the solution appends a '1' to the initially empty result string, or '0' otherwise.