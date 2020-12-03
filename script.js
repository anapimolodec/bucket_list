var btn = document.getElementsByTagName("button")[0];
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ul_length = ul.childElementCount;
var li_all = ul.children
var h1 = document.getElementsByTagName("h1")[0];
var delete_btns = document.getElementsByName("trashcan");

//functions for creating buttons
function addButton1(event) {
	event.innerHTML += '<button name="trashcan"> <img src="trashcan.jpg" width = "8px" height = "10px"> </button>';
	}

function addButton2() {
	var delete_btns = document.getElementsByName("trashcan");
	delete_btns[delete_btns.length-1].addEventListener("click", deleteItem, false);
}
//functions for creating new list items
function inputLength() {
	return input.value.length;
}
function createLiElem() {
	var li = document.createElement("li");
	// creating an <li> element with its text (it is appends to <li> as text node)
	li.appendChild(document.createTextNode(input.value));
	//adding <li> item into the list
	ul.appendChild(li);
	input.value = "";
	addButton1(li);
	addButton2();
	ul_length += 1;
	li.addEventListener("click",toggleDone,false);
}

function addLiAfterClick(event) {
	if (inputLength() > 0) {
		createLiElem();
	}
}

function addLiAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createLiElem();
	}
}

//function for toggle
function toggleDone(event) {
	event.target.classList.toggle("done");
}

//function for deleting parent of button (list item)
function deleteItem(event) {
	li_to_go = event.target.closest("li")
	li_to_go.remove();
	console.log(li_to_go);
}	

// enter new item
btn.addEventListener("click",addLiAfterClick);
input.addEventListener("keypress", addLiAfterKeypress);

//mark done items
for (var i = 0; i< ul_length; i++) {
	li_all[i].addEventListener("click",toggleDone,false);
}

//add buttons to existing list
for (var i=0; i< ul_length; i++){
	addButton1(li_all[i]);
	addButton2();
}
//add delete property to existing buttons
for (var i=0; i< delete_btns.length; i++){
	delete_btns[i].addEventListener("click", deleteItem);
}