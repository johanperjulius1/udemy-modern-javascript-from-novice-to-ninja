const correctAnswers = ["A", "B"];
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", (e) => {
  console.log(form.q1.value);
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 50;
    }
  });
  const result = document.querySelector(".result");
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score} %`;
  result.classList.remove("d-none");

  let percentageCounter = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${score}`;
    if (percentageCounter === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
