# ddaaiillyy ddoouubbllee
*Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.*

Examples:

```js
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
```
## Answer

```js
function crunch(str) {
  let chars = str.split('');
  let deduped = [];
  chars.forEach(char => {
    if (!(deduped[deduped.length - 1] === char)) {
      deduped.push(char);
    }
  })
  return deduped.join('');
}
```

## LS Answer

```js
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}
```

### Discussion
Our solution builds a `crunchText` variable by iterating over each character in the text argument. While iterating over the characters in text, the key is to only append the character at the current index if it is not equal to the next character. If it is equal, then do nothing.

### Further Exploration
You may have noticed that the solution continues iterating until index points to the last character in the string, which means that `text[index + 1]` is beyond the end of the string during the last iteration. Why does it do this? What happens if we stop iterating when index is equal to `text.length - 1`?

It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions?