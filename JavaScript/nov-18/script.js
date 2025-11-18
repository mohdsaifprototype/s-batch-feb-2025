/* 
There are two ways to work with conditional statements:
1. if, if-else, if+elseif-else
2. Using switch

Synatx for using swithc

switch(<options>){
  case 1:
    Statement to execute when case 1 is true Or options = 1;
    breake;
  case 2:
    Statement to execute when case 2 is true Or options = 2;
    breake;
  default:
    Statement to execute when all the cases are false.
    break;
}
*/

/* 
Problem set:
  Take an integer as an input form the user and perform one of the following task for the integer value.
  1. Do addition
  2. Do Multiplication
  3. Do Subtraction
  4. Do division
*/

/* let a = +prompt("Enter the integer value for a:");
let b = +prompt("Enter the integer value for b:");

let choice = +prompt("Enter a number:\n1. For addition\n2. For Multiplication\n3. For Subtraction\n4. For division");

switch (choice) {
  case 1:
    console.log(a, "+", b, "=", a + b);
    break;
  case 2:
    console.log(a, "*", b, "=", a * b);
    break;
  case 3:
    console.log(a, "-", b, "=", a - b);
    break;
  case 4:
    console.log(a, "÷", b, "=", a / b);
    break;

  default:
    alert("Invalid input!");
    location.reload();
    break;
} */

let num = Number(prompt("Enter an integer"));
switch (num % 2) {
  case 1 :
    console.log("Number is odd!");
    break;
  case 0:
    console.log("Number is even!");
    break;
  case -1:
    console.log("Number is odd!");
    break;
  default:
    console.log("Invalid Integer!");
    break;
}
