// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/
let principal = 200000;
let interestRate = 0.05;
let years = 30;

const name = 'Hamida Sharifova';






// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

Create a variable called `monthlyinterestRate` and give it the value of interest rate divided by 12. 

Create another variable called `periods` and give it the value of years*12.
*/
let monthlyinterestRate = interestRate/12;
let periods = years*12;



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator 

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
let monthlyRate = (principal*numerator/denominator);

//console.log(monthlyRate);





// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
function mortgageCalculator(){
   let message =  name+", your monthly rate is $"+monthlyRate.toFixed(2);
   console.log(message);
}

mortgageCalculator();



// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator1(principal,interestRate,years){
   let monthlyinterestRate = interestRate/12;
   let periods = years*12;
 
   let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
   let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
   let monthlyRate = (principal*numerator/denominator);
   
   let message =  name+" your monthly rate is $"+monthlyRate.toFixed(2);
   
   console.log(message);
   
 }
 
 mortgageCalculator1(500000,0.02,10); // result is "Hamida Sharifova your monthly rate is $4600.67"


// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/

function mortgageCalculator2(principal,interestRate,years,creditScore){
   if(creditScore>740){
      interestRate = interestRate-(0.5/100);
   }
   else if(creditScore<660) {
      interestRate = interestRate+(0.5/100);
   }
   else{
      interestRate = interestRate;
   }
   let monthlyinterestRate = interestRate/12;
   let periods = years*12;
 
   let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
   let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
   let monthlyRate = (principal*numerator/denominator);
   
   let message =  name+" your monthly rate is $"+monthlyRate.toFixed(2);
   console.log(message);
   // return message;
 }

 mortgageCalculator2(500000,0.02,10,650);


// 🏡 Task 6: Loops
/* Write a new function called variableinterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableinterestRate(200000, 0.04, 30) should console.log:

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

function variableinterestRate(principal,interestRate,years){

   for (let i = 0; i<10; i++) {
    let monthlyinterestRate = interestRate/12;
    let periods = years*12;
  
    let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
    let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
    let monthlyRate = (principal*numerator/denominator);

    // function  to limit decimals to 2 digits and to put "," after every 3 digits (per US standards, ie: when given 2754.234598958 this function converts to 2,754.23)
    function numberWithCommas(number) {
      return Math.round(number).toLocaleString();
  }

   // Message that will be printed, where we are limiting interest rate decimals to 3 digits and displaying monthlyRate through numberWithCommas function 
    let message =  (name) + (", with an interest rate of ") + (interestRate.toFixed(3)) + (", your monthly rate is $") + numberWithCommas(monthlyRate);

    console.log(message);

    //increase interest rate by 0.5% (or 0.5/100) after each loop
    interestRate=(interestRate+(0.5/100));
   }

}

 
 variableinterestRate(500000,0.02,10);



// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */

function advancedMortgageCalculator(principal,interestRate,years,creditScore,propTax,homeInsurance,hoaFees){

   if(creditScore>740){
      interestRate = interestRate-(0.5/100);
   }
   else if(creditScore<660) {
      interestRate = interestRate+(0.5/100);
   }
   else{
      interestRate = interestRate;
   }
   let monthlyinterestRate = interestRate/12;
   let periods = years*12;
 
   let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
   let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
   let monthlyRate = (principal*numerator/denominator);
   
   let totalPayment = monthlyRate + propTax + homeInsurance + hoaFees;

    // function  to limit decimals to 2 digits and to put "," after every 3 digits (per US standards, ie: when given 2754.234598958 this function converts to 2,754.23)
   function numberWithCommas(number) {
      number = number.toFixed(2);
      return (+number).toLocaleString();
  }

   console.log(name+", your total monthly payment is $"+ numberWithCommas(totalPayment));

 }

 advancedMortgageCalculator(500000,0.02,10,720,400,100,120);


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */

function maxLoanCalculator(monthlyPayment, interestRate, years) {

   let monthlyinterestRate = interestRate/12;
    let periods = years*12;
  
    let numerator = monthlyinterestRate*(Math.pow((1+monthlyinterestRate),periods));
    let denominator = (Math.pow((1+monthlyinterestRate),periods))-1;
    let maxLoan = monthlyPayment*denominator/numerator;

   // function  to limit decimals to 2 digits and to put "," after every 3 digits (per US standards, ie: when given 2754.234598958 this function converts to 2,754.23)
    function numberWithCommas(number) {
      number = number.toFixed(2);
      return (+number).toLocaleString();
  }


   console.log(name+", your maximum loan amount is $"+ numberWithCommas(maxLoan));

}

maxLoanCalculator(2000,0.03,30);

/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */

//Define 4 variables to get input from users with prompt function





/* 🏡  Refactor your `variableinterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */

