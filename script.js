const input = document.getElementById("task");

function addTask() {

const list = document.getElementById("list");
if (input.value === "") return;
const li = document.createElement("li");

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.onchange = function() {
li.style.textDecoration = checkbox.checked ? "line-through" : "none";
};

const span = document.createElement("span");
span.textContent = input.value;
li.appendChild(checkbox);
li.appendChild(span);
list.appendChild(li);
input.value = "";
}

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

