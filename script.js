// const form1 = document.getElementById("form1");
function getFormvalue() {
    //Write your code here
	event.preventDefault();
	let firstName = document.getElementById("fname").value;
	let lastName = document.getElementById("lname").value;
	alert("First Name: "+ fname + "\nLast Name: " + lname);
}
// form1.addEventListener("submit", getFormvalue);