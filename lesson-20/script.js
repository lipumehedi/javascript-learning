// ========================================
// JavaScript Day 20
// Developer Task Manager
// ========================================

// 1. Select HTML elements

const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const message = document.querySelector("#message");

const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const remainingTasks = document.querySelector("#remainingTasks");

const clearCompletedButton =
    document.querySelector("#clearCompleted");


// 2. Load tasks from Local Storage

function loadTasks() {
    try {
        const savedTasks = localStorage.getItem("developerTasks");
        const parsedTasks = JSON.parse(savedTasks || "[]");

        if (
            Array.isArray(parsedTasks) &&
            parsedTasks.every(
                task =>
                    task !== null &&
                    typeof task === "object" &&
                    typeof task.id === "string" &&
                    typeof task.text === "string" &&
                    typeof task.completed === "boolean"
            )
        ) {
            return parsedTasks;
        }
    } catch (error) {
        console.error("Could not load saved tasks:", error);
    }

    return [];
}

let tasks = loadTasks();


// 3. Save tasks

function saveTasks() {
    try {
        localStorage.setItem(
            "developerTasks",
            JSON.stringify(tasks)
        );
        return true;
    } catch (error) {
        console.error("Could not save tasks:", error);
        message.textContent = "Could not save tasks in this browser.";
        return false;
    }
}


// 4. Update task statistics

function updateStats() {
    const completed = tasks.filter(task => task.completed).length;

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = completed;
    remainingTasks.textContent = tasks.length - completed;
}


// 5. Display tasks

function displayTasks() {
    taskList.replaceChildren();

    if (tasks.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No tasks yet. Add your first task!";
        taskList.appendChild(emptyMessage);
    }

    tasks.forEach(function (task) {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute(
            "aria-label",
            `Mark ${task.text} as completed`
        );

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;

            if (saveTasks()) {
                displayTasks();
            }
        });

        const span = document.createElement("span");
        span.className = "task-text";
        span.textContent = task.text;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            const previousTasks = tasks;

            tasks = tasks.filter(item => item.id !== task.id);

            if (saveTasks()) {
                displayTasks();
                message.textContent = "Task deleted.";
            } else {
                tasks = previousTasks;
                displayTasks();
            }
        });

        li.append(checkbox, span, deleteButton);
        taskList.appendChild(li);
    });

    updateStats();
}


// 6. Add a task

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    const newTask = {
        id: crypto.randomUUID(),
        text: text,
        completed: false
    };

    tasks.push(newTask);

    if (!saveTasks()) {
        tasks.pop();
        return;
    }

    taskInput.value = "";
    message.textContent = "Task added successfully!";

    displayTasks();
    taskInput.focus();
});


// 7. Clear completed tasks

clearCompletedButton.addEventListener("click", function () {
    const previousTasks = tasks;

    tasks = tasks.filter(task => !task.completed);

    if (!saveTasks()) {
        tasks = previousTasks;
        displayTasks();
        return;
    }

    message.textContent = "Completed tasks cleared.";
    displayTasks();
});


// 8. Initial display

displayTasks();