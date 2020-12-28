// const para = document.querySelector("div.best");
// const para_2 = document.querySelector(
//   "body > div:nth-child(1) > p:nth-child(3)"
// );
// const allParas = document.querySelectorAll("p");
// console.log(para);
// console.log(para_2);
// console.log(`här kommer alla p på en och samma gång: ${allParas}`);
// console.log(allParas[1]);
// allParas.forEach((enparaitaget) => {
//   console.log(enparaitaget);
// });

// const divList = document.querySelectorAll("div");
// console.log(divList);

// const classBestList = document.querySelectorAll(".best");
// console.log(classBestList);

// //6.47

// const title = document.getElementById("page-headline");
// console.log(title);

// const divList2 = document.getElementsByClassName("best");
// console.log(divList2);

// const tags = document.getElementsByTagName("p");
// console.log(tags);
// console.log(tags[1]);

// // 6.48
// const appar = document.querySelector("p");
// console.log(appar.innerText);
// appar.innerText = "Jag älskar min farsa!!";
// console.log(appar.innerText);
// const apparna = document.querySelectorAll("div");

// apparna.forEach((apor) => {
//   console.log(apor.innerHTML);
// });

// appar.innerHTML+= "<h1>Jag älskar min farsa!!</h2>";

// const div = document.querySelector("div");

// myGirls = ['Anna', 'Lisa', 'Therese'];

// myGirls.forEach((girl) => {
//   div.innerHTML += `<p>${girl}</p>`;
// });
//---------------------------------------------------------
// // 6.49

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute('href', 'https://www.codecademy.com/')
// link.innerText = 'Codeacademy.com'

// const msg = document.querySelector('p')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('class', 'johan')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('style', 'color: pink')

//---------------------------------------------------------

// // 6.50

// const title = document.querySelector("h1");
// title.setAttribute("style", "background-color: black");
// console.log(title.style);
// title.style.color = "orange";
// title.style.margin="50px"
//---------------------------------------------------------

// // 6.51 Adding and removing classes

const content = document.querySelector('p')
console.log(content.classList)
content.classList.add('new')
content.classList.remove('new')
content.classList.add('old')