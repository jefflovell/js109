# 109 Written Exam Study Guide

## Concept Overview
01. Declarations, Initialization, Assignment, and Re-Assignment
02. Variable Scope (and shadowing)
03. Primitive Values, Objects, & Type Coercion
04. Object Properties
05. Mutability vs. Immutability vs. Const
06. Loose & Strict Equality
07. Arguments & Return Values
08. Working with Strings
09. Working with Arrays
10. Working with Objects
11. Arrays as Objects
12. Pass-by-Reference vs. Pass-by-Value
13. Variables as Pointers (Call-by-Reference)
14. Truthiness vs. Boolean Values
15. Function Definitions vs. Function Invocations
16. Function Declarations, Function Expressions, and Arrow Functions
17. Implicit Return Values
18. First Class Functions
19. Function Side-Effects
20. Legal vs. Idiomatic Naming Conventions
21. Declarative vs. Imperative Descriptioning

# Canned Concept Definitions



## 01. Declarations, Initialization, Assignment, and Re-Assignment

### What is a Variable?
A `variable` or `identifier` is a named area of a program's memory space where the program can store data and can typically be changed.
- variables declared with `let`
- constants declared with `const`
- function names
- function parameters
- class names

### Variable Declaration & Initialization
A variable `declaration` is a statement which asks the JS engine to reserve space for a variable with a particular name.  Often, variables are both `declared` and `initialized` to a value at the same time. If a variable is not explicitly initialized to a value, it will be implicitly initialized to `undefined`. An instruction to simultaneously `declare` and `initialize` a variable is a `statement expression`.

### Assignment Operator
The `assignment operator` is the `=` symbol.  It assigns the right operand as a value to the variable named by the left operand.

### Variable Assignment
All `assignments` have a `return value`. The return value of a variable assignment is the value assigned to the variable (right operand).

### Constants
Constants are declared with the keyword `const` and always require an initial value because their value cannot be changed (`re-assignment` is prohibited).  Attempting to re-assign a constant will throw a `TypeError: Assignment to constant variable`.



## 02. Variable Scope

### Variable Scope
The concept demonstrated here is **variable scope**:, in particular that inner (`child`) scopes **do have access** to outer (parent) scope variables but that outer (`parent`) scopes **do not have** access to inner (child) scope variables. Scope is determined by the location in a program at which a given variable was declared.

### Variable Shadowing
The concept demonstrated here **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

### Undeclared Variables
Undeclared variables (not declared with `let` or `const`) are `hoisted` to the global scope because they technically do not exist in memory until the assignment is executed. Therefore, when the JS engine encounters the assignment and executes it, it is forced to reserve memory in the global scope even if the variable was assigned in a child scope because the child scope is built at the beginning of execution.



## 03. Primitive Values, Objects, & Type Coercion

### What are the Primitive Types in JS?
A `primitive` is an atomic or undivisible value in JS.  These primitive values are said to be `immutable` (unchangeable).  There are seven primitive data `types` as of `ES2015` but we're primarily concerned with the five original types:

- `strings` are an order-dependent list of characters surrounded by single (`' '`) quotes or double (`" "`) quotes.
- `numbers` are any real number including negative, whole, floating point (fractions as decimals), and fixed point (decimal) numbers. Also includes `NaN` (not a number), `0`, `-0`, `infinity`, and `-infinity`.
- `booleans` are representation of an on / off (i.e. true / false) state: JS bools are `true` and `false`.
- `undefined` is the `implicit` absence of value, though it is possible to `explicitly` set a value of `undefined`.
- `null` is the `explicit` absence of value.  It is not possible to implicitly set a `null` value.

***note:***
- *`bigInt` is a new primitive numerical type added as part of the `ES2015` specification which allows an even bigger range of numbers to be represented.*
- *`symbol` is a new primitive type which addresses low level language concerns and was introduced as part of the `ES2015` specification.*

### What is an object?
As a data structure, an `object` is a complex, typically `mutable`, dictionary-like data structure of unordered `properties` which are composed of `keys` and `values` (a.k.a. `key-value pairs`).  Object literals are encapsulated by curly braces `{ }`. However, any data that is not of a primitive type in JS is of the `object` type.  This includes `arrays`, `objects`, and `functions`.

