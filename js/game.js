// (function(){
	
// })()



var numArray = [];
window.onload = function() {
	var number = Math.floor(Math.random() * (101 - 1)) + 1;
	document.getElementById('rand_number').innerHTML = number;
	numArray.push(number);
}

document.getElementById('person_number').onkeydown = function(e){
   if(e.keyCode == 13){
     compareNumbers();
     cleanInput();
   }
}; 

function randomNumber() {
	var number = Math.floor(Math.random() * (101 - 1)) + 1;
	numArray.push(number);
	document.getElementById('rand_number').innerHTML = number;
	document.getElementById('person_number').removeAttribute("disabled");
	document.getElementById('submit_answer').removeAttribute("disabled");
}

function compareNumbers() {
	var x = document.getElementById('person_number').value;
	if (x == numArray[numArray.length - 2]) {
		randomNumber();
	} else {
		location.reload();
	}
}

function cleanInput() {
	document.getElementById("person_number").value = "";
}