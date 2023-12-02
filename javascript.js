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


function game(playerSelection){

    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);

}

function gameResult(playerScore,computerScore){
    if (playerScore > computerScore){
        return ("You won: Player Score: " + playerScore + " Compueter Score: " + computerScore)
    }
    else if (computerScore > playerScore){
        return ("You lost: Player Score: " + playerScore + " Compueter Score: " + computerScore)
        
    }
    else {
        return("Its a Tie: Player Score: " + playerScore + " Compueter Score: " + computerScore)        
    }
}


const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');
const score = document.querySelector('#score');


buttons.forEach((button) => {
    button.addEventListener('click', () => {

        result.textContent = game(button.value);
        score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        if (playerScore > 5 || computerScore > 5){
            score.textContent = gameResult(playerScore,computerScore);
        }


    })
})
