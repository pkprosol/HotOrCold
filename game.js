var gameCallNumber = 0;

$(document).ready(function() {
	$('.messages').hide();

	$('#submit').click(function() {
		var userGuess = $('#userGuessInput').val();
		var random = Math.floor(Math.random()*100);
		console.log("Original submit works");
		game(parseInt(userGuess,10), random, "", gameCallNumber);
	});
});



var game = function(userGuess, random, previousGuess, gameCallNumber)
{
	console.log("Typeof GameCallNumber: " + typeof gameCallNumber)
	gameCallNumber = gameCallNumber + 1;

	console.log("This is call to game function number: " + gameCallNumber);
	console.log("Current User Guess is: " + userGuess);
	console.log("Previous Guess = " + previousGuess);
	console.log("Previous guess is type " + typeof previousGuess);
	console.log("IsNaN(previousGuess) = " + isNaN(previousGuess));	

	if (userGuess === random) {
		$('#win').show();	
		return;
	} else if (previousGuess === "") {
		if (Math.abs(userGuess - random) < 30) {
			$('#hot').show();
		} else {
			$('#cold').show();
		}
	} else if (Math.abs(userGuess - random) < Math.abs(previousGuess - random)) {
		$('#hotter').show();
	} else if (Math.abs(userGuess - random) === Math.abs(previousGuess - random)) {
		$('#same distance').show();
	} else {
		$('#colder').show();
	} 

	console.log("Now user guess is: " + userGuess + " and random = " + random);

	var previousGuess = userGuess;
};


