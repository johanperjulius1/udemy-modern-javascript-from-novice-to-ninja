// // 3.18 & 19 Control flow & While loops

// for (let i = 0; i < 5; i++) {
//   console.log("in loop :", i);
// }

// console.log('The loop is now finished')

// const names = ["shaun", "mario", "Johnny"];

// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i])
//   let html = `<div>${names[i]}</div>`;
//   console.log(html)
// }

// // 3.20 While loops

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log("in loop :", i);
// }

// const names = ["shaun", "mario", "Johnny"];

//let i=0

// while(i < names.length) {
//   console.log(names[i])
//   i++
// }

// // 3.21 Do While loops


// let i = 10;

//  do {
//   i++;
//   console.log("value of i is currently: ", i);
// } while (i < 5)

// // 3.22 if statement

// let age = 20
// if(age < 100) {
//   console.log("Hi there young one")
// }

// const ninjas = ['Johan', 'Charlie', 'Charlene', 'WolfDogg', 'OverLoard']

// if(ninjas.length >= 5) {
//   console.log('We officially have a ninja clan')
// }

// password = 'Grävlingen'

// if (password.length > 4) {
//   console.log('long enough')
// }

// if (password.length > 4) console.log('long enough')

// // 3.22 Else and else if

password = 'Grävlingen'

if (password.length > 4) {
  console.log('long enough')
} else {
  console.log('not long enough')
}

password = 'Grä'

if (password.length > 4) {
  console.log('long enough')
} else {
  console.log('not long enough')
}

password = 'hejad'

if(password.length < 4) {
  console.log('that password is so weak bruh')
} else if(password.length < 8) {
  console.log('still not enough bruh')
} else {
  console.log("wow bruh, you're a ninja")
}