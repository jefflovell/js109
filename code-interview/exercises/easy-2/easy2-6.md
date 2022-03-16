# The End Is Near But Not Here
*Write a function that returns the next to last word in the String passed to it as an argument.*

*Words are any sequence of non-blank characters.*

*You may assume that the input String will always contain at least two words.*

Examples:

```js
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
```

## Answer

```js
function penultimate(str) {
  let words = str.split(' ');
  return words[words.length - 2];
}
```

## LS Answer

```js
function penultimate(words) {
  let wordsArray = words.split(" ");
  return wordsArray[wordsArray.length - 2];
};
```
### Discussion
In this problem we first break our words up and put them into an array. Anything that isn't whitespace is considered a word, so we can just use split() to divvy up the words. Then, we grab the second to last object in our words array by using wordsArray.length - 2 and return it to the caller.

### Further Exploration
Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: strings that contain just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.