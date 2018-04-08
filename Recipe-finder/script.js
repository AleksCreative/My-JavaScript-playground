// Declaring variables
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
const ul = document.getElementById("shop-list");

// Function that determines the value of the text in the input box
function inputLength() {
	return input.value.length;
}

// Function that creates the list elements that contains text based on the input.value
function createListElement() {
	let li = document.createElement("li");
	li.setAttribute("class", "list-item");

	let tickBox = document.createElement("input");
	tickBox.setAttribute("type", "checkbox");
	tickBox.setAttribute("class", "tick-box")

	let clearButton = document.createElement("button");
	clearButton.setAttribute("class", "clear-button");
	clearButton.textContent = "Remove item";

	li.appendChild(tickBox);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(clearButton);

	ul.appendChild(li);
	ul.insertBefore(li, ul.childNodes[0]);

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
