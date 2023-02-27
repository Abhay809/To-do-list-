// Define variables
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Define array to store tasks
let tasks = [];

// Load saved tasks from local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  displayTasks();
}

// Add task when user clicks Add button
addButton.addEventListener("click", function() {
  if (taskInput.value.trim() !== "") {
    tasks.push({ text: taskInput.value, completed: false });
    taskInput.value = "";
    displayTasks();
    saveTasks();
  }
});

// Toggle task completion when user clicks task item
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    const taskIndex = event.target.dataset.index;
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    displayTasks();
    saveTasks();
  }
});

// Delete task when user clicks Delete button
taskList.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    const taskIndex = event.target.parentElement.dataset.index;
    tasks.splice(taskIndex, 1);
    displayTasks();
    saveTasks();
  }
});

// Display tasks in the task list
function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach(function(task, index) {
    const li = document.createElement("li");
    li.innerText = task.text;
    li.dataset.index = index;
    if (task.completed) {
      li.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });

  function predict() {
    // Get user inputs
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
  
    // Process inputs using machine learning model
    var prediction = your_machine_learning_function(input1, input2);
  
    // Display results to user
    document.getElementById("result").innerHTML = prediction;
  }
  

}

// Save tasks to local
