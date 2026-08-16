const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

const filterButtons = document.querySelectorAll(".filter-button");

const totalTasks = document.getElementById("total-tasks");
const completedTasks = document.getElementById("completed-tasks");
const pendingTasks = document.getElementById("pending-tasks");
const progressPercentage =
    document.getElementById("progress-percentage");
const progressBar =
    document.getElementById("progress-bar");

let tasks = [];
let currentFilter = "all";

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
    updateProgress();

    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function (task) {
        if (currentFilter === "completed") {
            return task.completed;
        }

        if (currentFilter === "pending") {
            return !task.completed;
        }

        return true;
    });

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p>No tasks found.</p>
            </div>
        `;

        updateTaskCount();
        return;
    }

    filteredTasks.forEach(function (task) {
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

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});

function updateProgress() {
    const total = tasks.length;

    const completed = tasks.filter(function (task) {
        return task.completed;
    }).length;

    const pending = total - completed;

    const percentage =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
    progressPercentage.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;
}

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