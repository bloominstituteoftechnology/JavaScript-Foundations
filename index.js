// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively.
 Create another value called name and give it the value of your own name.
*/






// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/







// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. 
Save the final value into a variable called monthlyRate. 

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. 
That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + monthlyInterestRate )^N
(2) Create a variable called numerator and set it equal to p * n1 * monthlyInterestRate
(3) Create a variable called denominator and set it equal to n1 - 1 
(4) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/


// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, 
your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute 
`P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a 
number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate 
drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is 
anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, 
to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
*/





// function functioning correctly




function mortgageCalculator() {

    var yourName = document.getElementById("input1").value;
    theClient = yourName;
    var principal = parseFloat(document.getElementById("principal").value);

    var loanTerm = parseFloat(document.getElementById("loanTerm").value);

    var interestRate = parseFloat(document.getElementById("interestRate").value);

    var percentageRate = interestRate / 1200;
    var lengthOfLoan = 12 * loanTerm;
    var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
    monthlyPayment = monthlyPayment.toFixed(2);
    var msg = theClient+' Your Monthly Mortgage Payment is '+monthlyPayment;
    //document.getElement("p").value = msg;

    // Write to a new page
    //document.write(msg);
    // or write to the current form

    document.getElementById("clientName").value = msg;
    document.getElementById("payment").value = monthlyPayment;


}

let theClient = '';
let principal = 0;
let loanTerm = 0;
let interestRate = 0;
let credit = 400;
let yourMonthlyPayments = 0;
let  added=0;
let decreased = 0;
var varint = '';
var isvar = null;
// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a 
number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate 
drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is 
anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, 
to increase an interest rate by 5% you'd do monthlyRate * 1.05. 

below 660 interest rate increases by 5%
between 660 740 remains unchanged
above 740 interest rate drops by 5%

*/


function theMortgageCalculator(principal,interestRate,loanTerm,credit) {

    

    if(credit <= 800){
        // TODO: Credit banner
        document.getElementById("formerror").innerHTML = "";






        /*
                below 660 interest rate increases by 5%
                between 660 740 remains unchanged
                above 740 interest rate drops by 5%
            An additional 5% of the interest is added
                      5   =   N
                    100     5

                */
                if(credit >= 0 && credit <= 659){
                    /*
                    // The increase is what number over 5%
                    var numerator = 5 * interestRate;
                    var increaser = 5 / 100;
                    interestRate = interestRate + (interestRate * increaser);
                  */
                    var percentageRate = interestRate / 1200;
                    var lengthOfLoan = 12 * loanTerm;
                    var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                    monthlyPayment = monthlyPayment.toFixed(2);
                    yourMonthlyPayments = monthlyPayment;
                    // to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
                    yourMonthlyPayments = yourMonthlyPayments * 1.05;
                    var msg = theClient+' Your Monthly Mortgage Payment is '+yourMonthlyPayments;
                   
        
                    document.getElementById("clientName").value = msg;
                    document.getElementById("payment").value = yourMonthlyPayments;
                   added = 0;
                    if(!NaN === true){
                        added = 0;
                        added = yourMonthlyPayments - monthlyPayment;
                        document.getElementById("thanks").innerHTML = 'We added '+added+' to your premium';
                    }else if(!NaN === false){
                        
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }else if (NaN === false){
                        
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }
                        else if(NaN === true){
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }else{
                       
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }
                }



               // Unchanged 660 740
               if(credit >=660 && credit <= 740){
                var percentageRate = interestRate / 1200;
                var lengthOfLoan = 12 * loanTerm;
                var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                monthlyPayment = monthlyPayment.toFixed(2);
                yourMonthlyPayments = monthlyPayment;
                var msg = theClient+' Your Monthly Mortgage Payment is '+monthlyPayment;
                //document.getElement("p").value = msg;
    
                // Write to a new page
                //document.write(msg);
                // or write to the current form
    
                document.getElementById("clientName").value = msg;
                document.getElementById("payment").value = monthlyPayment;
                document.getElementById("thanks").innerHTML = 'Thanks for using our Payment Locator';
               }

               // Unchanged 660 740
               if(credit >=741 && credit <= 800){
                var percentageRate = interestRate / 1200;
                var lengthOfLoan = 12 * loanTerm;
                var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                monthlyPayment = monthlyPayment.toFixed(2);
                yourMonthlyPayments = monthlyPayment;
                //decreased = monthlyPayment;
                
                //To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95.
                yourMonthlyPayments = yourMonthlyPayments * 0.95;

                var msg = theClient+' Your Monthly Mortgage Payment is '+yourMonthlyPayments;
                //document.getElement("p").value = msg;
    
                // Write to a new page
                //document.write(msg);
                // or write to the current form

                added = 0;
                if(!NaN === true){
                    decreased = 0;
                    decreased = yourMonthlyPayments - monthlyPayment;
                    document.getElementById("thanks").innerHTML = 'We added '+decreased+' to your premium';
                }else if(!NaN === false){
                    
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }else if (NaN === false){
                    
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }
                    else if(NaN === true){
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }else{
                   
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }


    
                document.getElementById("clientName").value = msg;
                document.getElementById("payment").value = yourMonthlyPayments;
                document.getElementById("thanks").innerHTML = 'Thanks for using our Payment Locator your payment decreased '+decreased;
               }
        



} else if(credit > 800){
        document.getElementById("formerror").innerHTML = "No Credit Score given";
        //location.reload();   
    }

}

const reg = () => {
    var yourName = document.getElementById("input1").value;
    theClient = yourName;
     principal = parseFloat(document.getElementById("principal").value);
     loanTerm = parseFloat(document.getElementById("loanTerm").value);
     credit = parseInt(document.getElementById("creditScore").value);
    interestRate = parseFloat(document.getElementById("interestRate").value);
    console.log(interestRate);

    theMortgageCalculator(principal,interestRate,loanTerm,credit);
};
const varinterest = () => {
  var l =  document.querySelector('.varInt:checked').value;

if  (typeof l != null ){
    //l = document.getElementById('varInt').value;
    console.log('here'+l);
}else {
    l = 'of';
}
   console.log('l'+l);
    return l;
};
const init = () => {
varint = varinterest();
    console.log(v);
};
const getUserInput = () =>{
  reg();
//init();
    
};




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the

same as mortgageCalculator, 
except it should console.log the monthly payment for 10 different interest rates
 at 0.5% increments plus or 
minus 2% from the inputted interest rate. Complete these calculations using a 
for loop.

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

function variableInterestRateCalculator(principal,interestRate,loanTerm,credit){

    if(credit <= 800){
        // TODO: Credit banner
        document.getElementById("formerror").innerHTML = "";






        /*
                below 660 interest rate increases by 5%
                between 660 740 remains unchanged
                above 740 interest rate drops by 5%
            An additional 5% of the interest is added
                      5   =   N
                    100     5

                */
                if(credit >= 0 && credit <= 659){
                    /*
                    // The increase is what number over 5%
                    var numerator = 5 * interestRate;
                    var increaser = 5 / 100;
                    interestRate = interestRate + (interestRate * increaser);
                  */
                    var percentageRate = interestRate / 1200;
                    var lengthOfLoan = 12 * loanTerm;
                    var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                    monthlyPayment = monthlyPayment.toFixed(2);
                    yourMonthlyPayments = monthlyPayment;
                    // to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
                    yourMonthlyPayments = yourMonthlyPayments * 1.05;
                    var msg = theClient+' Your Monthly Mortgage Payment is '+yourMonthlyPayments;
                   
        
                    document.getElementById("clientName").value = msg;
                    document.getElementById("payment").value = yourMonthlyPayments;
                   added = 0;
                    if(!NaN === true){
                        added = 0;
                        added = yourMonthlyPayments - monthlyPayment;
                        document.getElementById("thanks").innerHTML = 'We added '+added+' to your premium';
                    }else if(!NaN === false){
                        
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }else if (NaN === false){
                        
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }
                        else if(NaN === true){
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }else{
                       
                        document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                    }
                }



               // Unchanged 660 740
               if(credit >=660 && credit <= 740){
                var percentageRate = interestRate / 1200;
                var lengthOfLoan = 12 * loanTerm;
                var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                monthlyPayment = monthlyPayment.toFixed(2);
                yourMonthlyPayments = monthlyPayment;
                var msg = theClient+' Your Monthly Mortgage Payment is '+monthlyPayment;
                //document.getElement("p").value = msg;
    
                // Write to a new page
                //document.write(msg);
                // or write to the current form
    
                document.getElementById("clientName").value = msg;
                document.getElementById("payment").value = monthlyPayment;
                document.getElementById("thanks").innerHTML = 'Thanks for using our Payment Locator';
               }

               // Unchanged 660 740
               if(credit >=741 && credit <= 800){
                var percentageRate = interestRate / 1200;
                var lengthOfLoan = 12 * loanTerm;
                var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
                monthlyPayment = monthlyPayment.toFixed(2);
                yourMonthlyPayments = monthlyPayment;
                //decreased = monthlyPayment;
                
                //To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95.
                yourMonthlyPayments = yourMonthlyPayments * 0.95;

                var msg = theClient+' Your Monthly Mortgage Payment is '+yourMonthlyPayments;
                //document.getElement("p").value = msg;
    
                // Write to a new page
                //document.write(msg);
                // or write to the current form

                added = 0;
                if(!NaN === true){
                    decreased = 0;
                    decreased = yourMonthlyPayments - monthlyPayment;
                    document.getElementById("thanks").innerHTML = 'We added '+decreased+' to your premium';
                }else if(!NaN === false){
                    
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }else if (NaN === false){
                    
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }
                    else if(NaN === true){
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }else{
                   
                    document.getElementById("thanks").innerHTML = 'We added nothing to your premium';
                }


    
                document.getElementById("clientName").value = msg;
                document.getElementById("payment").value = yourMonthlyPayments;
                document.getElementById("thanks").innerHTML = 'Thanks for using our Payment Locator your payment decreased '+decreased;
               }
        



} else if(credit > 800){
        document.getElementById("formerror").innerHTML = "No Credit Score given";
        //location.reload();   
    }





};


const getVarInput = () => {
    let using = document.getElementById("using").innerHTML;
    if(isvar == null){
        isvar = true;

    }else {
        isvar = false;
    }
    if(isvar){
        let style = document.getElementById("clientName");
    style.style.height = "16rem";
    
    using.style.value = "Using Variable Interest Rate Calculator";
    variableInterestRateCalculator(principal,interestRate,loanTerm,credit);
    }else if(!isvar){
        let style = document.getElementById("clientName");
    style.style.height = "5rem";
  
    using.value = "Using Regular Mortgage Calculator";
    
    
    getUserInput();
 }

 if( document.querySelector('.varInt').checked){
    let style = document.getElementById("clientName");
    style.style.height = "16rem";
    
    using.style.value = "Using Variable Interest Rate Calculator";
    variableInterestRateCalculator(principal,interestRate,loanTerm,credit);
    
 }else{
    let style = document.getElementById("clientName");
    style.style.height = "5rem";
  
    using.value = "Using Regular Mortgage Calculator";
    
    
    getUserInput();
 }
};


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. 
Remember as always, these may 
require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters
 in your function to calculate 
total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and 
`interest rate` and returns the maximum loan 
that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in 
the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of 
interest rates (make sure to copy 
    and paste as to not lose your work!) */
