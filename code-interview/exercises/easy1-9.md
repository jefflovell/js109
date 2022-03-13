# Leap Year Part 2

*This is a continuation of the previous exercise.*

*The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.*

*Using this information, update the function from the previous exercise to determine leap years both before and after 1752.*

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
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
```

## Answer
```js
function isLeapYear(year) {

  if (year > 1752) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else {
      return year % 4 === 0;
    }
  } else {
    return year % 4 === 0;
  }
}
```

## LS Answer
```js
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```
### Discussion
The change to the original isLeapYear function is small: just an additional if clause at the beginning of the function.

### Further Exploration
Find a web page that talks about leap years or the different calendar systems, and talk about the interesting information you learned. For instance, how was the change from the Julian calendar to the Gregorian calendar handled in your ancestral lands? Do they even use these calendar systems? If you live someplace that doesn't use the Gregorian calendar, tell us about your calendar system.