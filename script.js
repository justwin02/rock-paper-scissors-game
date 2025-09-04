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

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(choice)) {
        return choice;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return console.log("It's a tie!");
    }

    if(
        ((humanChoice === "rock") && (computerChoice === "scissors")) ||
        ((humanChoice === "scissors") && (computerChoice === "paper")) ||
        ((humanChoice === "paper") && (computerChoice === "rock"))
    ){
        console.log("You win! " + `${humanChoice.charAt(0).toUpperCase() 
            + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() 
            + computerChoice.slice(1)}!` );
        return "player";
    }

    console.log("You lose! " + `${computerChoice.charAt(0).toUpperCase() 
        + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() 
        + humanChoice.slice(1)}!` );
    return "computer";
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");


function playGame(){
    console.log("Let's play rock-paper-scissors!");
    
    console.log("\nFinal Results");
    if(humanScore > computerScore){
        console.log("You Won!");
    }else if(computerScore > humanScore){
        console.log("You Lose!");
    }else
        console.log("Tie Game!");
}

playGame();