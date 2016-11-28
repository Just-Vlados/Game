window.onload = function() {
	var number = Math.floor(Math.random() * (100 - 10)) + 10;
	document.getElementById('rand_number').innerHTML = number;
	//$("#rand_number").innerHTML = number;
}

function randNumber() {
	var number = Math.floor(Math.random() * (100 - 10)) + 10;
	document.getElementById('rand_number').innerHTML = number;
}

document.onkeydown = function(e) {
	var array = [];
	var you_number;
	var key = e.charCode || e.keyCode || 0;
	var input_number = String.fromCharCode(e.keyCode);
	if((key >= 48 && key <= 57)) {
		while(array.length < 2) {
			array.push(input_number);
		}
		you_number = array[0].concat(array[1]);
	}
	document.getElementById('rand_number').innerHTML = you_number;
}