### What is a Literal?
A `literal` is a textual representation in code of a fixed value of any data type. The number `1` is a literal.  The array `['hello', 'world']` is a literal.

### NaN
`NaN` stands for 'Not a Number' and represents an 'illegal mathematical operation' such as dividing by 'hi' (dividing by `0` returns `infinity` in JS).  It's helpful to think of `NaN` as an `error number`.   Interestingly, `NaN`'s `type` is actually a number and also `NaN` is the only value in JS that is not equal to itself.  (It is unique by specification). You can check for `NaN`s using `Number.isNaN()` or `Object.is()` as trying to use the `typeof` operator will return: `number`. D'oh!

### Typeof
`Typeof` is a keyword (`operator`) used to check the `data type` of a value.

### Implicit Coercion
`Implicit Coercion` describes situations where JS automatically changes the `data type` of a value from its original type to a new type.  This occurs when disparate types are used as operands of an arithmetic operation or when non-booliean evaluation occurs in a comparison (conditional operations).  The rules for `implicit coercion` are complex and unintuitive.  For instance, `'true' == true` returns `false` because in this specific case, the boolean `true` is first coerced to the number `1`, and when strings are compared to numbers, strings are coerced to numbers causing `'true'` to be coerced to `NaN`. Since `NaN` is unique by definition, it obviously can't be the same value as `1` and JS returns `false`. In other words...find an evaluation table or, better yet, avoid `implicit coercion` when possible.

### Explicit Coercion

`Explicit Coercion` describes situations where the `data type` of a value is **intentionally** cast to a different type in code.  This is a good way to guard against any unexpected behavior of `implicit coercion` and communicate the intent of your code.



## 04. Object Properties

### What is an Object Property?
`Objects` store an order-independent collection of `key-value pairs` known as `properties`: each property in the object has a name that we call the `key` and an associated `value`.  An object's keys are always `strings`, but the values can be any `data type`, even other objects (including arrays and functions).

### Object Notation
There are two ways to access object `properties` (key-value pairs) in an object, `dot notation` and `bracket notation`.

### Dot Notation
With `dot notation`, we place a dot after the variable that references the object `(.)` followed by a `key name` to specify the property like so: `myObject.foo`, the value of which we want to read, assign, re-assign, or invoke (in the case of a `method`) such as `myObject.foo = 'bar';`. This access method only works with `key names` and cannot be used if the property's key name is assigned to a variable.

### Bracket Notation
With `bracket notation`, we place square braces after the variable that references the object `[]` around the name of the property (`key name`) in quotes like so: `myObject['key']` to access a named property.  In the case of a variable containing a key such as `let key = 'name';` the quotes are omitted (`[key]`) and the value of the variable will be passed in as the property key name: `myObject[key]` will look for a property of `myObject` called `'name'`. Bracket notation is the only way to access object properties using key names assigned to variables.



## 05. Mutability vs. Immutability vs. Const

### Mutability
All objects are inherently `mutable`. `Mutation` occurs when an object is changed permanently such as when a property is added to an object or a `method` (or function) permanently alters the object which invoked the method. This is also known as `mutating the caller` or a `destructive operation`. Because `primitives` are `immutable`, therefore `mutation` only applies to objects (including arrays and other 'objects').

### Mutability with `const`
While it's true that `const` prevents changing its initial value, however this does not prevent `mutation`. Objects are assigned to variables by `reference`, meaning what is held by `const` is a reference to that specific object's `location in memory`, not the object itself.  Because of this, the contents of objects (including array values and properties) are still mutable even if the object is declared with `const`.



## 06. Loose & Strict Equality

### Strict Equality
The concept demonstrated here is **strict equality**: The **strict equality operator** checks whether its two operands are equal in **type *and* value**, returning a `Boolean` result.  It returns `true` when the operands have the same **type *and* value**, `false` otherwise. For an *object*, it will return true **ONLY** if both operands refer to the *same object*.

