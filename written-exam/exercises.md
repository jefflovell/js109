## Scope Example 1: Variable Scope

What does this code do and why?

```js
let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);
```

### Answer:

Line 8 will **return** the number `2`.

Line 9 will **print** the number `2` to the console.

Line 10 will throw a `referenceError: a is not defined`.

The concept being demonstrated here is **variable scope**: in particular that inner (child) scopes **do have access** to outer (parent) scope variables but that outer (parent) scopes **do not have access** to inner (child) scope variables..  `b` is a global variable, and `a` is a parameter (local variable) of the function `test()`. So when `a` is reassigned the value of `b` on line 4, the function `test()` first looks for a local variable, then when it finds none, expands to the outer, global scope.  Since `b` is in the global scope, it can be used by both the function `test()` and the method `console.log()`.  However, when we attempt to access `a` on line 10 from a different function scope (`console.log()`), we are not able to see into the scope of the function `test()`, therefore a `referenceError` is thrown.

## Scope Example 2: Variable Scope & First Class Functions

What does this code do and why?

```js
let name = "John";

const greet = () => `Hi ${name}`;

let greeting = greet();

console.log(greeting);
```
### Answer:

Line 7 logs the value `Hi John`.

The concepts being demonstrated here are **variable scope**, **first class functions**, and **string interpolation** via a *template literal*.

We start by declaring a variable `name` and initializing it to the value `"John"`.  Next, the `const` greet is assigned an **arrow function expression** which takes no arguments and returns the string `"Hi ${name}"`.  This works because our arrow function body contains a **single expression**, which causes the *evaluation of that expression to become the **return value** of the function without requiring an **explicit return statement***. In that return statement `${name}` is a **template literal** which allows us to **interpolate a string value from a variable**.  We can access name because of **variable scoping rules**, in particular that inner (child) scopes have access to outer (parent) scope variables.  On line five, the invocation of `greet()` is assigned to the variable `greeting` which is possible because JavaScript functions are **first class citizens** which means they can be treated like any other value, including **assignment to variables**.  Therefore, when `greeting` is passed to `console.log()` on line 7, its value is an **invocation** of the arrow function, so the console prints the return value of the arrow function.
*/


## Scope Example 3: Variable Shadowing & Call-By-Value

What does this code do and why?

```js
let dog = 'Bark';

function dogCall(dog) {
  dog = dog + dog;
}

dogCall(dog);
console.log(dog);
```

### Answer:

line 7 returns `undefined`.

line 8 logs `'Bark'`.

There are two primary concepts demonstrated here:

The first concept demonstrated is **Call-By-Value** or **Variables-as-Values**: All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are **atomic** or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.

The second concept demonstrated is **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

On line 1, `dog` is a global variable and assigned the value `'Bark'`.  When it is passed into the function `dogCall()` via the **parameter** `dog`, because strings are **primitive**, it is passed in by value and a 'copy' of the value is assigned to the function's local variable `dog` which is wholly independent of the value held by the global `dog`.  The function `dogCall()` doesn't actually cause any side-effects because of **variable shadowing**.  Since the parameter `dog` has the same name as the global variable but its value is primitive, the function can never access the value of the global variable `dog`.  The concatenation performed is simply updating the parameter's value.  When the function exits, its local variable and the concatenation reassignment that it performed are unloaded from memory. So the function simply exits and returns `undefined`.  Thus when `dog` is logged, it logs the global variable's value of `"Bark"`. The value of global `dog` was never updated by `dogCall()` because of the shadowing.

## Scope Example 4: Variable Shadowing & TypeErrors

```js
const greeting = "Hello!";
function change(greeting) {
  greeting = "Hi!";
  return greeting;
}

console.log(change());
console.log(greeting);
```

### Answer:
> console.log(change());
Hi!
undefined
> console.log(greeting);
Hello!
undefined

The concepts being shown here are `variable shadowing` and `function arguments`.

