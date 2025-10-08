/* 
Homework: 
1. Write a function that takes name as input and prints "Hello <name>";
2. Write a function that takes two numbers as input and prints their sum.
3. Write a function to devide two numbers.
*/

/* 1. Write a function that takes name as input and prints "Hello <name>"; */
// function sayHello(name) {
//   console.log("Hello " + name + "!");
//   return 0;
// }

// sayHello("Sahil Gurung");
// sayHello("Shikha Waldia");
// sayHello("Tanisha Asiwal");

/* 2. Write a function that takes two numbers as input and prints their sum. */
// function add(x=0, y=0){
//   console.log(x + y);
//   return 0;
// }

// add(3, 5);
// add(-5, 10);
// add(2.5, -3.2);

/* 3. Write a function to devide two numbers. */
// function divide(x=0, y=1) {
//   console.log(x / y);
//   return 0;
// }

// divide(4);

function divide(p = 0, q = 1) { 
  let result = p / q;
  return result;
}

let output = divide(6, 3);

console.log(output);
