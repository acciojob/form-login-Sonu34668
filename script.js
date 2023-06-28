// Get the form element
const myForm = document.getElementById("myForm");

// Define the getFormValue function
function getFormValue(event) {
  event.preventDefault(); // Prevent form submission
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

// Add event listener to the form
myForm.addEventListener("submit", getFormValue);
