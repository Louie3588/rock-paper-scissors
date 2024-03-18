
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
        returnStatment = "Loser! ";
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
            returnStatment = "Winner! ";
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

//declaire the new function
function playGame(){
//create variables that are for keeping score
let scorePlayer = 0;
let scoreComputer = 0;
let endResult;
//create a window prompt to get players choice

//play 5 times 
let askOne = window.prompt("Rock, Paper, or Scissors?");
let roundOne = playRound(askOne, getComputerChoice());
console.log(roundOne);
scoreKeeper(roundOne);
let askTwo = window.prompt("Rock, Paper, or Scissors?");
let roundTwo = playRound(askTwo, getComputerChoice());
console.log(roundTwo);
scoreKeeper(roundTwo);
let askThree = window.prompt("Rock, Paper, or Scissors?");
let roundThree = playRound(askThree, getComputerChoice());
console.log(roundThree);
scoreKeeper(roundThree);
let askFour = window.prompt("Rock, Paper, or Scissors?");
let roundFour = playRound(askFour, getComputerChoice());
console.log(roundFour);
scoreKeeper(roundFour);
let askFive = window.prompt("Rock, Paper, or Scissors?");
let roundFive = playRound(askFive, getComputerChoice());
console.log(roundFive);
scoreKeeper(roundFive);


//create a score keeping function
function scoreKeeper(whichRound){
    if (whichRound.charAt(0) == "W"){
    scorePlayer++;
    }else if (whichRound.charAt(0) == "L"){
    scoreComputer++;
    }
    }
//display the winner at the end of 5 rounds
if (scorePlayer > scoreComputer){
    endResult = "Congradulations!!! You beat the Computer!!!"
    return endResult;
} else if (scorePlayer < scoreComputer){
    endResult = "The Computer beat you. Better luck next time!"
    return endResult;
} else {
    endResult = "It was a tie! Everyone is a winner!!"
    return endResult;
}
}
console.log(playGame());