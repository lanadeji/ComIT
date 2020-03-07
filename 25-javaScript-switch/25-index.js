let monday = 1;
let tuesday = 2;
let wednesday = 3;
let thursday = 4;
let friday = 5;
let saturday = 6;
let sunday = 7;


// using the if/else statement
let weekDay = prompt("What day is it? Enter a number between 1-7");
if (weekDay == 1) {
  alert("Today is Monday!");
} else if (weekDay == 2) {
  alert("Today is Tuesday!");
} else if (weekDay == 3) {
  alert("Today is Wednesday!"); 
} else if (weekDay == 4) {
  alert("Today is Thursday!");
} else if (weekDay == 5) {
  alert("Today is Friday!");
} else if (weekDay == 6) {
  alert("Today is Saturday!");
} else if (weekDay == 7) {
  alert("Today is Sunday!");
} else {
  alert("Error: Number not between 1-7");
}



// using the switch method
let weekDay  =  prompt("What day is it? Enter a number between 1-7");

switch (weekDay) {
  case '1':
    alert("Today is Monday!");
    break;
  case '2':
    alert("Today is Tuesday!");
    break;
  case '3':
    alert("Today is Wednesday!");
    break;
  case '4':
    alert("Today is Thursday!");
    break;
  case '5':
    alert("Today is Friday!");
    break;
  case '6':
    alert("Today is Saturday!");
    break;
  case '7':
    alert("Today is Sunday!");
    break;
  default:
    alert("Error: Number not between 1-7");
}