readline = require("readline-sync")
let Num = readline.question("enter the number")
fact=1;
for(i=1; i<=Num; i++)
{
    fact = ( fact * i ) //fact = fct * i
}
console.log("The factorial of " + Num + " is " + fact);

