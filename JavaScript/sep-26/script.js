/* 
  Topic : JavaScript Objects
  An object is a collection of key-value pairs. It is used to store data in a structured way.
  We can use it to store properties and methods.
*/

/*
  let studentName = "Sahil Gurung";
  let studentAge = 21;
  let studentGender = "Male";
  let studentPhone = "+977 123-1234567";
  let studentEmail = "sahil.gurung@gmail.com";
  let studentCourse = "Web Development";
  let studentCity = "Kathmandu";
  let studentCountry = "Nepal";
  let studentFeePaid = true;
  Problem: The user wants to store the above data of a student in a better way.
  Solution: Use object to store the data.
*/

let student = {
  name: "Sahil Gurung",
  age: 19,
  gender: "Male",
  phone: "+977 123-1234567",
  email: "sahil.gurung@gmail.com",
  course: "Web Development",
  city: "Kathmandu",
  country: "Nepal",
  feePaid: true,
}

/* To print the whole object we use console.log(<objName>) */
console.log(student);

/* To print the object in a better format we use console.table(<objName>) */
console.table(student);