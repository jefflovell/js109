# Bannerizer

*Write a function that will take a short line of text, and write it to the console log within a box.*

Examples:

```js
logInBox('To boldly go where no one has gone before.');
```

will log on the console:

```
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
```
```js
logInBox('');
+--+
|  |
|  |
|  |
+--+
```
*You may assume that the output will always fit in your browser window.*

## Answer

```js

function logInBox(message) {
  // components
  const DASH = '-';
  const SPACE = ' ';
  const CORNER_LEFT = '+-';
  const CORNER_RIGHT = '-+';
  const INNER_LEFT = '| ';
  const INNER_RIGHT = ' |';

  // draw the box
  let outerBorder =  CORNER_LEFT + DASH.repeat(message.length) + CORNER_RIGHT;
  let innerBorder = INNER_LEFT + SPACE.repeat(message.length) + INNER_RIGHT;
  let formattedMessage = INNER_LEFT + message + INNER_RIGHT;

  // render the message
  console.log(outerBorder);
  console.log(innerBorder);
  console.log(formattedMessage);
  console.log(innerBorder);
  console.log(outerBorder);
}

```

## LS Answer
```js
function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
```

### Discussion
This is a fairly straight forward solution To simplify matters, we start out by setting `horizontalRule` and `emptyLine` to appropriate values for the top and bottom 2 lines of the box. The expression `"-".repeat(message.length + 2)` simply creates a string of `message.size + 2` hyphens; combined with the `+` at the beginning and end of the string, this is just wide enough to draw the horizontal lines while leaving room for one blank on either side of the message.

### Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.