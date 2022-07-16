# How Old Is Teddy?

*Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).*

Example Output:
```js
Teddy is 69 years old!
```

## Answer

```js
let getRandomAge = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); s
}

let age = getRandomAge(20, 120);
console.log(`Teddy is ${age} years old!`);
```

## LS Answer