  readline = require("readline-sync")
  let Num = readline.question("enter the number")
  readline = require("readline-sync")
  let power = readline.question("enter the power")
  let power_two = 1;
  for ( i = 1; i <= power; i++)
  {
    power_two = (power_two * Num)
  }
  console.log("num to the power of power is : " + power_two);