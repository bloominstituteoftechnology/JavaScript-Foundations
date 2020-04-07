# JavaScript-Foundations

The module challenge is the afternoon project or assignment that students work through independently. This expands on the guided project completed earlier with the instructor.

## Advanced CSS and JavaScript

## JavaScript Foundations

## Objectives

- use let, const, var and demonstrate their differences.
- understand and be able to use different operators.
- write a basic for loop / while loop.
- write control flow using if/else statements.
- use function declarations, expressions, and arrow
functions and describe their differences
  
## Introduction

Today you'll build a mortgage rate calculator that runs in the console. As you learned today, JavaScript is great for adding functionality and interactivity to a webpage. In our exercises today we won't be working with the visual part of the webpage, but the work you do here could be combined with HTML and CSS to create a fully functioning single page application.

The formula for a monthly mortgage payment is as follows:

![calculation](https://tk-assets.lambdaschool.com/b515edce-5acc-46b9-8194-8d407469771f_ScreenShot2020-04-07at3.29.59PM.png)

Or, in plain text:
```
M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]
```

In order to find your monthly payment amount "M,” you need to plug in the following three numbers from your loan:

`P` = Principal amount (the total amount borrowed)
`I` = Interest rate on the mortgage
`N` = Number of periods (monthly mortgage payments)

Exercises outlined in the `index.js` file walk you through a series of steps for building a robust and functional mortgage calculator.

Check out the resources below for more of a step-by-step walk-through of this math, and to see a well-designed mortgage calculator web app. Believe it or not, the backend you write today could power a beautiful site like that!

## Instructions

### Task 1: Set up Project

Using VSCode and Command Line:

1. Fork repo and add TL as collaborator on Github.
2. Clone your fork (not Lambda's repo by mistake!).
3. `cd` into your newly cloned repository.
4. Create a new branch by typing `git checkout -b <firstName-lastName>`.

### Task 2: Complete MVP Requirements

Find the `index.js` file and complete the tasks as written. Your final product should be a function called `variableInterestRate` that accepts a `principal`, `interest rate`, `mortgage length`, and `credit score` and returns 10 different options of monthly payments.

As you work on your code you should make use of `console.log` to check your progress and debug.

### Task 3: Stretch Goals

After you have completed the requirements, try any of the following challenges. As always, note that these may require additional research beyond what you learned in this module.

- [ ] Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing
- [ ] Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford
- [ ] Explore using `window.prompt()` to allow a user to input parameters in the browser
- [ ] Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!)

## Submission format

Follow these steps for completing your project.

1. [ ] Submit a pull request to merge `<firstName-lastName>` branch into master. **Please don't merge your own pull request**
2. [ ] Add your TL as a reviewer on the pull-request
3. [ ] Your TL will count the project as complete by merging the branch back into master

## Resources

🧮 [Detailed Walk-through of Mortgage Calculations](https://www.valuepenguin.com/mortgages/mortgage-payments-calculator)

👀 [Mortgage Calculator Web App for Inspiration](https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx)

🤟 [window.prompt for Stretch Goals](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