There are a couple things to note:  First, at a glance we should expect this code to throw an error because our `greeting` identifier is being declared and initialized with `const` and the function name clearly indicates its purpose is to 'change the greeting'.  However, on line 10 when we log the invocation of `change()`, we do not pass an argument.  The function will first look for a local variable, which it finds in the `undeclared` variable 'greeting', with a value of `'Hi!'`.  Since the name of that variable is shadowing the global variable `greeting` it prints that value.  `Consts` cant be re-assigned, it's illegal and throws a `TypeError`.  The fact that we're not getting a `TypeError` proves the shadowing.  On the next line, we're simply printing the value of the `const` greeting which hasn't changed.

## References vs Values Example 1: Pass-By-Reference

What does this code do and why?

```js
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
```

### Answer:
line 79 prints `'hi'`.

line 80 prints `'hello'`.

The concept being demonstrated here is **Pass-by-Reference**: When objects are passed to a function (including arrays), what the function receives as an argument is a **reference** to the object's location in memory, which in turn points to the object's property values in memory.  The orginal value and the passed value are therefore references to the **same object** and therefore the object's values can be mutated by mutating the argument.

When the function `bar` is declared on line 72, it takes two parameters, both of which are re-assigned to new values inside the body of the function.
We invoke the function `bar` on line 77 passing in the value of `foo`, an object, to `argument1`.  When `foo.a` is reassigned on line 73, because `foo` is an object, that value has been **passed by reference** meaning that the memory location of `foo.a` is what is passed, not the value `'hello'` itself.

However, the value of `qux`, which is passed into `argument2` is a string which is a `primitive` and is therefore **passed by value** i.e. a 'copy' of `'hello'` is passed to the function `bar` which is completely independent from the value held by `qux`.

This is why when logging `foo.a` the we find that `foo` has been mutated, with `foo.a`'s value being reassigned to `'hi`' but when logging `qux` the value is unchanged.

## References vs Values Example 2: Const & Object Mutability

What does this code do and why?

```js
const campus = { state: 'Boston', address: 'North Ave NW' };
campus.state = 'Georgia';
console.log(campus);

const location = Object.freeze({ state: 'CA', country: 'US' });
location.state = 'FL';
console.log(location);
```

### Answer:
Line 3 prints an object `{ state: 'Georgia', address: 'North Ave NW' }`.

Line 7 throws a `TypeError`.

The principle demonstrated here is the mutability of objects (variables as pointers):  even when declared with `const`, objects can be mutated and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties cannot be changed. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties can change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but not possible to change the object that `const` points to.

Because the values being assigned to `campus` and `location` are both objects, they can still be read and written even though we are using `const` since what's being stored are references to the objects in memory, not the values themselves.  This is why on line 6, `campus.state` can be reassigned from `'Boston'` to `'Georgia'`. However when we pass the object on line 1 to the `Object` **static method** `freeze()`, we prevent JavaScript from being able to reassign any properties in that object even though it is a pointer, thus throwing a ```TypeError``.


## References vs Values Example 3: Pass-By-Reference, Shallow Copies, Implicit Return, Side Effects

What does the following code do and why?  (complex++ problem)

```js
const hottestTemps = [
  {continent : "Africa", country: "Tunisia", temp: 55},
  {continent : "Asia", country: "Iran", temp : 54},
  {continent : "North America", country: "USA", temp : 56.7},
  {continent : "South America", country: "Argentina", temp: 48.9},
  {continent : "Europe", country: "Greece", temp : 49},
  {continent : "Oceania", country: "Australia", temp : 50.7}
];

function toFahrenheit(tempsArr) {
  let newTempsArr = tempsArr.slice();
  newTempsArr.forEach(obj => {
    obj.temp = (obj.temp * 9 / 5) + 32;
  });
}

const hottestTempsInF = toFahrenheit(hottestTemps);
console.log(hottestTempsInF);
console.log(hottestTemps);
```

