function mortgageCalculator(principal, interestRate, years, creditScore){
    if(creditScore > 740){
        interestRate = interestRate * .95;
    }
    if(creditScore < 660){
        interestRate = interestRate * 1.05;
    }
    let monthlyInterestRate = ( interestRate / 12 );
    let periods = ( years * 12 );
    let n1 = Math.pow((1 + monthlyInterestRate), periods);
    let numerator = principal * n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = (numerator / denominator);
    
    return monthlyRate;
}

function variableInterestRate(name, principal, interestRate, years, creditScore){
    currentVariableInterestRate = interestRate - .02;
    while(currentVariableInterestRate < (interestRate + .02)){
        console.log(
                name + " with an interest rate of " + currentVariableInterestRate + ", your monthly rate is $" + mortgageCalculator(principal, currentVariableInterestRate, years, creditScore).toFixed(2)
            )
        currentVariableInterestRate = currentVariableInterestRate + 0.005;
    }
}
variableInterestRate("ASIA", 200000, .04, 30, 700);

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the
 monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:
*/
