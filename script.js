function addTask() {

const input = document.getElementById("task");
const list = document.getElementById("list");
const li = document.createElement("li");
li.textContent = input.value;
list.appendChild(li);
input.value = "";

} 