### Answer:
The program returns undefined followed by printing the array of objects `hottestTemps`:

```js
undefined

[
  { continent: 'Africa', country: 'Tunisia', temp: 131 },
  { continent: 'Asia', country: 'Iran', temp: 129.2 },
  { continent: 'North America', country: 'USA', temp: 134.06 },
  { continent: 'South America', country: 'Argentina', temp: 120.02 },
  { continent: 'Europe', country: 'Greece', temp: 120.2 },
  { continent: 'Oceania', country: 'Australia', temp: 123.26 }
]
```

The first concept being demonstrated here is **implicit return values**: Functions always return *something*. If a function does not return a value explicitly, it will always return `undefined`.  Other operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects** and have no impact on the return value.

The second concept being demonstrated here is **variables as pointers**: All objects (including arrays) are assigned to variables ***not* as values** at the variable's memory address but as **references** (pointers) to other memory addresses which contain the values of the object.

On line 130 when `hottestTempsInF` is assigned the expression `toFahrenheit(hottestTemps)`, it would be natural to expect the value of `hottestTempsInF` to be a copy of the array passed to `toFahrenheit()` with the temps updated to Fahrenheit.  However, the function `toFahrenheit()` as declared on line 123 does not contain a **return** statement, so the return value of function expression assigned to the `const` `hottestTempsInF` is actually `undefined`.  Additionally, our input array is an array of **objects**. When we invoke `slice()` on line 123 of the function `toFarenheit()` to make a copy of the input array, we do create a new array, but that array is a **shallow copy**.  The objects referenced *inside the input array's elements are still shared with the original array*.  Therefore on line 130/131 when we would expect to print two different arrays because we assigned the expression `toFarhrenheit(hottestTemps)` to a new variable, what we find instead is that we have printed `undefined` and mutated the input array.

## Iterators Example 1: array.prototype.map() & array.prototype.filter()

Describe the difference between the array `map` and the `filter` method. When would you use each?

### Answer:

Both `map()` and `filter()` are called directly on array and execute a callbackFn for each element in the calling array.  Both methods return a **new** array (neither method mutates the caller).  Essentially, `filter()` is an array selection method and `map()` is an array transformation method.

The callbackFn of `map()` performas a transformation on each element passed to it and passes it back to `map()`.  Once every element has been iterated over, `map()` returns the **new array** to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.  This also applies to sparse arrays.

The callbackFn of `filter()` evaluates each element's value against a test condition to determine which elements to select.  For each element, if the test evaluates to true, the callbackFn returns the current value to `filter()` to be included as part of the **new array** returned to the caller. If no elements of the calling array pass the test, `filter` returns an empty array.

## Iterators Example 2: array.prototype.map()

What does the following code do and why?

```js
[1, 2, 3].map(num => {
  num * num;
});
```

### Answer:
Line 312 returns `[undefined, undefined, undefined]`

The concepts being demonstrated here are arrow syntax and implicit return values.

The callbackFn of `map()` performs a transformation on each element passed to it and passes it back to `map()`.  Once every element has been iterated over, `map()` returns the **new array** to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.

Because the `callbackFn` for `map()` is using arrow syntax with `{ }` you must include an **explicit return statement**.  Since the return statement was not included, `map()` instead returns the **implicit return value** of `undefined`.

## Iterators Example 3: array.prototype.map()

What does this log and why?

```js
let words = [["hunter", "spear"], ["gatherer", "sack"]];

function pluralize(array) {
  return array.map(words => {
    words[0] += "s";
    words[1] += "s";
    return words;
  });
}

console.log(pluralize(words));
console.log(words);
```

### Answer: TBD

> console.log(pluralize(words));
[ [ 'hunters', 'spears' ], [ 'gatherers', 'sacks' ] ]
undefined
> console.log(words);
[ [ 'hunters', 'spears' ], [ 'gatherers', 'sacks' ] ]

