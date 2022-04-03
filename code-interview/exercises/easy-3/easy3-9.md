# Clean up the words

*Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).*

Example:

```js
cleanUp("---what's my +*& line?");    // " what s my line "
```

- loop through all the characters
  - if the current character is not alpha...
    - if the previous character was alpha, replace it with a space
    - if the previous character was not alpha, delete the character

- note: we'll want to write to a new data structure so we don't mutate while looping

```js
function cleanUp(string) {

  const ALPHA = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z'];

  let previousChar = '';
  let result = ''

  if (ALPHA.includes(string[0])) {
    result += string[0];
  } else {
    result += ' ';
  }

  previousChar = string[0];

  for (i = 1; i < string.length; i++) {
    if (ALPHA.includes(string[i])) {
      result += string[i];
    } else if (ALPHA.includes(previousChar)) {
      result += ' ';
    }
      previousChar = string[i];
  }
  return result;
}
```

## LS Answer

```js
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}
```

A shorter solution:

```js
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
```

### Discussion
The solution makes use of a for loop to build a cleanText variable. At every iteration, the objective is to check if the current character is a letter (either uppercase or lowercase). If the character is not a letter, the program appends a space (`" "`); if the character is a letter, the program appends that letter.

The tricky part is when there are consecutive non-letter characters. The specification shows that there are no consecutive space characters, even if there are consecutive non-letter characters. To handle this, the solution uses a condition to check if the last character in the cleanText variable is a space. If the character is a space, it means that there is already a space at the previous index position, so appending another space would result in having consecutive space characters.

### Shorter solution explanation:

Ah, the expressiveness of regular expressions. They can really help with messy text manipulation. They aren't always the wisest choice for understandable code, but they can save a lot of effort in some cases. This is one such case where the regular expression may be the best choice.

This method is quite simple: using the `String.prototype.replace()` call, it simply replaces all non-alphabetic characters in text with a space, then by chaining another `replace()` method call we delete all of the duplicate spaces.

If you are unfamiliar with regular expressions, the expression `/[^a-z]/gi` is a regular expression that matches any character that is not an uppercase or lowercase letter. The `/i` part of this expression is what makes this expression case insensitive and `/g` part changes all the characters not just first one. `replace()` replaces all characters in text that match the regular expression in the 1st argument with the value in the 2nd argument.