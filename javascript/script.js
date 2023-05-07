document.querySelector(".entryPoint").addEventListener("submit", formSubmit);

const arr = JSON.parse(localStorage.getItem("todoList")) || [];

function formSubmit(event) {
    event.preventDefault();
    const task = document.querySelector(".task").value;
    const priority  = document.querySelector(".priority").value;

    const todoObj = {
        todoTask: task,
        todoPrio: priority
    }
    arr.push(todoObj);
    localStorage.setItem("todoList", JSON.stringify(arr));
}

/************** For Updating *********/

const data = JSON.parse(localStorage.getItem("todoList"));
const completed = JSON.parse(localStorage.getItem("completedTodo")) || [];

data.map(function(element, index) {
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.innerText = element.todoTask;

    const col2 = document.createElement("td");
    col2.innerText = element.todoPrio;

    const col3 = document.createElement("button");
    col3.innerText = "Mark as Complete";

    col3.addEventListener("click", function(){
        markComplete(element);
    });

    row.append(col1, col2, col3);
    document.querySelector(".tbody").append(row);
});

function markComplete(element) {
    completed.push(element);
    localStorage.setItem("completedTodos", JSON.stringify(completed));
}

/*********** For Marking Completed */

const completedTask = JSON.parse(localStorage.getItem("completedTodos"));

completedTask.map(function(element, index) {
    const completedRow = document.createElement("tr");

    const completedCol1 = document.createElement("td");
    completedCol1.innerText = element.todoTask;

    const completedCol2 = document.createElement("td");
    completedCol2.innerText = element.todoPrio;

    const completeCol3 = document.createElement("button");
    completeCol3.innerText = "Mark as Incomplete";

    completedRow.append(completedCol1, completedCol2, completeCol3);
    document.querySelector(".completedTBody").append(completedRow)
});
