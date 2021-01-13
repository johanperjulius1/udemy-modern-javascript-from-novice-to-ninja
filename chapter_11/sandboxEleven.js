// // 11.82 Dates & Times in JavaScript

// const now = new Date();

// console.log("Här kommer nu:", now);
// console.log(typeof now);

// const monthsOfYear = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// // year, months, day, times
// console.log("Här kommer helår: ", now.getFullYear());
// console.log("Här kommer innevarande månad: ", monthsOfYear[now.getMonth()]);
// console.log("Här kommer dagens veckodag: ", daysOfWeek[now.getDay()]);
// console.log("Här kommer innevarande klockslag för timme: ", now.getHours());

// // timestamp
// console.log("timestamp: ", now.getTime());

// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleString());

// // 11.83 Timestamps & Comparisons

// const before = new Date("July 10 1994 17:12:00");
// const now = new Date();

// console.log(now.getTime(), before.getTime());
// const ageInMilliseconds = now.getTime() - before.getTime();
// const ageInSeconds = Math.round(ageInMilliseconds / 1000);
// const ageInMins = Math.round(ageInSeconds / 60);
// const ageInHours = Math.round(ageInMins / 60);
// const ageInDays = Math.round(ageInHours / 24);
// const ageInYears = Math.round(ageInDays / 365);

// const superstar = console.log("This SUPERSTAR was born ", ageInYears, " ago");
// const timestamp = 773853120000;
// console.log(new Date(timestamp));

// // 11.84 Building & Digital clock

// const now = new Date();
// let clock = () => { document.querySelector(".clock").innerHTML= now;}
// setInterval(clock(), 1000);

const clock = document.querySelector(".clock");

const tick = () => {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    `
    clock.innerHTML = html
};

setInterval(tick, 1000)