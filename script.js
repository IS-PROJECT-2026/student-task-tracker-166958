const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

let tasks = [];

function updateTaskCount() {
    const count = tasks.length;

    taskCount.textContent =
        count === 1 ? "1 task" : `${count} tasks`;
}

function createTask(title, subject, dueDate, priority) {
    const task = {
        id: Date.now(),
        title: title,
        subject: subject,
        dueDate: dueDate,
        priority: priority,
        completed: false
    };

    tasks.push(task);

    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p>No tasks yet. Add your first task above.</p>
            </div>
        `;

        updateTaskCount();
        return;
    }

    tasks.forEach(function (task) {
        const taskCard = document.createElement("article");

        taskCard.className = "task-card";

        taskCard.innerHTML = `
            <h3>${task.title}</h3>
            <p><strong>Subject:</strong> ${task.subject}</p>
            <p><strong>Due:</strong> ${task.dueDate}</p>
            <p><strong>Priority:</strong> ${task.priority}</p>
        `;

        taskList.appendChild(taskCard);
    });

    updateTaskCount();
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("task-title").value.trim();
    const subject = document.getElementById("task-subject").value.trim();
    const dueDate = document.getElementById("task-date").value;
    const priority = document.getElementById("task-priority").value;

    if (!title || !subject || !dueDate) {
        return;
    }

    createTask(title, subject, dueDate, priority);

    taskForm.reset();
});

renderTasks();