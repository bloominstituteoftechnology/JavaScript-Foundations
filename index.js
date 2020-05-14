// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/

let principal = 200000;
let interestRate = 0.05;
let years = 30;



// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/

let monthlyInterestRate = interestRate / 12;
let periods = years * 12;


// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]
*/

//  return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);

    let numerator = (principal * (monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, periods))));
    let denomenator = (Math.pow(1 + monthlyInterestRate, periods) - 1);
    let monthlyRate = numerator / denomenator;
    
    console.log(monthlyRate);

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

let mortgageCalculator = function(name, monthlyRate) {
    var name = 'Donald';
    let numerator = (principal * (monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, periods))));
    let denomenator = (Math.pow(1 + monthlyInterestRate, periods) - 1);
    var monthlyRate = numerator / denomenator; 
    let sentence = name + ', your monthly rate is ' + monthlyRate;
    return sentence;
    // var had to be used on name and monthlyRate because an error, has already been declared was passing through let. This solution worked.
}

console.log(mortgageCalculator());



// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

let mortgageCalculators = function(P, I, N) {
    var P = 200000;
    var I = 0.05 / 12;
    var N = years * 12;

    var numerator = (P * (I * (Math.pow(1 + I, N))));
    var denomenator = (Math.pow(1 + I, N) - 1);
    var monthlyRate = numerator / denomenator;
    return monthlyRate;
}

console.log(mortgageCalculators());



// 🏡 Task 5: Conditionals
/* Add another parameter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

creditScore = 425;

if(creditScore < 660) { interestRate += 0.005; }
else if(creditScore > 740) { interestRate -= 0.005; }
else { interestRate += 0; }

console.log('New interest Rate: ' + interestRate);



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

// function variableInterestRate(principal, interestRate) {
//     for(i = 0; i < 11; i++) {

//         var principal = 200000;
//         var interestRate = 0.015;
//         //var years = 30;
//         var name = 'Donald';

//         var interestRate = interestRate + 0.005;
//         var monthlyRate = principal * interestRate;

//         console.log(name + ', with an interest rate of ' + interestRate + ', your monthly rate is ', monthlyRate);
//     }
// }

function variableInterestRate(principalVal,interestRateVal,yearsVal) {
    var principal = principalVal;
    var interestRate = interestRateVal;
    var years = yearsVal;
    var name = 'Donald';

    var monthlyInterestRate = interestRate / 12;
    var periods = years * 12;
    var mRate = (principal * (monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, periods)))) / (Math.pow(1 + monthlyInterestRate, periods) - 1);
    var monthlyRate = Math.round(mRate);

    for (interestRate = 0.02; interestRate <= 0.06; interestRate += 0.005) {
        monthlyRate = monthlyRate + Math.round(monthlyRate * interestRate);
        console.log(name + ', with an interest rate of ' + interestRate.toFixed(3) + ' your monthly rate is ' + monthlyRate);
    }
}
variableInterestRate(200000,0.02,30);


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
