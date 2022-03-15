# Greeting a user
*Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.*

Examples

```
> What is your name?
< Bob
> Hello Bob.

> What is your name?
< Bob!
> HELLO BOB. WHY ARE WE SCREAMING?
```

## Answer

```js
const readlineSync = require('readline-sync');

let userName = readlineSync.question('What is your name?');
if (userName.charAt(userName.length - 1) === '!') {
  console.log(`HELLO ${userName} WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}
```

## LS Answer
```js
let readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?\n");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE YOU SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
```
### Discussion
We begin by requiring `readline-sync` and then asking for and obtaining the user's name. Then, we test the last character of the user's name `(name[name.length - 1])` to see if it is an exclamation mark.

If the last character of the name is an exclamation mark, we remove that exclamation mark from the name by using `slice()` and then log the SHOUTING version of the greeting. Otherwise, we just log a normal greeting.