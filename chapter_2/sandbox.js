// let name = "Johan";
// let birthYear = 1994;
// let age = 2020 - 1994;
// console.log(`Hi Johan. Your birthYear is ${birthYear}. That means you are ${age} years old.`);

// strings
// console.log("Hello there, World!");

// let email = "johan@hotmale.com";
// console.log(email);

// // string concatenation

// let firstName = "Johan";
// let lastName = "Berglund";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // Getting characters
// console.log(fullName[0]);

// // string length
// console.log(fullName.length - 1);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// let indexOfAt = email.indexOf('@')
// console.log(email.indexOf('a'))

// String methods 2 // common string methods
let email = "johan@hotmale.com";
console.log(email.lastIndexOf("a"));
let firstName = email.slice(0, 5);
console.log(firstName);
let result = email.substr(6, 7);
console.log(result);
let lastName = email.replace("a", "P");
console.log(lastName);
