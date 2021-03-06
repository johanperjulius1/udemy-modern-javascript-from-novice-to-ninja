// // 4.30 Function Declaration & Expressions

// greet();

// // function declarations

// function greet() {
//   console.log("hello from declaration");
// }

// const johan = greeting = () => {
//   console.log("Hi from arrow function expression");
// };

// johan();

//  ludwig = () => {
//   console.log("Hi from arrow function declaration");
// };

// johan();
// ludwig();
// greeting();

// // 4.31 Arguments & Parameters

// const speak = (name = 'brauser', time='morning') => {
//   console.log(`good ${time} ${name}`)
// }

// speak('eric', 'daylight')

// // 4.33 Arrow function

// const calcArea = radius => 3.14 * radius ** 2;
// const area = calcArea(5);
// console.log('Area is: ', calcArea(100))

// const greet = () => 'hello johan';
// console.log(greet())

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total
// }

// console.log(bill([10000, 15, 30], 0.10))

// // 4.35 Foreach Method & Callbacks

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc(function (value) {
//   console.log(value);
// });

// let dogs = ["tax", "collier", "werewolf"];

// dogs.forEach((index, dog) => {
//   console.log(index, dog);
// });

// // or

// logDog = (index, dog) => {
//   console.log(index, dog);
// };

// dogs.forEach(logDog);

// 4.36 Callback functions in Action

const ul = document.querySelector(".people");

const people = ["Johan","Jacob","Caroline"];

let html = ``;

people.forEach( person => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

