/* 
Topic: Conditional statements using JavaScript.
A conditional statement only executes when certain conditions are met or true.

HOMEWORK: mentioned in the bottom!
*/

/* Program: To check if a person is eligible to vote */
// let age = +prompt("Tell me your age:", 1);
// console.log("Age:", age);
// if (age >= 18) {
//   console.log("You are eligible to vote!");
// }

/* Program: To check if a person is eligible to vote or not */
// let age = +prompt("Tell me your age:", 1);
// console.log("Age:", age);
// if (age >= 18) {
//   console.log("You are eligible to vote!");
// } else {
//   console.log("You are ineligible to vote!");
// }

/* Program: To check if a person is eligible to vote or not with proper values */
// let age = +prompt("Tell me your age:", 1);
// console.log("Age:", age);
// if (age >= 18 && age <=100) {
//   console.log("You are eligible to vote!");
// } else if (age < 18 && age > 0) {
//   console.log("You are ineligible to vote!");
// } else if (age <= 0) {
//   console.log("Are you stupid or what that you are writing age below 1!");
// } else {
//   console.log("Invalid input!");
// }

/* Program: To check if a number is even or odd? */

// let number = +prompt("Enter an Integer", 0);

// if (number % 2 == 0) {
//   console.log("The number is even!");
// } else if (number % 2 == 1 || number % 2 == -1) {
//   console.log("The number is odd!");
// } else {
//   alert("Invalid input!\nRefresh the page and try again!");
// }

/* 
Program: To print the name of weekday on the basis of week number. Such as:
0 => Sunday
1 => Monday
2 => Tuesday
3 => Wednesday
4 => Thursday
5 => Friday
6 => Saturday
*/

// let weekNum = +prompt("Enter a number between 0 to 6 to print a weekday:", 0);
// if (weekNum == 0) {
//   console.log("Sunday");
// } else if (weekNum == 1) {
//   console.log("Monday");
// } else if (weekNum == 2) {
//   console.log("Tuesday");
// } else if (weekNum == 3) {
//   console.log("Wednesday");
// } else if (weekNum == 4) {
//   console.log("Thursday");
// } else if (weekNum == 5) {
//   console.log("Friday");
// } else if (weekNum == 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid input!");
// }

/* Another upgrade version for the weekdays */
// let weekNum = +prompt("Enter a number between 0 to 6 to print a weekday:", 0);
// if (weekNum % 7 == 0) {
//   console.log("Sunday");
// } else if (weekNum % 7 == 1) {
//   console.log("Monday");
// } else if (weekNum % 7 == 2) {
//   console.log("Tuesday");
// } else if (weekNum % 7 == 3) {
//   console.log("Wednesday");
// } else if (weekNum % 7 == 4) {
//   console.log("Thursday");
// } else if (weekNum % 7 == 5) {
//   console.log("Friday");
// } else if (weekNum % 7 == 6) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid input!");
// }


/* 
QUICK HACKS YOU SHOULD KNOW!
*/
// if(1) {
//   console.log("This is a message from if block")
// }

// if(13) {
//   console.log("This is a message from if block")
// }

// if(" ") {
//   console.log("This is a message from if block")
// }

// if(1 || 0) {
//   console.log("This is a message from if block")
// }

// if(0) {
//   console.log("This is a message from if block")
// }

// if("") {
//   console.log("This is a message from if block")
// }

// if(null) {
//   console.log("This is a message from if block")
// }

// if(undefined) {
//   console.log("This is a message from if block")
// }

// if(1 && 0) {
//   console.log("This is a message from if block")
// }

/* 
HOMEWORK:
1. Practice by writing the above program on your own.

2. Write a program to print the name of month on the basis of month number.
  1 => January
  2 => February
  ...
  12 => December

3. Write a program to check if a year is leap year or not.

4. Write a program to check if a number is prime or not.

5. Write a program to check if a number is perfect square or not.
e.g.,
A perfect square
25 => 5 * 5
36 => 6 * 6
not a perfect square
33 => 5.7445626465 * 5.7445626465
*/