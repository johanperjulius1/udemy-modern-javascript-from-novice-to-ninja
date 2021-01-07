// // 11.82 Dates & Times in JavaScript

const now = new Date();

console.log("Här kommer nu:", now);
console.log(typeof now);

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// year, months, day, times
console.log("Här kommer helår: ", now.getFullYear());
console.log("Här kommer innevarande månad: ", monthsOfYear[now.getMonth()]);
console.log("Här kommer dagens veckodag: ", daysOfWeek[now.getDay()]);
console.log("Här kommer innevarande klockslag för timme: ", now.getHours());

// timestamp
console.log("timestamp: ", now.getTime());

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleString());
