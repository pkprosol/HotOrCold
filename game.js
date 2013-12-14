$(document).ready(function() {
	$('.messages').hide();
});

//	$('#submit').click(function() {
//		var userGuess = $('#userGuessInput').val();
//		var random = Math.floor(Math.random()*100);
//		game(parseInt(userGuess,10), random);
//	});


/*var game = function(userGuess, random)
{
	console.log(typeof userGuess + " " + typeof random);
	if (userGuess === random) {
		$('#win').show();
		return;
	} else if (Math.abs(userGuess - random) < 30) {
		$('#hot').show();
	} else {
		$('#cold').show();
	}
	$('#userGuessInput').val("");
	var previousGuess = userGuess;
	
	$('#submit').click(function() {
		userGuess = $('#userGuessInput').val();
		$('.messages').hide();
//		repeatGame(parseInt(userGuess,10), random, previousGuess);
};


var repeatGame = function(userGuess, random, previousGuess) 
{
	if (userGuess,10) === random) {
		$('#win').show();
		return;
	} else if (Math.abs(userGuess - random) < Math.abs(previousGuess - random)) {
		$('#hotter').show();
	} else if (Math.abs(userGuess - random) === Math.abs(previousGuess - random)) {
		$('#same distance').show();
	} else {
		$('#colder').show();
	}
	var previousGuess = userGuess;
	$('.messages').hide();
	userGuess = $('#userGuessInput').val();
	repeatGame(parseInt(userGuess,10), random, previousGuess);
};

