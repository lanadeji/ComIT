// add all the numbers between 0 and 1000.
let sum = 0;
for (let i = 0; i < 1000; i++) {
  sum += i;
  if (sum > 400) break; //if partial sum is greater than 400, exit loop
}
alert(sum);

//*********************************************************************/

// show numbers between 0 and 10
for (let i = 0; i <= 10; i++) {      // using a for loop
  console.log(i);
}

let i = 0;                           // using a do/while loop
do {
  console.log(i);
  i++;
} while (i <= 10);

let i = 0;                           // using a while loop
while (i <= 10) {
  console.log(i);
  i++;
}


// show numbers between 100 and 0
for (let i = 100; i >= 0; i--) {      // using a for loop
  console.log(i);
}

let i = 100;                          // using a do/while loop
do {
  console.log(i);
  i--;
} while (i >= 0);

let i = 100;                          // using a while loop
while (i >= 0) {
  console.log(i);
  i--;
}


// show even numbers between 0 and 100
for (let i = 1; i < 100; i++) {      // using a for loop
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 1;                          // using a do/while loop
do {
  if (i % 2 === 0) {
    console.log(i);
  } i++;
} while (i < 100);

let i = 0;                           // using a while loop
while (i < 100) {
  if (i % 2 === 0) {
    console.log(i);
  } i++;
}


// output an array of *'s
let stars = "";                        // using a for loop
for (let i = 1; i <= 13; i++) {      
  stars += "*";
  console.log(stars);
}

let stars = "";                        // using a do/while loop
let i = 1;                          
do {
  stars += "*";
  console.log(stars);
  i++;
} while (i <= 13);

let stars = "";                        // using a while loop
let i = 1; 
while (i <= 13) {                       
  stars += "*";
  console.log(stars);
  i++;
}