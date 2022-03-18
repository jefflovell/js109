# Odd Lists
*Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.*

Examples:

```js
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []
```

## Answer
```js
function oddities(arr) {
  return arr.filter((el, idx) => idx % 2 === 0);
}

```

## LS Answer

```js
function oddities(array) {
  let oddElements = [];
  for (let idx = 0; idx < array.length; idx += 2) {
    oddElements.push(array[idx]);
  }
  return oddElements;
}
```
### Discussion
This problem can be slightly confusing because we want the 1st, 3rd, 5th, and so on elements of the array, but these correspond to elements with indexes 0, 2, 4, etc. As long as you keep that in mind, there are many different ways to solve this problem correctly.

Our solution takes the most basic approach; rather than using any of a number of different Array methods, we use a simple for loop, incrementing our index by 2 with each iteration. For each iteration, we add the element value to our result Array, `oddElements`.

### Further Exploration
Write a companion function that returns the 2nd, 4th, 6th, and so on elements of an array.

Try to solve this exercise in a different way.