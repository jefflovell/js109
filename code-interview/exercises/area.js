var readlineSync = require('readline-sync');

let lengthM;
let widthM;
const sqMtoSqF = 10.7639;

console.clear();
console.log('Welcome to the Area Calculator!');

console.log('\nPlease enter a length in meters...');
while (true) {
  lengthM = readlineSync.prompt();
  if (lengthM) {
    break;
  }
}

console.log('\nPlease enter a width in meters...');
while (true) {
  widthM = readlineSync.prompt();
  if (widthM) {
    break;
  }
}
console.clear();

let areaM = lengthM * widthM;
let areaF = areaM * sqMtoSqF;

console.log(`The area of a ${lengthM} meter by ${widthM} meter rectangle is: ${areaM} square meters`);
console.log(`This is equal to: ${areaF} square feet`);