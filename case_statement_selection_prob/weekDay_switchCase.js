readline = require("readline-sync")
let weekday =readline.question("enter the number ")
console.log("Enter the Weekday is: " + weekday);

switch (weekday) {
    case "1":
        console.log("Sunday");
      break;
    case "2":
        console.log("Monday");
      break;
    case "3":
        console.log("Tuesday");
      break;
    case "4":
        console.log("Wednesday");
      break;
    case "5":
        console.log("Thursday");
      break;
    case "6":
        console.log("Friday");
      break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input! please enter the week number between 1-7.");
      break;
  }