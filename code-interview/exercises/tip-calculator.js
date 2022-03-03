var readlineSync = require('readline-sync');
let tipStd = {'10%': .1, '15%': .15, '20%': .2 };
let tipOptions = [];

console.clear();

console.log('Welcome to the tip calculator!');
console.log('\n Please enter your bill amount...');
let bill = parseFloat(readlineSync.prompt());

console.log('\nWould you like to add a standard tip?');

let option = 1;

for (let key in tipStd) {
  let tip = tipStd[key] * bill;
  let total = tip + bill;

  console.log(`Tip option ${option} ==> ${key} tip is $${tip.toFixed(2)} totaling $${total.toFixed(2)}`);
  tipOptions.push(tip);
  option += 1;
}

console.log(`\nEnter the tip option number to select a standard tip or enter a custom tip percentage as a whole number...`);
let selectTipOption = parseInt(readlineSync.prompt(), 10);

if (selectTipOption === 1) {
  let total = tipOptions[0] + bill;
  console.log(`Your bill was $${bill} with a 10% tip of $${tipOptions[0].toFixed(2)} for a total of $${total.toFixed(2)}`);
} else if (selectTipOption === 2) {
  let total = tipOptions[1] + bill;
  console.log(`Your bill was $${bill} with a 15% tip of $${tipOptions[1].toFixed(2)} for a total of $${total.toFixed(2)}`);
} else if (selectTipOption === 3) {
  let total = tipOptions[2] + bill;
  console.log(`Your bill was $${bill} with a 20% tip of $${tipOptions[2].toFixed(2)} for a total of $${total.toFixed(2)}`);
} else {
  let customTip = bill * (selectTipOption / 100);
  let customTotal = bill + customTip;
  console.log(`Your bill was $${bill} with a ${selectTipOption}% tip of $${customTip.toFixed(2)} for a total of $${customTotal.toFixed(2)}`);
}