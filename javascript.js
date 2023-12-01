var playerScore = 0
var computerScore = 0

function getComputerChoice(){
    const rpsarr = ["rock","paper","scissors"];
    var mValue = parseInt(Math.random() * 3);
    var cValue = rpsarr[mValue];
    return cValue
    }

function playRound(playerSelection, computerSelection) {
    // your code here!
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        return ("You won! Player: " + playerSelection + " Computer " + computerSelection)
    }
    else if (playerSelection == computerSelection) {
        return ("Tie! You both selected " + playerSelection)
    }
    else {
        computerScore += 1
        return ("You lost! Computer: " + computerSelection + " Player " + playerSelection)
    }
    }


function game(){
    const playerSelection = prompt("Please enter: rock,paper or scissors");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

}


for(i = 0;i<5;i++){
    game();
}

if (playerScore > computerScore){
    console.log("You won: Player Score: " + playerScore + " Compueter Score: " + computerScore)
}
else if (computerScore > playerScore){
    console.log("You lost: Player Score: " + playerScore + " Compueter Score: " + computerScore)
    
}
else {
    console.log("Its a Tie: Player Score: " + playerScore + " Compueter Score: " + computerScore)        
}
