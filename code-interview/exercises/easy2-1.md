# Welcome Stranger
*Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.*

Example:

```js
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
```

## Answer

```js
function greetings(nameArr, jobObj) {
  let fullName = '';
  let space = ' ';
  for (let idx = 0; idx < nameArr.length; idx += 1) {
    if (idx < nameArr.length - 1) {
      fullName += (nameArr[idx] + space);
    } else {
      fullName += nameArr[idx];
    }
  }
  console.log(`Hello, ${fullName}! It's nice to have a ${jobObj.title} ${jobObj.occupation} around.`);
}
```

## LS Answer

```js
Solution
Copy Code
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
```

### Discussion
We have two variables here, an Array and an Object. We can use `Array.prototype.join()` on the Array, and supply it with a ' ' to change the Array into a full name with appropriate spacing. For the Object, we simply access the items by their keys.

Finally we use string interpolation with template strings to combine everything into a single string and allow the function to return it automatically.