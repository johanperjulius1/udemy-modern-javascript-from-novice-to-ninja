// 7.59 Submit events

// const form = document.querySelector(".signup-form");
// const username = document.querySelector('#username')

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(username.value)
//   console.log(form.username.value)
// });

// // 7.61 Testing regex patterns

// const form = document.querySelector(".signup-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(form.username.value);
// });

// testing Regex
// const username = "@_shaunp_";
// const pattern = /[a-z]{6,}/;

// let result = pattern.test(username);
// console.log(result);

// if (result) {
//   console.log("regex test passed :)");
// } else{
//   console.log('regex test failed :(')
// }

// let result = username.search(pattern);
// console.log(result);

// // Keyboard Events 7.63

const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  let result = usernamePattern.test(username);
  if (result) {
    feedback.textContent = "username is great";
  } else {
    feedback.textContent = "username needs to be changed";
  }
});

form.username.addEventListener("keyup", (e) => {
  console.log(e);
  const username = e.target.value;
  let result = usernamePattern.test(username);
  if (result) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "failure");
  }
});
