/* 
Homework: 
  Write functions in JavaScript to calculate addition, subtraction, multiplication, division, remainder, exponent, cube, square and square root
*/

// //addition
// function addition(a, b) {
//   console.log(a + b);
//   return 0;
// }

// addition(8, 5);
// addition(6, 9);
// addition(8, 8);

// //subtraction
// function subtraction(a, b) {
//   console.log(a - b);
//   return 0;
// }

// subtraction(9, 4);
// subtraction(3, 6);
// subtraction(8, 8);

// //multiplication
// function multiplication(a, b) {
//   console.log(a * b);
//   return 0;
// }

// multiplication(8, 8);
// multiplication(2, 4);
// multiplication(5, 5);

// //division
// function division(a, b) {
//   console.log(a / b);
//   return 0;
// }

// division(8, 2);
// division(16, 4);
// division(21, 3);

// //remainder
// function remainder(a, b) {
//   console.log(a % b);
//   return 0;
// }

// remainder(17, 5);
// remainder(19, 4);
// remainder(36, 7);

// //exponent
// function exponent(a, b) {
//   console.log(a ** b);
//   return 0;
// }

// exponent(2, 4);
// exponent(3, 3);
// exponent(2, 5);

// //square
// function square(a) {
//   console.log(a * a);
//   return 0;
// }

// square(4);
// square(8);
// square(9);

// //cube
// function cube(a) {
//   console.log(a * a * a);
//   return 0;
// }

// cube(3);
// cube(5);
// cube(6);

/* Function for square root */
// function sqrt(num) {
//   console.log(num ** 0.5)
//   return 0;
// }
function sqrt(num) {
  let result = num ** 0.5;
  return result;
}

let x = sqrt(9);
let y = sqrt(169);
let z = sqrt(529);

console.log("The value of x, y, and z are:", x, y, z);