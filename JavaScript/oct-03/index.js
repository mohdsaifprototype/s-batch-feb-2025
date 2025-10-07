/* 
Topic: JavaScript functions

Q: What is a function?
A: A function is a block of code that performs a specific task.

Q: What is a function declaration?
A: A function declaration is a statement that defines a function and its name.

Q: What is a function call?
A: A function call is a statement that invokes a function.
*/

// function sayHello() {     // Function declaration
//   console.log("Hello!");
// }

// sayHello();               // Function call

/* A function to add two numbers */
// function add(a = 0, b = 0) {
//   let c = a + b;
//   return c;
// }

// // let result = add(1, 2);

// // console.log(result);

// console.log(add(5,6));


/* A function to print the average of three nymbers */
function avg(x = 0, y = 0, z = 0, num = 3) {
  let average = (x + y + z) / num;
  return average;
}

console.log(avg(1, 2, 3));
console.log(avg(4, 5, 6));
console.log(avg(7, 8, 9));
console.log(avg(2, 4, 0, 2));


/* 
Homework: 
1. Write a function that takes name as input and prints "Hello <name>";
2. Write a function that takes two numbers as input and prints their sum.
3. Write a function to devide two numbers.
*/