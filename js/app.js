$(document).ready(function() {

	for (var i = 1; i < 101; i++) {
  		var output = getFizzBuzz(i);
		appendToFizz(output);
	}

})
	

function getFizzBuzz(numberToTest) {
	
	if (numberToTest % 3 === 0 && numberToTest % 5 === 0) {
		return 'FizzBuzz';
	}
	else if (numberToTest % 3 === 0) {
		return 'Fizz';
	}
	else if (numberToTest % 5 === 0) {
		return 'Buzz';
	} 
	else {
		return numberToTest;
	}
	
}

function appendToFizz(content) {
	$('.fizz').append('<p>' + content + '</p>');
}

