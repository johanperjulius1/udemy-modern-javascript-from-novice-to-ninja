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

// password = 'Grävlingen'

// if (password.length > 4) {
//   console.log('long enough')
// } else {
//   console.log('not long enough')
// }

// password = 'Grä'

// if (password.length > 4) {
//   console.log('long enough')
// } else {
//   console.log('not long enough')
// }

// password = 'hejad'

// if(password.length < 4) {
//   console.log('that password is so weak bruh')
// } else if(password.length < 8) {
//   console.log('still not enough bruh')
// } else {
//   console.log("wow bruh, you're a ninja")
// }

// // 3.24 logical operators.
// const password = "pissdjkejldej"

// if(password.length >= 12 && password.includes('@')){
//   console.log('hello there')
// } else if(password.length >= 12 || !password.includes('@') && password.length >= 6) {
//   console.log("You're just missing the @ bru")
// } else {
//   console.log('you plainly suck')
// }

// // 3.25 logical NOT operators.

// let user_logged_in =! true;

// if(user_logged_in != true) {
//   console.log("press here to login")
// } else {
//   console.log("You are my logged in favorite")
// }

// let user = false
// if(!user) {
//   console.log("you must log in to continue")
// }

// let user2 = true
// if(user2) {
//   console.log("you must log in to continue")
// }

// console.log(!0)
// console.log(!true)

// // 3.26 Break and continue

// score = [5, 25, 0, 100, 32, 36]

// for (let i = 0; i < score.length; i++) {
//   if(score[i]===0){
//     console.log('beep')
//     continue
//   }

//   console.log(score[i])
//   if(score[i]===100){
//     console.log('Congrats my friend, you reached maximum score so now we stop playing.')
//     break
//   }
// }

// // 3.27 Switch statements

const grade = "B";

switch (grade) {
  case "A":
    console.log("I got an A!");
    break
  case "B":
    console.log("I got a B!");
    break
  case "C":
    console.log("I got a C!");
    break
  case "D":
    console.log("I got a D!");
    break
  case "E":
    console.log("I got an E!");
    break
  default:
    console.log('I got an F')
}
