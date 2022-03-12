# Short Long Short

*Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.*

examples:

```js
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
```

**Answer**
```js
function shortLongShort(str1, str2) {
  let strArr = [];
  strArr.push(str1);
  strArr.push(str2);
  strArr.sort((a, b) => a.length - b.length);
  return (strArr[0] + strArr[1] + strArr[0]);
}
```

**LS Answer**
```js
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}
```