### Loose Equality
The concept demonstrated here is **loose equality**: The **loose equality operator** checks whether its two operands are equal by value regardless of type, returning a `Boolean` result. Unlike the strict equality operator, if the operands are *different data types*, it will attempt to **coerce** *one or both* operands before comparison. Because the JS engine does this automatically, it's called **implicit coercion**.



## 07. Arguments and Return Values

### What is an Argument?
An `argument` is a value passed into a function via a local variable called a `parameter` at the time of invocation.

### What is a Parameter?
A `parameter` is a named variable supplied as part of a `function definition` which is scoped locally to the function and can accept values (`arguments`) from outside the function at invocation.

### What is an Expression?
An `expression` is any code statement that can be `evaluated` to produce a value.  Because all functions return values, all function `invocations` are by definition `function expressions`.

### Implicit Return Values
An `implicit return value` is an 'automatic' return value. Functions always return *something* to the calling code (the **caller**).  If a function does not return a value explicitly (in code), it will always (`implicitly`) return `undefined` to when passing control back to the caller.

### Explicit Return Values (Return Expressions)
An `explicit return value` is specified as part of the `function definition` by using the `return` keyword `return expression` to specify a value that the function should return to the caller when it exits. When a `return expression` is encoutered, the expression is immediately evaluated and the value and program control is returned to the code that called the function (the `caller`) and the function terminates.  Any function instructions written **after** an executed return expression are skipped.

### Function Composition
Function invocations are valid as both `arguments` and `return values`.  When function invocations are passed to other functions as arguments, this is known as `function composition`.

### Predicates
A `predicate` is a function which always returns a `boolean` value.



## 08. Working with Strings (common methods)

### Strings are Immutable and Primitive
***All string methods return new strings because strings are **primitive** types and therefore **immutable** values.***

### String Search and String Selection Methods
- `string.prototype.includes()`: This method takes a substring as the argument and returns a **boolean** signifying whether that substring exists within the string that `includes` was called on. The search is case-sensitive.
  - `includes()` takes an optional, second argument which specifies the index at which to start the search.

- `string.prototype.charAt()`: This method takes an index value of the calling string as an argument and returns the character at that index.

- `string.prototype.charCodeAt()`: This method returns the Unicode code point or character code of the character at the index of the caller passed to it. If an index is not provided, `charCodeAt()` assumes the index is `0`.

### String Transformations String Copy Methods
- `string.prototype.concat()`: This method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the **type** `string`, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

- `string.prototype.slice()`: This method extracts a section of a string and returns a new string, without modifying the original string. The `slice` method takes two optional arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index **BEFORE** which to end the extraction. The character at the ending index is not part of the returned substring.
  - Calling the `slice` method **without any arguments will return a copy** of the original string.
  - If the second argument to `slice` is omitted, all the characters from the start index to the end of the string are returned in the substring.
  - If the first argument is `>=` to the calling strings `length`, an empty string `''` is returned.
  - If the first argument is a negative number e.g. `-2`, the slice begins extraction from `caller.length + startIndex` i.e. `5 + -2` would begin at `caller[3]`.
  - If the second argument is a negative number, the slice will end **before** `caller.length + endIndex`.
  - If the second argument represents a position **before** the starting index, `slice()` will return an empty string `''`.

- `string.prototype.substring()`: This method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index. `substring` does not mutate the caller and returns a new string.

- `string.prototype.trim()`: This method removes any amount of whitespace from both ends of the calling string including whitespace characters like `\t` and `\n` and returns the result as a new string.

- `string.prototype.trimStart()` and `string.prototype.trimEnd()`:  These methods remove whitespace from the beginning or end of the calling string, respectively.  Both return a new string.

- `string.prototype.toUpperCase()` and `string.prototype.toLowerCase()`: These methods both return a string identical to the caller but transformed to uppercase and lowercase respectively.

### Converting Strings to Arrays

- `string.prototype.split()`: This method separates the calling string into multiple strings and returns them in the form of an array. What character or pattern is used to separate the string into elements depends on the argument you provide to `split()`.
  - When called without any arguments, returns an array with the string as its only element.
  - When called with an empty string as the argument, `split()` returns an array of all the characters in the string (with some exceptions).
  - When called with any other string as the argument, `split()` will separate the string using the argument as the **delimiter** character.



