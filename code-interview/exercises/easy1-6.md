## Sum or Product of Consecutive Integers
*Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.*

**Examples:**
```
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
```
```
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
```

### PEDAC

**Problem**
- inputs
  - integer number > 0
  - prompt for sum calculation (addition) OR
  - prompt for product calculation (multiplication)
- outputs
  - sum or product (based on input) of all consecutive integer (whole) numbers between 1 and the input integer (inclusive)

- considerations:
  - input validation? AND/OR
  - input sanitation? AND/OR
  - input error handling?
  - performance optimization?
    - very simple to build an iterative solution but would be O(n) time

**Examples**
- see above

**Data Structure**
- simple structures, primitive values and arithmetic
- numbers
- strings (input is string)
- variables

**Algorithm**

- take a user input A (will be a string) and convert it to an integer
- check that the integer is greater than 0
  - if not, inform the user and ask for a new integer // subroutine?
- assign input A to a variable

- take a user input B (will be string) for either a summation or product calculation
- use input A as starting value of a decrementing loop
- declare a results variable
  - if product
    - multiply starting value by input A minus 1 and add to result
    - decrement starting value until 1
    - exit loop and print result
  - if summation
    - add input A minus 1 to starting value and store to result
    - decrement starting value until 1
    - exit loop and print result
- ask user if they want to perform another caluclation? // subroutine?

**Code** *(with intent...)*