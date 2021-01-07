const ul = document.querySelector("ul");
const addForm = document.querySelector(".add");
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item" d-flex justify-content-between align-items-center>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  ul.innerHTML += html;
};

const store = () => {
  window.localStorage.myitems = ul.innerHTML;
};

const getValues = () => {
  const storedValues = window.localStorage.myitems;
  if (storedValues) {
    ul.innerHTML = storedValues;
  }
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

getValues();

const filterTodos = (term) => {
  Array.from(ul.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(ul.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
