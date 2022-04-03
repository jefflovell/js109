# Grade Book

*Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.*

Numerical score letter grade list:
```
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
```
*Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.*

Examples:
```js
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
```

## Answer

```js
function getGrade(score1, score2, score3) {

  let avg = (score1 + score2 + score3) / 3;
  console.log(avg);

  switch (true) {
    case (90 <= avg && avg <= 100):
      return 'A';
      break;
    case (80 <= avg && avg <= 90):
      return 'B';
      break;
    case (70 <= avg && avg <= 80):
      return 'C';
      break;
    case (60 <= avg && avg <= 70):
      return 'D';
      break;
    default:
      return 'F';
  }

}

```

## LS Answer

```js
function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
```

### Discussion
The solution first computes the average of the three scores. It then determines the letter grade equivalent via a series of `if` statements in accordance with the problem specification.