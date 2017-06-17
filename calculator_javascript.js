
/* javascript */


// style functions

$(document).ready(function(){

	// changes the background of the calculator based on user interaction (pressing the color button)
	$('.color-button').click(function(){
		document.getElementById('calculator').style.backgroundColor = this.value;
	});

	// assigns each color button its value as a background color
	// ToDo: figure out how to do it globally for all buttons instead of one by one
	document.getElementById('button-white').style.backgroundColor = document.getElementById('button-white').value;
	document.getElementById('button-red').style.backgroundColor = document.getElementById('button-red').value;
	document.getElementById('button-green').style.backgroundColor = document.getElementById('button-green').value;
	document.getElementById('button-yellow').style.backgroundColor = document.getElementById('button-yellow').value;
	document.getElementById('button-blue').style.backgroundColor = document.getElementById('button-blue').value;
	
});
	



//---------------------------------------------------------------------------------------------------

// actual calculator functions


// output starts with 0
var outputText = 0;

// variable is true if the last pressed button is '='
var lastEqual = false;


// main function
function calculate() {

// show the output in the output field
$('#output').text(outputText);

// when a button is clicked:
$('.button').click(function(){
	buttonPress(this);
	return outputText;
	return lastEqual;
});

// function that handles button clicks
function buttonPress(soleButton) {

	// if the = button is pressed, jump to the equal function
	if(soleButton.innerHTML === '=') {
		buttonEquals();
	}

	// if the delete button is clicked, reset everything
	else if(soleButton.innerHTML === 'del'){
		outputText = 0;
		$('#output').text(outputText);
		return outputText;
	}

	// if any other button is clicked
	else {

		// use the check function to see if any special actions are required
		checkButton(soleButton);

		// then append the output with the just pressed button
		outputText = outputText + soleButton.value;
		$('#output').text(outputText);

		return outputText;
	}
}

// calculate the correct output aka Do The Math
function buttonEquals() {
	// calculate the output
	var finalOutput = eval(outputText);
	// show the final output in the output field
	outputText = finalOutput
	$('#output').text(outputText);
	// set lastEqual true since the last clicked button was the equal button
	lastEqual = true;

	return outputText;
	return lastEqual;
}

// checks the clicked button for any necessary special action
function checkButton(soleButton) {

	// ----------------------    actions based on the last button that was pressed --------------------------------------

	// if the last pressed button was the equal button and a number is clicked reset the calculator, so a new calculation can begin
	if(lastEqual &&!(soleButton.value === '/' || soleButton.value === '*' || soleButton.value === '+' || soleButton.value === '-')) {
		outputText = 0;
		lastEqual = false;
	}

	// if the last pressed button was the equal button and an operator button is pressed, continue calculations with the result of the last calculation
	else if(lastEqual &&(soleButton.value === '+' || soleButton.value === '-' || soleButton.value === '/' || soleButton.value === '*')) {
	 	lastEqual = false;
	}

	// if the last pressed button wasn't the equal button, no special actions are required
	else {

	}
	
	//---------------------------------------------------------------------------------

	// if the current output is 0 and a number is pressed, delete the 0 and instead put the just clicked number (solely for optical reasons)
	if(outputText === 0 && lastEqual === false &&!(soleButton.value === '/' || soleButton.value === '*' || soleButton.value === '+' || soleButton.value === '-'|| soleButton.value === '.')) {
		outputText = '';
	}
	
	// if the current output is not 0, no special actions are required
	else {

	}

	return outputText;
	return lastEqual;
}

}


calculate();
