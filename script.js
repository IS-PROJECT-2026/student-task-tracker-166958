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

        if (task.completed) {
            taskCard.classList.add("completed");
        }

        taskCard.innerHTML = `
            <h3>${task.title}</h3>

            <p>
                <strong>Subject:</strong>
                ${task.subject}
            </p>

            <p>
                <strong>Due:</strong>
                ${task.dueDate}
            </p>

            <p>
                <strong>Priority:</strong>
                ${task.priority}
            </p>

            <div class="task-actions">

                <button
                    class="complete-button"
                    data-id="${task.id}"
                >
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    class="delete-button"
                    data-id="${task.id}"
                >
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskCard);
    });

    updateTaskCount();
}

taskList.addEventListener("click", function (event) {
    const taskId = Number(event.target.dataset.id);

    if (!taskId) {
        return;
    }

    if (event.target.classList.contains("complete-button")) {
        toggleTaskCompletion(taskId);
    }

    if (event.target.classList.contains("delete-button")) {
        deleteTask(taskId);
    }
});

function toggleTaskCompletion(taskId) {
    tasks = tasks.map(function (task) {
        if (task.id === taskId) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });

    renderTasks();
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