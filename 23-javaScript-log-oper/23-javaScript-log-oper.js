let hour = prompt("Please, enter the current hour (0-23");

if (hour < 0 || hour > 23) {
  alert("Incorrect input!");
} else if (hour < 8 || hour >= 18) {
  alert("Office closed!");
} else {
  alert("We are open!");
}