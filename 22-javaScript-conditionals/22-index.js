alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = prompt("Enter first number");
let secondNumber = prompt("Enter second number");

if (firstNumber > secondNumber) {
  alert("First number is greater!");
} else if (firstNumber < secondNumber) {
  alert("Second number is greater!");
} else if (firstNumber == secondNumber) {
  alert("The numbers are equal!");
}