## 09. Working with Arrays (common methods)

### What is an Array?
An `array` is a heterogeneous (mixed type), ordered list of values which are keyed by positive natural number called `indexes` starting with index `0`. `Arrays` are `iterable` meaning they can be looped through in a defined and predictable order.

### Array Destructuring
`Array destructuring` allows you to assign elements of an array to multiple variables by wrapping the variable names in brackets (`[]`).  Elements are assigned to the variables **in the order which they are received**, therefore, array destructuring assignment is often used with `Object.entries()` and `array.prototype.forEach()`.

### Destructive Array Methods
- `array.prototype.unshift()`: This method *adds* one or more elements to the **beginning** of an array and **returns the length of the new array** to the caller. **This method mutates the calling array.**

- `array.prototype.push()`: This method *adds* one or more elements to the **end** of an array and **returns the length of the new array** to the caller. **This method mutates the calling array.**

- `array.prototype.shift()`: This method *removes* the **first** element from an array and **returns the removed element** to the caller. **This method mutates the calling array.**

- `array.prototype.pop()`: This method *removes* the **last** element from an array and **returns the removed element** to the caller. **This method mutates the calling array.**

- `array.prototype.sort()`: This method sorts all non-`undefined` elements of an array **in place** (mutating the calling array) and **returns the sorted array** to the caller. The default sort behavior is **lexical ascending order**, built by first coercing the elements into strings, then comparing their `UTF-16 codepoint` values to determine order. The elements are returned to their original data types once the sort is completed. **This method mutates the calling array.**

  - `sort()` accepts an **optional** callbackFn argument to the parameter `compareFn` which takes two arguments (`val1` & `val2`) and sorts the calling array based on evaluating the values as `>`, `<`, or `===` each other.  The most common use case for `compareFn` is `numerical` sort and is frequently short handed as an arithmetic operation: `let compareFn = (a, b) => a - b; //ascending numerical sort`

- `array.prototype.reverse()`: This method reverses an array **in place**. The first element becomes the last, and the last element becomes the first, with inside elements translated around the center element as required. **This method mutates the calling array.**

