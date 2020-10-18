// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
let principal = 200000;
let interestRate = 0.05;
let years = 30;
let name = "Rhiannon";

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/
let monthlyInterestRate = interestRate / 12;
let periods = years * 12;

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. Save the final value into a variable called monthlyRate. 

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + monthlyInterestRate )^N
(2) Create a variable called numerator and set it equal to p * n1 * monthlyInterestRate
(3) Create a variable called denominator and set it equal to n1 - 1 
(4) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/

let n1 = Math.pow((1 + monthlyInterestRate),periods);
let numerator = principal * n1 * monthlyInterestRate;
let denominator = n1 - 1;
let monthlyRate = numerator / denominator;

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
function mortgageCalculator(name, principal) {

    let interestRate = 0.05;
    let years = 30;


    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = numerator / denominator;
    monthlyRate = monthlyRate.toFixed(2);

    return `${name}, your monthly rate is ${monthlyRate}.`
}

// Test Case
var output = mortgageCalculator("Oscar", 200000);
console.log(output);

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator(name, principal, interestRate, years) {

    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = numerator / denominator;
    monthlyRate = monthlyRate.toFixed(2);

    return `${name}, your monthly rate is ${monthlyRate}.`
}

// TEST CASE
var output = mortgageCalculator("Oscar", 200000, 0.05, 30); 
console.log(output);
// <-- should return 1,073.64


// 🏡 Task 5: Conditionals  TYPO HERE:  0.5% should be 5%
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
*/

function mortgageCalculator(name, principal, interestRate, years, creditScore) {
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let newInterestRate = 0;

    if (creditScore > 740) {
      monthlyInterestRate = monthlyInterestRate * .95;
    } else if (creditScore < 600) {
      monthlyInterestRate = monthlyInterestRate * 1.05;
    } else if (creditScore >= 660 && creditScore <= 740) {
      newInterestRate = interestRate;
    }

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = numerator / denominator;
    monthlyRate = monthlyRate.toFixed(2);

    return `${name}, your monthly rate is ${monthlyRate}.`
}

// TEST CASE
var output = mortgageCalculator("Rhiannon", 200000, 0.05, 30, 665); 
console.log(output);
// <-- should return 1,073.64

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/


function mortgageCalculator(name, principal, interestRate, years, creditScore) {
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let newInterestRate = 0;

    if (creditScore > 740) {
      monthlyInterestRate = monthlyInterestRate * .95;
    } else if (creditScore < 600) {
      monthlyInterestRate = monthlyInterestRate * 1.05;
    } else if (creditScore >= 660 && creditScore <= 740) {
      newInterestRate = interestRate;
    }

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;

    if (denominator === 0) {     // edge case for zero, denominator cannot be 0 
      return undefined;
    }
    return Math.round(numerator / denominator);
}
   

function variableInterestRate(name, principal, interestRate, years, creditScore) {

    let variableInterest = interestRate - .02; 

    for (let i = 0; i < 10; i += 1) {

        let monthlyRate = mortgageCalculator(name, principal, variableInterest, years, creditScore);
      
        let roundedVarInt = variableInterest.toFixed(3);

        console.log(`${name}, with an interest rate of ${roundedVarInt}, your montly rate is $${monthlyRate}.`);

        variableInterest += .005;     
    }
}

// TEST CASE
// var output = variableInterestRate("Rhiannon", 200000, 0.04, 30, 655);
// console.log(output);
/*
For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/



// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
function totalMonthlyHousingExpense(principal, interestRate, years, creditScore, propertyTax, homeownersInsurance, hoa) {
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;
    let newInterestRate = 0;

    if (creditScore > 740) {
      monthlyInterestRate = monthlyInterestRate * .95;
    } else if (creditScore < 600) {
      monthlyInterestRate = monthlyInterestRate * 1.05;
    } else if (creditScore >= 660 && creditScore <= 740) {
      newInterestRate = interestRate;
    }

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;

    if (denominator === 0) {     // edge case for zero, denominator cannot be 0 
      return undefined;
    }

    let monthlyPayment = Math.round(numerator / denominator);
    let totalMonthlyHousingExpense = monthlyPayment + propertyTax + homeownersInsurance + hoa;
    return totalMonthlyHousingExpense;
}
   
// SAMPLE CODE IF I WANTED AN INDEPENDENT FUNCTION FOR:
// function monthlyHomeownersInsuranceCalculator(principal) {
//     let num = principal / 100000;
//     return num * 35;
//   }
  
// function monthlyPropertyTaxCalculator(principal) {
//     let yearlyTax = principal * .00953;
//     let monthlyTax = yearlyTax / 12;
//     return monthlyTax;
// }
// function totalMonthlyHousingExpense(principal, interestRate, years, creditScore) {
//     let hoa = 300;
//     let monthlyHousingExpense = monthlyPropertyTaxCalculator(principal) + hoa + monthlyHomeownersInsuranceCalculator(principal) + mortgageCalculator(principal, interestRate, years, creditScore);
//     monthlyHousingExpense = Math.round(monthlyHousingExpense);
//     return `Your monthly housing expense will be $${monthlyHousingExpense}.`
// }


//TEST CASE
var output = totalMonthlyHousingExpense(200000, 0.04, 30, 655, 65, 200, 200);
console.log(output);

/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
function maxLoan(monthlyPayment, interestRate) {
  
    let possiblePrinciple = 0;
    let monthlyRate = 0;

  do {
     
      let monthlyRate = mortgageCalculator(possiblePrinciple, interestRate);
       console.log(monthlyRate);
      if (monthlyRate >= monthlyPayment) {
        return `Your max loan is ${possiblePrinciple}.`;
      } else {
        possiblePrinciple += 1;
      } 
  } while (monthlyRate < monthlyPayment);
}

function mortgageCalculator(principal, interestRate) {
    let years = 30;
    let monthlyInterestRate = interestRate / 12;
    let periods = years * 12;

    let n1 = Math.pow((1 + monthlyInterestRate),periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = numerator / denominator;
    monthlyRate = monthlyRate.toFixed(2);

    return monthlyRate;
}

// TEST CASE
var output = maxLoan(200, 0.05);
console.log(output);

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

// COMPLETE:  Website made, buttons styled, mortgage calculator in place.


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
function variableInterestRate(array) {
    
  // let arrayOfInterestRates = array
  // arrayOfInterestsRates.forEach(mortgageCalculator);

  array.forEach(mortgageCalculator);
}

// TEST CODE
output = variableInterestRate([0.4, 0.5, 0.6]);
console.log(output);

function mortgageCalculator(interestRate) {
  let monthlyInterestRate = interestRate / 12;
  let years = 30;
  let periods = years * 12;
  let newInterestRate = 0;
  let creditScore = 670;
  let principal = 200000;

  if (creditScore > 740) {
    monthlyInterestRate = monthlyInterestRate * .95;
  } else if (creditScore < 600) {
    monthlyInterestRate = monthlyInterestRate * 1.05;
  } else if (creditScore >= 660 && creditScore <= 740) {
    newInterestRate = interestRate;
  }

  let n1 = Math.pow((1 + monthlyInterestRate),periods);
  let numerator = principal * n1 * monthlyInterestRate;
  let denominator = n1 - 1;

  if (denominator === 0) {     // edge case for zero, denominator cannot be 0 
    return undefined;
  }
  monthlyRate = Math.round(numerator / denominator);

  console.log(`With an interest rate of ${interestRate}, your montly rate is $${monthlyRate}.`);
}
