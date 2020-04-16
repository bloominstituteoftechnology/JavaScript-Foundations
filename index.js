// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* 

Create variables for 

principal = 200000
interest = rate 0.05
years = 30
name = "Your name"

Would you use let, var, or const, and why?
>

Under these variables, console.log the name variable

*/

//Write your variables below this line

const principal = 200000
const interestRate = 0.05
const years = 30
const name = "Brian Hague"

//Write your console log below this line

console.log(name)

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.

console.log using template literals `${name} monthly interest rate is: ${monthlyInterestRate} and will pay for ${periods} months`

*/

//Write your basic math below this line

const monthlyInterestRate = interestRate / 12
const periods = years * 12

//Write your console.log below this line

console.log(`${name} monthly interest rate is: ${monthlyInterestRate} and will pay for ${periods} months`)


// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `Math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64

M = P ( I ( 1 + I )^N ) / ( ( 1 + I )^N – 1 )

`M` = Montly Rate
`P` = Principal amount (the total amount borrowed)
`I` = Monthly Interest rate on the mortgage
`N` = How many mortgage payments

using template literals console log `${name} monthly payment is ${monthlyRate}`. This should say something like `Oscar monthly payment is $1073.64`

*/

//Write your harder math below this line

const numerator = principal * monthlyInterestRate * Math.pow((1+monthlyInterestRate), periods)
const denominator = Math.pow((1+monthlyInterestRate), periods) -1
const monthlyRate = (numerator / denominator).toFixed(2)

//Write your console.log below this line
console.log(`${name} monthly payment is ${monthlyRate}`)

// 🏡 Task 3: Function
/* 

Create a function called `displayMortgage` that uses the variables from the previous steps, and **instead of console logging** returns a template literal `${name}, your monthly rate is ${monthlyRate}`

For an example, if your name is `Oscar` displayMortgage() should return "Oscar, your monthly rate is 1073.64"

after you have written your mortgageCalculator, invoke it inside of a console.log()

i.e. console.log(displayMortgage())

*/

//Write your displayMortgage function below this line

const displayMortgage = () => {
  return `${name}, your monthly rate is ${monthlyRate}`
}

//Write your console log below this line

console.log(displayMortgage())



// 🏡 Task 4: Arguments and Parameters
/* 

Make a monthlyCalculator function which accepts three parameters
one for the total amount borrowed
one for the yearly interest
one for the length in years of the term

A good choice for parameter names might be, total, interest, term

This function should return the monthly payment, not console log it as the console log is already done for you. 

*/

//Write your monthlyCalculator function below this line

const monthlyCalculator = (total, interest, term) => {
  const monthlyInterestRate = interest / 12
  const periods = term * 12
  const numerator = total * monthlyInterestRate * Math.pow((1+monthlyInterestRate), periods)
  const denominator = Math.pow((1+monthlyInterestRate), periods) -1
  return (numerator / denominator).toFixed(2)
}

//Write your monthlyCalculator function above this line

//do not modify the console.log
console.log("monthlyCalculator 4298.42 === ", monthlyCalculator(400000, 0.01, 15))


// 🏡 Task 5: Conditionals
/* 

Add another function named scoreCalculator 
This will take paramters identical to monthlyCalculator. 
One parameter will be added.
This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5% (.005), 
if credit score is below 660, interest rate increases by 0.5% (.005) and if credit score is anywhere between 660 and 740 interest rate doesn't change.

Return the updated monthly payment by returning monthlyCalculator with the total, updated interest (if any), and term

*/

//Write your scoreCalculator function on the line below

const scoreCalculator = (total, interest, term, score) => {
  if(score > 740){
    interest = interest - .005
  } else if (score < 660) {
    interest = interest + .005
  }
  return monthlyCalculator(total, interest, term)
}

//do not modify these console.logs
console.log("scoreCalculator 897.57 ===", scoreCalculator(300000, .01, 30, 800));
console.log("scoreCalculator 964.92 ===", scoreCalculator(300000, .01, 30, 700));
console.log("scoreCalculator 1035.36 ===", scoreCalculator(300000, .01, 30, 600));

// 🏡 Task 6: Loops
/* 
Write a new function called interestRateList.

The function should subtract 2% (0.02) from the inputted interest value

The function should use a for loop that runs 10 times

This loop should invoke monthlyCalculator to return a montly payment

The loop should then console.log:
`${name}, with an interest rate of ${interest}, your monthly rate is ${payment}`

Each time it loops, it should add 0.5% (0.005) to the interest

For example, if your name was Oscar interestRateList(200000, 0.04, 30) should console.log 10 items and should look like this:

Oscar, with an interest rate of 0.02, your monthly rate is $739.24
Oscar, with an interest rate of 0.025, your monthly rate is $790.24
Oscar, with an interest rate of 0.03, your monthly rate is $843.09
Oscar, with an interest rate of 0.035, your monthly rate is $898.21
Oscar, with an interest rate of 0.04, your monthly rate is $955.09
Oscar, with an interest rate of 0.045, your monthly rate is $1013.37
Oscar, with an interest rate of 0.05, your monthly rate is $1074.64
Oscar, with an interest rate of 0.055, your monthly rate is $1136.38
Oscar, with an interest rate of 0.06, your monthly rate is $1199.10
*/

//write your interestRateList below

const interestRateList = (total, interest, term) => {
  interest = (interest - .02)
  for(let i = 0; i < 10; i++){
    payment = monthlyCalculator(total, interest, term)
    console.log(`${name}, with an interest rate of ${interest.toFixed(3)}, your monthly rate is ${payment}`)
    interest = interest + .005
  }
}

//do not modify the line below
interestRateList(200000, 0.04, 30)


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