- `array.prototype.splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place based on the arguments passed to it.  `splice()` accepts is invoked with 3+ parameters: the `start` index to begin the `splice`, the `deleteCount` specifying the number of items to remove beginning from `start` (this number can be `<= 0` to not delete items but if omitted entirely will delete the entire array from `start` to the end of the array), and any number of `elements` to add to the array.`splice()` returns **an array containing the items deleted to the caller**.  **This method mutates the calling array.**

### Non-Destructive Array Methods

- `array.prototype.concat()`: This method returns a new array that contains a copy of the original array combined with additional elements supplied with the arguments. Since `concat` creates a copy of the original array and then mutates the copy. **This method does not mutate the caller.**

- `array.prototype.slice()`: This method returns a **shallow copy** of all or a segment of an array selected from `startIndex` to the element preceding `endIndex` (not inclusive) where `startIndex` and `endIndex` represent the index of items in that array.  Negative `start` and `end` values are legal and are calculated as `array.length + start` (or `end`). If `end` is greater than `array.length` or omitted, the method slices through the end of the sequence. `slice()` returns a new array containing the extracted values. **This method does not mutate the caller.**

- `array.prototype.indexOf()`: This method returns the **first index** at which a value passed as an argument to the method can be found in the calling array.  If the value cannot be found or if the search starting index is greater than or equal to the arrays' length, `indexOf()` returns `-1`.  **This method does not mutate the caller.**

- `array.prototype.includes()`: This method is called directly on an array and searches the calling array for an element whose value is **strictly equal** ( === ) to the single argument passed to it.  It returns `true` when a matching element exists in the calling array and `false` when it does not. **This method does not mutate the caller.**

### Iterator Array Methods

- `array.prototype.forEach()`: is an array iteration method which is called directly on an array and executes a callbackFn for each element in the calling array, passing the current element to the callbackFn as an argument.  `forEach()` is most useful as a way to perform `side effects` as it **will not** make use of an explicit return expression and will **always** return `undefined`.  **This method does not mutate the caller, however it is possible for the callbackFn to do so, though best avoided.**

- `array.prototype.filter()` is an array iteration and selection method which is called directly on array and executes a callbackFn for each element in the calling array, passing the current element to the callbackFn as an argument. The callbackFn of `filter()` evaluates a test condition (the return expression) to determine whether to select the current element.  For each element, if the test evaluates to true (callbackFn returns `true`), `filter()` adds the current element to a **new array** to be returned to the caller. If no elements of the calling array pass the test, `filter` returns an empty array. **This method does not mutate the caller.**

- `array.prototype.map()` is an array iteration and transformation method which is called directly on an array and executes a callbackFn for each element in the calling array. The callbackFn of `map()` performs a transformation on each element passed to it and passes it back to `map()`.  Once every element has been iterated over, `map()` returns a **new array** to the caller, populated with the transformed values for each element of the calling array.  The return array is always equal in length to the calling array.  This also applies to sparse arrays. **This method does not mutate the caller.**

- `array.prototype.reduce()` is an array iteration and recursion method which is called directly on an array and executes a callbackFn for each element in the calling array, usually referred to as the *reducer*. The *reducer* (callbackFn) takes two arguments typically known as the *'accumulator'* or 'previousValue' and the *'currentValue'* which are elements passed from the array `.reduce()` was called on.  The *accumulator* **stores the value of all elements that have been passed to the callbackFn so far and therefore have been 'reduced'**.  The current element is the element currently being iterated over by `reduce()`. `reduce()` accepts a second, optional *'previous value'* argument to initialize the reducer callbackFn with.  If no initial value is specified, the reducer **uses the value at `index 0` of the calling array as the previous value** and the v**alue at `index 1` as the current value**.  If an initial value is specified, `index 0` of the calling array is used as the current value on the first iteration.  Once all elements of the calling array have been iterated over, `reduce()` **returns a single value** based on the operations performed and the data type(s) of the calling array's elements. If the calling array contains **no elements** *and* an **initial value is not provided**, `reduce()` will throw a `TypeError`. **This method does not mutate the caller.**

- `array.prototype.some()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `some()`'s callback continues to test elements until finding a value that passes the test in which case the method **immediately** returns `true`. If no elements pass the test, `some()` returns `false`. **This method does not mutate the caller.**

- `array.prototype.every()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. If **any** element passed to the callbackFn's test condition evaluates to `false`, `every()` **immediately** returns `false`. Otherwise, it returns `true`. **This method does not mutate the caller.**

- `array.prototype.find()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `find()` returns the **value** of the **first element** in the calling array that satisfies the provided test condition. If a truthy value is not found `find()` returns `undefined`. **This method does not mutate the caller.**

- `array.prototype.findIndex()` is an array iteration and search method which is called directly on an array and executes a callbackFn once for each element in the calling array, comparing the element passed in to the callbackFn to a test condition. `findIndex()` returns the **index** of the **first element** in the calling array that satisfies the provided test condition. If no values satisfy the testing function, `-1` is returned.  **This method does not mutate the caller.**



## Working With Objects (common methods)

### Prototypal Inheritence:
Javascript Objects can **inherit** from other objects.  If `objectA` inherits from `objectB` we say that `objectB` is the **prototype** of `objectA`.  This means that `objectA` has access to properties defined on `objectB` even though `objectA` does not define those properties itself.  This concept is critical to understanding some behaviors of object `iterators`.

### Object Properties Methods
- `object.prototype.hasOwnProperty()` takes the name of a `property` and returns `true` if it is the name of one of the **calling object's** own properties, `false` otherwise.  This is useful for dealing with `prototypal property` results from a `for/in` loop.

- `Object.freeze()` is a static method of the Object class which freezes the properties of an object passed to it as an argument, so that they cannot be changed (this includes arrays). It is important to note that the freeze is `shallow`.  If any of the frozen object's properties (or indexes) contain other objects, those nested objects will still be mutable unless they are also explicitly frozen.

### Object Iteration

