let computerOptions = ["rock","paper","scissors"];
	let computerSelection = String;
function computerPlay() {
    computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)]
	return computerSelection;
}

	let playerSelection = String;
function playerPlay() {
	playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
	return playerSelection;
}

	let playerScore = 0;
	let computerScore = 0;
function playRound() {
	playerPlay();
	computerPlay();
	if(computerSelection == "rock") {
		switch(playerSelection) {
			case "rock":
				alert("It's a draw!");
				break;
			case "paper":
				alert("You win!");
				++playerScore;
				break;
			case "scissors":
				alert("You lose!");
				++computerScore;
				break;
			default: alert("invalid player selection"); break;
		}
}	else if (computerSelection == "paper") {
		switch(playerSelection) {
			case "paper":
				alert("It's a draw!");
				break;
			case "scissors":
				alert("You win!");
				++playerScore;
				break;
			case "rock":
				alert("You lose!");
				++computerScore;
				break;
			default: alert("invalid player selection"); break;
		}
}	else {
		switch(playerSelection) {
			case "scissors":
				alert("It's a draw!");
				break;
			case "rock":
				alert("You win!");
				++playerScore;
				break;
			case "paper":
				alert("You lose!");
				++computerScore;
				break;
			default: alert("invalid player selection"); break;
		}
    }	
}	
do {
	playRound();
}
while ((playerScore < 3) && (computerScore < 3));

if (playerScore > computerScore) {
	console.log("You win!");
} else {
	console.log("You lose.");
}


console.log("Final scores: \n Player: " + playerScore + "\n Computer: "+computerScore);