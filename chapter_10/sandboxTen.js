const ul = document.querySelector("ul");
const addForm = document.querySelector(".add");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item" d-flex justify-content-between align-items-center>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  ul.innerHTML += html;
};

let store = () => {
  window.localStorage.myitems = ul.innerHTML;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.addItem.value.trim();
  if (todo.length > 1) {
    generateTemplate(todo);
    store();
    addForm.reset();
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
    store();
  }
});

let getValues = () => {
  let storedValues = window.localStorage.myitems;
  if (storedValues) {
    ul.innerHTML = storedValues;
  }
};
getValues();
