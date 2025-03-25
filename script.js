// Selecting the input field and list container
const inputBox = document.getElementById("input-box"); // Gets the input field element
const listContainer = document.getElementById("list-container"); // Gets the list container element


// Function to add a new task to the list
function addTask() {
  if (inputBox.value === '') { 
    alert("You must write something!"); // Displays an alert if the input field is empty
  } else {
    let li = document.createElement("li"); // Creates a new "li" element
    li.innerHTML = inputBox.value; // Sets the text of the "li" to the entered input value
    listContainer.appendChild(li); // Appends the "li" element to the list container

    let span = document.createElement("span"); // Creates a "span" element
    span.innerHTML = "\u00d7"; // Sets the span content to a "×" symbol (delete button)
    li.appendChild(span); // Appends(add) the "span" element to the "li"
  }

  inputBox.value = ""; // Clears the input field after adding the task
  saveData(); // Calls the function to save data in local storage, whenever a new task is added this saveData is called & saves it.
}





// Event listener for checking/unchecking tasks and deleting tasks
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") { 
    e.target.classList.toggle("checked"); // Toggles the "checked" class on the clicked list item
    //toggling means adding the class as 'checked' and removing 
    saveData(); // Saves the updated list state(saveData if we check or uncheck a task)
  } else if (e.target.tagName === "SPAN") { 
    e.target.parentElement.remove(); // Removes the parent "li" when the "×" button (span) is clicked
    saveData(); // Saves the updated list state(saveData even when we delete the task)
  }
}, false);

// Function to save the task list data in local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Stores the inner HTML of the list container
  //here "data" is the name and listContainer.innerHTML is the value that is to be saved in the browser
}

// Function to display the saved tasks from local storage when the page loads
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); // Retrieves the saved list data and displays it
}

showTask(); // Calls the function to load saved tasks when the page loads