The concepts being shown here is `mutation` via `pass-by-reference`, and `shallow copy`.

This problem shows an input of a 2-D array to an array mapping function where each element of the input has an `'s'` concatenated to it before returning the array.  `array.prototype.map()` is an array iteration and transformation method which is called directly on an array and executes a `callbackFn` for each element in the calling array. The `callbackFn` of `map()` performs a transformation on each element passed to it and passes it back to `map()`. Once every element has been iterated over, `map()` returns a new array to the caller, populated with the transformed values for each element of the calling array. **The return array is always equal in length to the calling array.** This also applies to sparse arrays. This method does not mutate the caller. So we would expect that when logged, `words` would not be mutated.  However, our input array is 2-D, so the elements which `map()` is iterating over are, themselves arrays.  Those arrays are added to the new array that `map()` outputs, but are still references to the inner-arrays that the input contains, hence the mutation. 

## Iterators Example 4: array.prototype.filter()

```js
[1, 2, 3].filter(num => 'hi');
```

### Answer:
Line 329 returns a new array `[1, 2, 3]`

The concept being demonstrated here is **implicit type coercion**

`array.prototype.filter()` is an array method for selection which is called directly on array and executes a callbackFn for each element in the calling array. The callbackFn of `filter()` evaluates a test condition (the return statement) to determine selection.  For each element, if the test evaluates to true (callbackFn returns `true`), `filter()` adds the current element to a **new array** to be returned to the caller. If no elements of the calling array pass the test, `filter` returns an empty array. **This method does not mutate the caller.**

In order to assess which values to select, the return statement of the callbackFn (string `'hi'`) is coerced to a `Boolean`. All non-empty strings are `truthy` (coerce to `true`) so the return value of the callbackFn is `true`.  Since the test is **always** true regardless of argument passed to callbackFn, on each invocation of the callbackFn the element is added to the returned array.

## Iterators Example 5: array.prototype.forEach()

```js
let numbers = [3, 9, 8, 2, 4, 6, 7, 5, 1];

function onlyOdds(nums) {
  nums.forEach( (num, idx) => {
    if ( num % 2 !== 0) {
      nums.splice(idx, 1);
    }
  })
  return nums;
}

onlyOdds(numbers);
// return => [ 9, 8, 2, 4, 6, 5 ]
```

### Answer:

This code returns [ 9, 8, 2, 4, 6, 5 ]

The concepts being demonstrated here are *iteration* and *concurrent mutation*

`array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn, passing each element in the calling array to the callbackFn as an argument. `forEach()` is functionally equivalent to a `for` or `while` loop but requires no start or end conditions.  `forEach()` can only cause side effects as it cannot pass an explicit return value and will always return `undefined`.  **This method does not mutate the caller, however it ***is possible*** for the callbackFn to mutate the caller as shown.**

When iterating through an array or object, destructive methods like `splice()` can produce unexpected results when they mutate the caller while iterating.  In this example, we are passing the optional argument for the elements index on each call to callbackFn and using that index to delete an element from the calling array.  Because we are changing the length of the array while iterating, as `forEach()` increments the loop, the values are being shifted across different index positions, causing unexepected selections to occur.



## Objects Example 1: Object Dot Notation vs Bracket Notation

What do these two snippets log and why?

```js
// Snippet 1
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

// Snippet 2
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?
```

## Answer:

snippet 1 prints:  { prefix: ‘Pacific’ }
snippet 2 prints:  { Indian: ‘Pacific’ }

The concept being demonstrated here is **assignment** via **object dot notation** vs **object bracket notation**

When an object property is accessed via dot notation, the property being accessed or assigned is a property with a key named the literal value written after the dot.  In this case a property of the object `ocean` with a property key name of `prefix`. What is assigned to that key name on line 4 is the value `'Pacific'` resulting in a key-value pair of `prefix = "Pacific"`.

In snippet 2, we are instead using bracket notation, which less us pass the value of a variable into the object thus changing the assignment of the key name from `prefix` to the value assigned to prefix which is `'Indian'`.  So on line 4 when we assign `ocean[prefix] = 'Pacific'` we end up with a key value pair of `Indian: 'Pacific'`

## Objects Example 2: Bracket Notation & Variables

What does this code return and why?

```js
let person = {              // line 1
  name: 'Jane',
  age: 24                   // line 3
}                           // line 4

