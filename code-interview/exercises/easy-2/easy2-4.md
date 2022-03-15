# Squaring an Argument
*Using the `multiply()` function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).*

Example:

```js
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
```

## Answer
```js
const square = n => multiply(n,n);
```

## LS Answer

```js
function square(number) {
  return multiply(number, number);
}
```
### Discussion
Our implementation relies on the previous exercise's multiply() function. The return value of multiply() is the result of multiplying the two arguments we pass to it, so we can simply pass in the same number twice, which will return the squared value. Our square() function is implicitly returning the return value from multiply(number, number).

### Further Exploration
What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?
