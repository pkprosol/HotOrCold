$(document).ready(function() {
	
	$('.messages, #notice, #tracking').hide();

	var gameCallNumber = 0;
	var previousGuess = "";
	var random = 0;
	var totalScore = 0;
	var winState = 0;

	function makeRandom () {
		random = Math.floor(Math.random()*100) + 1;
		console.log("Random function ran and output is: " + random);	
	}

	function newGame () {
		$('.messages, #notice, #tracking').hide();
		makeRandom();
		gameCallNumber = 0;
		previousGuess = "";
		winState = 0;
	}

	newGame();
	
	$('#submit').click(function() {
		if (winState === 1) {
			newGame();
		}
		var userGuess = $('#userGuessInput').val();
		$('.messages').hide();
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
			totalScore = totalScore + 1000000;
			winState = 1;
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
			$('#same_distance').show();
		} else {
			$('#colder').show();
		} 

		if (previousGuess !== "") {
			console.log("There is a previous guess");
			$('#notice').html("Current guess: " + userGuess + "<br>Previous guess: " + previousGuess).show();
		}
		
		$('#tracking').html("You have guessed " + gameCallNumber + " times.").show();	

		console.log("Now user guess is: " + userGuess + " and random = " + randomNum);

		previousGuess = parseInt(userGuess,10);
		console.log("End of statement previous: " + previousGuess);

	}; 

	$('#NewGame').click(function () {
		newGame();
	});

	$('#TotalScore').click(function () {
		$('.messages, #tracking').hide();
		console.log("Total score function clicked");
		$('#notice').html("Your total score is: " + totalScore + ".<br>").show();

	});
});

