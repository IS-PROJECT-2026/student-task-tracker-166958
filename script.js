const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let tasks = [];

function updateTaskCount() {
    const count = tasks.length;

    taskCount.textContent =
        count === 1 ? "1 task" : `${count} tasks`;
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Task form submitted");

    taskForm.reset();
});

updateTaskCount();