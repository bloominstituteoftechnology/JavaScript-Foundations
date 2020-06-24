

let principal = 0;
let interest = 0;
let years = 0;
let monthlyInterestRate = 0;
let periods =0;
let nn = 0;
let n1 = 0;
let numerator = 0;
let denominator = 0;
let monthlyRate = 0;







let userinput = '';
var theClient = ''; 

const whatIsYourName = (urname) => {
    console.log("Your name is "+urname);
    
    
    return urname;
};



const mortgageCalculator = (p,i,n,c) => {
  

    years = 30;
    interest = 0.05 ;
     principal =  200000;
    
    
     monthlyInterestRate = (interest) / 12;
     periods = (years)*12;
    
    
    
    
     nn = (1+monthlyInterestRate);
    n1 = Math.pow(periods,nn);
    //let p =interest*n1;
     numerator = ((principal * n1) *( interest)) ;
    denominator = (n1 - 1);
    monthlyRate = numerator/denominator;
    
    
    
    
    console.log(monthlyRate);
    



    if(c > 740){
    let decrase = interest * -(monthlyRate * 0.95) ;
    i = interest - decrase;
    
    }
    let e = p * i * n;
    
    
    
        return e;
    };
    

// Recieve user input
function myJsFunction(){
    var text=document.getElementById('input1').value;
     userinput = text;
     theClient = whatIsYourName(userinput);
    document.write(theClient+", your monthly rate is "+monthlyRate);
 }





document.write(mortgageCalculator(principal,interest,n1,800));

console.log(theClient+", your monthly rate is "+monthlyRate);