function changeName(name) { // line 6
  person[name] = name;
  console.log(person);      // line 8
  return person;
}                           // line 10

changeName('Jessie');       // line 12
```

Line 12 returns: { name: 'Jane', age: 24, Jessie: 'Jessie' }

The concept being demonstrated here is object bracket notation syntax, specifically handling key names assigned to variables.

Object `properties` are key-value pairs where the `keys` are strings and the `values` can be any type of data.  There are two ways to access or assign values to object properties:  `Dot notation` and `bracket notation`.

On line 7 when we re-assign `person[name]` to the argument passed to the function `changeName()`'s parameter `name` what we're actually doing is declaring a new property of the object `person` with a key-name of the **VALUE** assigned to the parameter `name`.  If the line was written with name in quotes: `'name'`, it would work as expected, accessing the `name` property of the `person` object. But because the quotes have been omitted we're instead accessing the value of the name parameter of `changeName()`. Literally, that reassignment expression could rewritten as:  `person.Jessie = 'Jessie'` because the argument passed to `changeName()` on line twelve is being used for **both** the key name and the key value.

## Assignment Example 1: Reassignment

```js

let pets = ['dragon', 'turtle'];

let newPets = pets;

pets = [];

console.log(newPets);
```

### Answer:

the code logs [ 'dragon', 'turtle' ] to the console

the concepts being shown here **variable reassignment** and **printing**.
This is possible because both `pets` and `newPets` are declared with the keyword `let` so their values are re-assignable.

- on 1 one we declare a variable `pets` with the keyword `let` and assign it an array.
- on line 3, we assign the current value of `pets` to a new variable `newPets` also declared with `let`.
- on line 5, we reassign pets to an empty array.  This does not destroy the orginal array assigned to `pets`, it simply changes the array that `pets` references.
- on line 7, we invoke the `console.log()` method which prints the value of `newPets` to the console.

## Loose/Strict Equality Example 1: Loose Equality

What does the following code log?

```js
let something = []; // line 1
let somethingElse = ''; // line 2

if (something === somethingElse) { // line 4
  console.log("TV");               // line 5
} else if (something == somethingElse) { // line 6
  console.log("Radio");                   // line 7
} else { // line 8
  console.log("Other"); // line 9
} // line 10
```
### Answer:

Line 10 prints: 'Radio'

The concept being shown is `loose equality` vs `strict equality`.  Line 10 prints 'Radio' because of `loose equality`.

The snippet contains two variables, one an empty `array` and the other an empty `string`. These two values are being compared in a series of conditionals using an `if...else if...else` statement. In the first condition, if the two values are `strictly equal` the code should print 'TV'.  Strict equality requires both the `value` and `data type` to be the same.  And because 1 value is an `array`, which means it is stored by reference,  that actually goes a step further and would require that both variables reference the **same** array to be strictly equal.  Therefore, these values are not equal by both `value` and `type` and the if condition is skipped.

The second condition says if the values are `loosely equal`, which means equal in `value` but not necessarily in `data type`: print 'Radio'.  Since the types are different (`array` and `string`) Javascript attempts to `implicitly coerce` one or both of the values before comparison. An empty string and an empty array coerce to the same value.  The rules of that coercion are complicated, unintuitive, and depend on the context of the coercion and the data types involved.  Suffice it to say that in this case, they are considered 'equal values' and the code prints 'Radio'
