function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
        default:
            return "error";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    const resultsDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score"); 

    if(humanChoice === computerChoice){
        resultsDiv.textContent = "It's a tie!";
    }

    if(
        ((humanChoice === "rock") && (computerChoice === "scissors")) ||
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))
    ){
        humanScore++;
        resultsDiv.textContent = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}!`;
    }else{
        computerScore++;
        resultsDiv.textContent = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}!`;
    }

    scoreDiv.textContent = `Player: ${humanScore} | Computer ${computerScore}`;

    if(humanScore === 5 || computerChoice === 5){
        if(humanScore === 5){
            resultsDiv.textContent = `You won the game!`;
        }else{
            resultsDiv.textContent = `You lost the game!`;
        }
        disableButtons();
    }
}

function capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function disableButtons(){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");


function playGame(){
    
    rockBtn.addEventListener('click', function(){
        playRound("rock", getComputerChoice());
    });

    paperBtn.addEventListener('click', function(){
        playRound("paper", getComputerChoice());
    });

    scissorsBtn.addEventListener('click', function(){
        playRound("scissors", getComputerChoice());
    });
}

playGame();