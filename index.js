var inputArray = [];
var numArray = []
var you_number;

window.onload = function() {
	var number = Math.floor(Math.random() * (100 - 10)) + 10;
	numArray.push(number);
	document.getElementById('rand_number').innerHTML = number;
}

function randNumber() {
	var num = Math.floor(Math.random() * (100 - 10)) + 10;
	numArray.push(num);
	document.getElementById('rand_number').innerHTML = num;
}

document.onkeydown = function(e) {
	var key = e.charCode || e.keyCode || 0;
	var input_number = String.fromCharCode(e.keyCode);
	if((key >= 48 && key <= 57) || (key >= 96 && key <= 105)) {
		if(inputArray.length < 2) {
			inputArray.push(input_number);
			you_number = inputArray[0];
			document.getElementById('rand_number').innerHTML = you_number;
		}
		if (inputArray.length == 2) {
			you_number = you_number.concat(inputArray[1]);
			document.getElementById('rand_number').innerHTML = you_number;
			inputArray.length = [];
		}
	}
	if(you_number >= 10 && you_number <= 99) {
		compareNumbers();
	}
}

function compareNumbers() {
	if(you_number == numArray[numArray.length - 2]) {
		randNumber();
	}
	else {
		alert("Lose");
	}
	
}
