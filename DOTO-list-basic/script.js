// Declaring variables
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

// Function that determines the value of the text in the input box
function inputLength() {
	return input.value.length;
}

// Function that creates the list elements that contains text based on the input.value
function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// Function that calls the createListElement() function after user clicks the button
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Function that calls the createListElement() function after user presses the Enter key
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Function calls on the events
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
