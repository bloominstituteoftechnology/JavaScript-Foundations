// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/

let principal = 200000;
let interestRate = 0.05;
let years = 30; 
let name = 'Trevor'




// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/
let monthlyInterestRate = (interestRate / 12);
let periods = (years * 12);




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

let n1 = Math.pow ((1+ monthlyInterestRate), periods);
 let numerator = (principal * n1 * monthlyInterestRate)
 let denominator = (n1 - 1);
 let monthlyRate = (numerator / denominator)
 let result = Math.floor(monthlyRate * 100) / 100

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

// function mortgageCalculator(){
//     let principal = 200000;
//     let interestRate = 0.05;
//     let years = 30; 
//     let name = 'Trevor'
//     let monthlyInterestRate = (interestRate / 12);
//     let periods = (years * 12);let n1 = Math.pow ((1+ monthlyInterestRate), periods);
//     let numerator = (principal * n1 * monthlyInterestRate)
//     let denominator = (n1 - 1);
//     let monthlyRate = (numerator / denominator)
//     let result = Math.floor(monthlyRate * 100) / 100
//     console.log(`Hi ${name} your monthly rate is ${result}`)

// }

// mortgageCalculator()

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

// function mortgageCalculator(p, i, n){
//     let principal = p;
//     let interestRate = i;
//     let years = n; 
//     let name = 'Trevor'
//     let monthlyInterestRate = (interestRate / 12);
//     let periods = (years * 12);let n1 = Math.pow ((1+ monthlyInterestRate), periods);
//     let numerator = (principal * n1 * monthlyInterestRate)
//     let denominator = (n1 - 1);
//     let monthlyRate = (numerator / denominator)
//     let result = Math.floor(monthlyRate * 100) / 100
//     console.log(`Hi ${name} your monthly rate is ${result}`)

// }

// mortgageCalculator(200000, 0.05, 30)

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
*/


let mortgageCalculator = function(p, i, n, c){
    let principal = p;
    let interestRate = i;
    if(c > 740) {
        interestRate *= 0.95;
    } if (c < 640) {
        interestRate *= 1.05;
    }

    let years = n; 
    let name = 'Trevor'
    let monthlyInterestRate = (interestRate / 12);
    let periods = (years * 12);let n1 = Math.pow ((1+ monthlyInterestRate), periods);
    let numerator = (principal * n1 * monthlyInterestRate)
    let denominator = (n1 - 1);
    let monthlyRate = (numerator / denominator);
    let result = (Math.round(monthlyRate * 100) / 100).toFixed(2);



    // console.log(`Hi ${name} your monthly rate is ${result}`)

}

mortgageCalculator(200000, 0.05, 30, 780)
console.log(result)

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

let variableInterestRate = function(p, i, n){
    for (let x = i - 0.02; x < i + 0.02; x += 0.005) {
        let principal = p;
        let rate = x.toFixed(3);
        let interestRate = rate*1

        // if(c > 740) {
        //     interestRate *= 0.95;
        // } if (c < 640) {
        //     interestRate *= 1.05;
        // }

        let years = n; 
        let periods = (years * 12);
        let n1 = Math.pow ((1+ monthlyInterestRate), periods);
        let numerator = (principal * n1 * monthlyInterestRate)
        let denominator = (n1 - 1);
        let monthlyRate = (numerator / denominator);
        let result = Number(Math.round(monthlyRate * 100) / 100).toFixed(0);
        return result;


    // console.log(`${name}, with an intrest rate of ${interestRate} your monthly rate is ${result}`)
    }
}

var variableResult = Number(variableInterestRate(200000, 0.04, 30));
console.log(variableResult)

// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */
// let feeResult = "";


let additionalFees = function(t, i, h) {
    let tax = t;
    let insurance = i;
    let hoa = h;
    let feeResult = Number(tax + insurance + hoa);
    console.log(`Your total cost is ${(feeResult + variableResult)}`);

    
}

additionalFees(95, 250, 200)


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */
// let maxLoan = function(a, t){

function maxLoan(monthlyPayment, interestRate){
    let possiblePrinciple = 0;
    let monthlyRate = 0;
    do {
        let monthlyRate = mortgageCalc(possiblePrinciple, interestRate);
         console.log(monthlyRate);
        if (monthlyRate >= monthlyPayment) {
            return `Your max loan is ${possiblePrinciple}.`;
        } else {
            possiblePrinciple += 1;
        }
    } while (monthlyRate < monthlyPayment);
 }
 
 function mortgageCalc(principal, interestRate) {
     
     let years = 30; 
     let monthlyInterestRate = (interestRate / 12);
     let periods = (years * 12);
     let n1 = Math.pow ((1+ monthlyInterestRate), periods);
     let numerator = (principal * n1 * monthlyInterestRate);
     let denominator = (n1 - 1);
     let monthlyRate = (numerator / denominator);
     monthlyRate = monthlyRate.toFixed(2);
 
    return monthlyRate;
     
 }
 
 var output = maxLoan(500, 0.05);
 console.log(output);
 
// console.log(`maxLoan is ${newResult}`);
/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
