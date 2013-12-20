$(document).ready(function() {
	$('.messages').hide();

	$('#submit').click(function() {
		var userGuess = $('#userGuessInput').val();
		var random = Math.floor(Math.random()*100);
		console.log("Original submit works");
		game(parseInt(userGuess,10), random, "");
	});
});



var game = function(userGuess, random, previousGuess)
{
	console.log(userGuess);
	console.log(isNaN(previousGuess));

	if (userGuess === random) {
		$('#win').show();	
		return;
	} else if (isNaN(previousGuess)) {
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

	console.log(userGuess + " " + random);

	var previousGuess = userGuess;
	$('.messages').hide();

	$('#submit').click(function() {	
		userGuess = $('#userGuessInput').val();
		game(parseInt(userGuess,10), random, previousGuess);
	});
};