- `for/in` is a loop statement that is used specifically with objects where a each `property key` is iterated over `in` a named object:  (for (`let prop` in `myObj`)).  `for/in` iterates over all `enumerable properties` including properties of object's `prototypes`.

### Object To Array Iteration

`Object.keys()` is a static method of the Object class which accepts an object as an argument and returns the object's `keys` (property names) as a flat array to the caller.  This only returns the object's **own keys**

`Object.values()` is a static method of the Object class which accepts an object as an argument and returns the object's `key values` (property values) as a flat array to the caller.  This only returns the object's **own values** and the **order of the array is not dependable**.

`Object.entries()` is a static method of the Object class which accepts an object as an argument and returns the object's `key-value pairs` (entries) as an array of nested arrays with each inner array consisting of two elements:  the `property key` and the corresponding `property value`.

`Object.assign()` is a static method of the Object class for **merging** two or more objects which accepts N number of arguments. The first argument is an object with which to merge any objects specified by additional arguments.  It is possible to 'copy' an object by passing an empty object `{ }` as the first parameter.  The object passed to the first parameter **will be mutated** whether it is empty or not. Any number of additional objects can be passed as arguments to be merged with the first.



## 11. Arrays as Objects

### I Have No Idea What They Want...
Arrays have non-enumerable properties like `.length`, you can actually add properties to arrays if you want, too. Arrays obviously have `methods` so arrays are technically objects. You can use some object methods on arrays.  Dunno...not much in the course work... maybe check **09. Working With Arrays**.



## 12. Pass-by-Reference vs. Pass-by-Value

