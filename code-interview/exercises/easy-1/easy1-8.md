# Leap Years (Part 1)

*In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.*

*Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.*

Examples:

```js
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
```

**Answer**

```js

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
  } else {
    return true;
  }
}

```

**LS Answer**

```js
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```
### A shorter solution

```js
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}
```
### Discussion
The first solution takes this one step at a time by testing for the least common cases first: years divisible by 400, and years divisible by 100. If the year is anything else, then it is a leap year if it is divisible by 4.

The second solution is more idiomatic, but also a little harder to read. It is, in effect, identical to the first solution, with the tests turned around a little bit.

### Further Exploration
The order in which you perform tests for a leap year calculation is important. For what years will isLeapYear fail if you rewrite it as shown below?

```js
function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}
```
Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution? That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by 400. Is this solution simpler or more complex than the original solution?