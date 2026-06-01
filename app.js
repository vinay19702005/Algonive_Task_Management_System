const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-card");
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>Assigned To: ${task.assignedTo}</p>
            <p>Due Date: ${task.dueDate}</p>
           <p>Status: ${task.status}</p>
<p>
${
new Date(task.dueDate) < new Date()
? "⚠ Deadline Passed!"
: ""
}
</p>
            <button onclick="deleteTask(${index})">
                Delete
            </button>
            <hr>
        `;

        taskList.appendChild(taskDiv);
    });
}

addTaskBtn.addEventListener("click", () => {

    const title = document.getElementById("taskTitle").value;
    const assignedTo = document.getElementById("assignedTo").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("taskStatus").value;

    const task = {
        title,
        assignedTo,
        dueDate,
        status
    };

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
});

function deleteTask(index) {
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

displayTasks();