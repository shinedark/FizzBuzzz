$(document).ready(function() {

	// respond to submit
	$(".userInput > button").on("click", function(evt) {
		evt.preventDefault();

		clearFizz();

		var userInput = $(".userInput > input").val();

		var userInputNumber = Number(userInput);

		if (isNaN(userInputNumber)) {
			alert('you had one job... this is not a valid number');
			return;
		}

		// test for decimal 
		if (userInputNumber % 1 !== 0) {
			alert('you had one job... decimals are not allowed');
			return;
		}

		if (userInputNumber > 100000) {
			alert('you had one job... are you kidding me? Number too big! have fun with the long wait');
			// return;
		}

		doFizzBuzz(userInputNumber);
	});
});

// function to run fizzbuzz
// will call: `getFizzBuzz` and `appendToFizz`
// should accept a argument to determine how high to loop

function doFizzBuzz(numberToCountTo) {
	for (var i = 1; i <= numberToCountTo; i++) {
  		var output = getFizzBuzz(i);
		appendToFizz(output);
	}
}

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

function clearFizz() {
	$('.fizz').empty();
}

  