## Pass by Value
`pass-by-value` is the concept that all **primitive values** (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are passed to and returned by functions *by value*. This means that when **primitives** are passed to a function, the function receives a "copy" of the original value as an *argument* which is assigned to a new, *local* variable known as a **parameter**. The original value is therefore *distinctly separate* from the passed value and *cannot* be **mutated** by mutating the argument.

## Pass by Reference
`pass-by-reference` is the concept that whenever **objects** are passed to or returned from a function (including arrays), the function receives a **reference (pointer)** to the object's *location in memory* as an argument, not the value of the object itself. The orginal value and the passed value are *identical references to the **same object** in memory* and therefore an object assigned to a variable outside of a function which is passed into the function as an argument will be permanently changed (`mutated`) if the argument is mutated by the function.



## 13. Variables as Pointers (Call-by-Reference)

### Variables as Pointers (all objects):
`Variables as Pointers` is the concept that any objects (including arrays) are assigned to a variable's memory address *not as values*, but as **references (pointers)** to the object's location in memory.  This means that any variable which references the same object--such as a variable which points to an object which is, itself, assigned to another variable--will reflect changes to the underlying object because it is the **same object**.

### Variables as Pointers (Const, Objects & Object.freeze())
Even when declared with `const`, objects can be **mutated** and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties *cannot be changed*. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties *can* change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but *not possible* to change the object that `const` points to.

### Variables as Values (primitives):
All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are known as 'atomic' or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.



## 14. Printing vs Returning

### Printing
`console.log()` is sometimes referred to as a 'print statement'.  This method accepts an argument and then prints that argument to the console (the screen in a CLI, or the console in a browser). It is method, so it has a return value: `undefined`, but that value is not typically useful.

### Returning
All expressions `return` a value.  This includes `variable initialization`, `ternary operation`, `function invocation`, and `arithmetic operations` among other things.  A return value is a value which is passed to the calling code at the end of expression execution, in other words, a 'result', and can be used immediately or assigned to a variable for later use.



## 15. Truthy Values vs. Boolean Values

### Truthiness
The concept of `truthiness` arises out of the `implicit coercion` feature of JS.  This allows JS to use non-boolean data types in conditions, comparisons, and other operations that expect a `true` or `false` value.  We call values `truthy` that can be coerced to evaluate as `true` and `falsy` if they can be coerced to evaluate as `false`.

### Falsy Values
There are 6 `falsy` values:
- Empty strings `''`
- Not a Number `NaN`
- All forms of zero `0`, `-0`, `0n`
- boolean false `false`
- Undefined `undefined`
- Null `null`

### Logical Short Circuiting
In certain cases, JS will `short circuit` logical operations or *assume the result based on the first value*.  If an `AND` operation is performed and the first operand is `falsy`, JS will skip evaluation of the second operands and evaluate to `false`.  If an `OR` operation is performed and the first operand is `truthy`, JS will skip evaluation of the the second operand and evaluated to `true`

### The Ternary Operator:
The `ternary operator` takes three `operands`: a `condition` followed by a question mark `(?)`, then an expression to execute if the condition is `truthy` followed by a colon `(:)`, and finally the expression to execute if the condition is `falsy`.  This operator is frequently used as a shortcut for the if statement and because it is an **expression** that evaluates to a **value**, its value can be assigned to a variable, unlike the `if...else` **statement**.



## 16. Function Definitions vs. Function Invocations

### Function Definition
A `function definition` contains all of the logic and instructions of a function as well as any parameters it accepts.  It may also name the function (functions *can* be anonymous).  A function definition does not `execute` or run the function but it is possible to both define and execute a function using the same expression.

### Function Invocation
A `function invocation` instructs the program to execute (`invoke`) the instructions of the function, specifying any arguments to pass to the function at the time of invocation.  This is also called a `function call`.


## 17. Function Declarations, Function Expressions, and Arrow Functions

### Function Declarations
Put simply, a `function declaration` is any function definition that starts with the `function` keyword.  Declarations are `hoisted` to the top of the execution context (scope) when the program is initialized, which means you can call (run) declared functions earlier than the at point where they are declared.

### Function Expressions
Any function definition that does not start with `function` as well as any function invocation is considered a `function expression`. Common examples are `arrow functions`, `higher order functions`, and functions assigned to variables.  Expressions are not hoisted, so they must be declared and defined before they can be invoked.

## 18. Implicit Return Values

***NOTE: See 07. Arguments & Return Values***

### Implicit Functional Return Values
An `implicit return value` is an 'automatic' return value. Functions always return *something* to the calling code (the **caller**).  If a function does not return a value explicitly (in code), it will always (`implicitly`) return `undefined` to when passing control back to the caller.



## 19. First Class Functions

### First Class Objects
Functions in JS are `first class objects` which means that functions can be treated like any other value: they can be assigned to variables, assigned as properties of other objects (`methods`), and passed to or returned from other functions.

### Higher Order Functions
`higher order functions` are functions which are passed to or returned from other functions. In Javascript, functions passed to other functions as arguments are commonly called `callbacks`.

### Function Composition
Function invocations are valid as both `arguments` and `return values`.  When function invocations are passed to other functions as arguments, this is known as `function composition`.



## 20. Function Side Effects

### Function Side-Effects
Operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects**.  There are five categories of function side-effects:
  - accessing external interfaces (obtaining user input or logging to the console)
  - mutating objects in outer scopes
  - reassignment of a variable in an outer scope
  - raising an exception without handling it
  - calling another function that causes a side effect

## 21. Legal vs. Idiomatic Naming

### Legal Names
`legal names` describe the set of characters that are accepted as valid by Javascript when declaring identifiers.  Illegal names will throw errors. All `reserved words` are illegal for naming.

### Idiomatic Names
`idiomatic names` are names by popular convention, for instance, using `camelCase` for variables and `PascalCase` for constructors. They are not a requirement, but typically illustrate best practices that have been established such as using `descriptive identifier names` and `avoiding single character variables`.

## Imperative vs Declarative Style

### Imperitive Style
Something is said to be `imperative` when it is described as a logical set of explicit implementation steps e.g. 'rake the yard starting from the northwest corner to the southwest and moving eastward, in parallel passes 3 meters wide, alternating direction with each pass until finishing in the southeast corner'.  The imperator cares greatly how the task is implemented.  In programming this is often called a `procedure`.

### Declarative Style
Something is said to be `declarative` when the logic of what needs to be done is separated from the implementation of how its done, with the implementation being unimportant. 'after raking, dispose of the leaves'. It doesn't matter to the declarator how the leaves are disposed of, just that they're gone. In programming this is often called a `black box`.