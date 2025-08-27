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

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissors: ").toLowerCase();
}


const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

const result = playRound(humanSelection, computerSelection);

