const todoForm = document.getElementById("todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = "Todos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteList(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function createTodoList(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  span.innerText = newTodo.text;
  button.addEventListener("click", deleteList);
  li.appendChild(button);
  li.appendChild(span);

  todoList.appendChild(li);
}

function handleTodoClick(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  createTodoList(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handleTodoClick);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo !== null) {
  const parseToDos = JSON.parse(savedTodo);
  toDos = parseToDos;
  parseToDos.forEach(createTodoList);
}
