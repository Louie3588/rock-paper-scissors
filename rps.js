
function getComputerChoice(){
//create a variable for the computer choice
let computerChoice;
//assign the variable for the computer choice a random number of 1-3
computerChoice = Math.floor(Math.random() * 3) + 1;
//assign the number 1 to represent rock
if (computerChoice === 1){
 computerChoice = "Rock";
//assign the number 2 to represent paper
} else if (computerChoice === 2) {
    computerChoice = "Paper";
    
//assign the number 3 to represent scissors
} else {
    computerChoice = "Scissors";
}
//then output the result 
return computerChoice;
}

function playRound(playerSelection, computerSelection){
//create a variable for the player selection
//create a variable for the result
let returnStatment;
//convert the player selection to all lowercase letters
playerSelection = playerSelection.toLowerCase();
//create a test to check if the player selection beats the computer choice
if ((playerSelection == "rock" && computerSelection == "Paper") || 
    (playerSelection == "paper" && computerSelection == "Scissors") ||
    (playerSelection == "scissors" && computerSelection == "Rock")){
        returnStatment = "You lose! ";
        if(computerSelection == "Paper"){
            returnStatment += "Paper beats Rock";
        }else if (computerSelection == "Scissors"){
            returnStatment += "Scissors beats Paper";
        }else if (computerSelection == "Rock"){
            returnStatment += "Rock beats Scissors";
        }}
else if ((playerSelection == "rock" && computerSelection == "Scissors") ||
        (playerSelection == "paper" && computerSelection == "Rock") ||
        (playerSelection == "scissors" && computerSelection == "Paper")){
            returnStatment = "You win! ";
            if(computerSelection == "Paper"){
                returnStatment += "Scissors beats Paper";
            }else if (computerSelection == "Scissors"){
                returnStatment += "Rock beats Scissors";
            }else if (computerSelection == "Rock"){
                returnStatment += "Paper beats Rock";
            }}
else {
    returnStatment = "It's a tie!"
}
//return a string that states if you won lost or tied
return returnStatment;
}

const playerSelection = "Rock";
const computerChoice = getComputerChoice();
console.log(playRound(playerSelection, computerChoice));