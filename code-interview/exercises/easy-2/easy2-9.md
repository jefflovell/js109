# Convert a String to a Number!
*The `parseInt()` method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. `parseInt()` and the `Number()` method behave similarly. In this exercise, you will create a function that does the same thing.*

*Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.*

*For now, do not worry about leading `+` or `-` signs, nor should you worry about invalid characters; assume all characters will be numeric.*

*You may not use any of the standard conversion methods available in JavaScript, such as `String()` and `Number()`. Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.*

#### Examples
```js
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
```

## Answer
input: string; output: number

I think an object would work well here of the format {string: number} since we don't have worry about anything other than base-10, we only need 0-9

We can't use any of the array iterators because we need a number output without using stdlib functions so it wouldn't save any steps to map to a new array

We'll have to deal with the fact that we need to hold place-values.  Luckily 10 ** 0 = 1, so we can use a decrementation during each iteration of the loop.

- for each character in the string
  - look up the character's corresponding number
  - multiply the number by 10^n where n starts with the length of the input string - 1
  - add the calculated number to the result variable
  - decrement n
- return the result

```js
function stringToInteger(numberString) {
  const numMap = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
  };
  let places = numberString.length - 1;
  let result = 0;

  for (let char = 0; char < numberString.length; char++) {
    result += numMap[numberString[char]] * (10 ** places);
    places--;
  }
  return result;
}
```

## LS Answer

```js
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
```

### Discussion
As usual, this isn't the shortest or even the easiest solution to this problem, but it's straightforward. The big takeaway from this solution is our use of the `DIGITS` object to convert string digits to their numeric values. This technique of using objects to perform conversions is a common idiom that you can use in a wide variety of situations, often resulting in code that is easier to read, understand, and maintain.

Keep in mind that the keys of an object are always strings. Thus, on `line 3`, the `0` to the left of the colon (`:`) is a string even thought it doesn't look like a string. The `0` to the right is a number. That's a convenient relationship in this problem since we'll use digits stored as strings to look up the corresponding numeric values.

The actual computation of the numeric value of string is mechanical. We take each digit and add it to 10 times the previous value, which yields the desired result in almost no time. For example, if we have 4, 3, and 1, we compute the result as:

```js
10 * 0 + 4 -> 4
10 * 4 + 3 -> 43
10 * 43 + 1 -> 431
```
### Further Exploration
Write a `hexadecimalToInteger()` function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

#### Example:
```js
hexadecimalToInteger('4D9f') === 19871;
```