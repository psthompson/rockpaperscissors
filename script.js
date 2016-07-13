// Game Variables
var options = ['r','p','s'];
var wins = 0, losses = 0, ties = 0;

// Clear results
document.getElementById("winner").style.display = "none";
document.getElementById("loser").style.display = "none";
document.getElementById("tie").style.display = "none";

document.onkeyup = function(event) {

	// User Choice
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	// Randomized Computer Choice
	var computerChoice = options[Math.floor(Math.random()*options.length)];
	console.log("Computer Chooses: " + computerChoice);

// Rules of the Game
	    if(userChoice === computerChoice) {
	        console.log("It's a tie!");
					ties++;
					document.getElementById("tie").innerHTML = "It's A Tie.";
					document.getElementById("winner").style.display = "none";
					document.getElementById("loser").style.display = "none";
					document.getElementById("tie").style.display = "block";
	    }
	    else if(userChoice === 'r') {
	        if(computerChoice === 's') {
	            console.log('You win!');
							wins++;
							document.getElementById("winner").innerHTML = "YOU WIN!";
							document.getElementById("winner").style.display = "block";
				      document.getElementById("loser").style.display = "none";
				      document.getElementById("tie").style.display = "none";
	        }
	        else {
	            console.log('Computer wins!');
							losses++;
							document.getElementById("loser").innerHTML = "Computer Wins.";
							document.getElementById("winner").style.display = "none";
				      document.getElementById("loser").style.display = "block";
				      document.getElementById("tie").style.display = "none";
	        }
	    }
	    else if(userChoice === 'p') {
	        if(computerChoice === 'r') {
	            console.log('You win!');
							wins++;
							document.getElementById("winner").innerHTML = "YOU WIN!";
							document.getElementById("winner").style.display = "block";
				      document.getElementById("loser").style.display = "none";
				      document.getElementById("tie").style.display = "none";
	        }
	        else {
	            console.log('Computer wins!');
							losses++
							document.getElementById("loser").innerHTML = "Computer Wins.";
							document.getElementById("winner").style.display = "none";
				      document.getElementById("loser").style.display = "block";
				      document.getElementById("tie").style.display = "none";
	        }
	    }
	    else if(userChoice === 's') {
	        if(computerChoice === 'r') {
	            console.log('Computer wins!');
							losses++
							document.getElementById("loser").innerHTML = "Computer Wins.";
							document.getElementById("winner").style.display = "none";
				      document.getElementById("loser").style.display = "block";
				      document.getElementById("tie").style.display = "none";
	        }
	        else {
	            console.log('You win!');
							wins++;
							document.getElementById("winner").innerHTML = "YOU WIN!";
							document.getElementById("winner").style.display = "block";
				      document.getElementById("loser").style.display = "none";
				      document.getElementById("tie").style.display = "none";
	        }
	    }

			// if (userWins = true) {
			// 	document.getElementById("winner").innerHTML = "YOU WIN!";
			// 	document.getElementById("winner").style.display = "block";
      //   document.getElementById("loser").style.display = "none";
      //   document.getElementById("tie").style.display = "none";
			// }
			// else {
			// 	document.getElementById("loser").innerHTML = "Computer Wins.";
			// 	document.getElementById("winner").style.display = "none";
      //   document.getElementById("loser").style.display = "block";
      //   document.getElementById("tie").style.display = "none";
			// }
			// else {
			// 	document.getElementById("tie").innerHTML = "It's A Tie.";
			// 	document.getElementById("winner").style.display = "none";
      //   document.getElementById("loser").style.display = "none";
      //   document.getElementById("tie").style.display = "block";
			// }

		totalPlays = wins + losses + ties;

		document.getElementById("user-wins").innerHTML = wins;
		document.getElementById("user-losses").innerHTML = losses;
		document.getElementById("computer-wins").innerHTML = losses;
		document.getElementById("computer-losses").innerHTML = wins;
		document.getElementById("user-ties").innerHTML = ties;
		document.getElementById("computer-ties").innerHTML = ties;
		document.getElementById("total-plays").innerHTML = totalPlays;
};
