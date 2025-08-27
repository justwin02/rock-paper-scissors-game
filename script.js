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
    return prompt("Enter rock, paper, or scissors: ").toLowerCase;
}


console.log(getHumanChoice());


// function getRoundWinner(getComputerChoice, getHumanChoice){
//     if(getComputerChoice)
// }