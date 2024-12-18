// Get references to the form and task list
const taskForm = document.getElementById("create-task-form");
const taskInput = document.getElementById("new-task-description");
const taskList = document.getElementById("tasks");

// Add event listener to the form
taskForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input value
  const taskDescription = taskInput.value;

  // Only add the task if the input is not empty
  if (taskDescription.trim() !== "") {
    // Create a new list item (li)
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Add a delete button to the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function () {
      newTask.remove(); // Remove the task when delete button is clicked
    });

    // Append the delete button to the task
    newTask.appendChild(deleteButton);

    // Append the task to the task list
    taskList.appendChild(newTask);

    // Clear the input field
    taskInput.value = "";
  }
});
