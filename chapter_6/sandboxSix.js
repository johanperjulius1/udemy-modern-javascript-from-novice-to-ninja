const para = document.querySelector("div.best");
const para_2 = document.querySelector(
  "body > div:nth-child(1) > p:nth-child(3)"
);
const allParas = document.querySelectorAll("p");
console.log(para);
console.log(para_2);
console.log(`här kommer alla p på en och samma gång: ${allParas}`);
console.log(allParas[1]);
allParas.forEach((enparaitaget) => {
  console.log(enparaitaget);
});

const divList = document.querySelectorAll("div");
console.log(divList);

const classBestList = document.querySelectorAll(".best");
console.log(classBestList);

 