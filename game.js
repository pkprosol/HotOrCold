$(document).ready(function() {
	$('.messages').hide();

	var gameCallNumber = 0;
	var previousGuess = "";
	var random = Math.floor(Math.random()*100);

	$('#submit').click(function() {
		var userGuess = $('#userGuessInput').val();
		game(parseInt(userGuess,10), random, previousGuess);
	});

	var game = function(userGuess, randomNum, previousGuessArg)
	{
		console.log("Typeof GameCallNumber: " + typeof gameCallNumber)
		gameCallNumber = gameCallNumber + 1;

		console.log("This is call to game function number: " + gameCallNumber);
		console.log("Current User Guess is: " + userGuess);
		console.log("Previous Guess = " + previousGuess);
		console.log("Previous guess is type " + typeof previousGuess);

		if (userGuess === randomNum) {
			$('#win').show();	
			return;
		} else if (previousGuess === "") {
			if (Math.abs(userGuess - randomNum) < 30) {
				$('#hot').show();
			} else {
				$('#cold').show();
			}
		} else if (Math.abs(userGuess - randomNum) < Math.abs(previousGuess - randomNum)) {
			$('#hotter').show();
		} else if (Math.abs(userGuess - randomNum) === Math.abs(previousGuess - randomNum)) {
			$('#same distance').show();
		} else {
			$('#colder').show();
		} 

		console.log("Now user guess is: " + userGuess + " and random = " + randomNum);

		previousGuess = parseInt(userGuess,10);
		console.log("End of statement previous: " + previousGuess);
	};
});

