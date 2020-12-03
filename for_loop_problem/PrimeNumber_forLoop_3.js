readline = require("readline-sync")
let Num = readline.question("enter the number")

function isPrimeNumber() {
    let temp;
    var isPrime = true;
    for (let i = 2; i <= Num / 2; i++) {
      temp = Num % i;
      if (temp == 0) {
        isPrime = false;
        break;
      }
    }
    //If isPrime is true then the number is prime else not
    if (isPrime) console.log(Num + " is a Prime Number");
    else console.log(Num + " is not a Prime Number");
  }
  
  isPrimeNumber(9);


 
  