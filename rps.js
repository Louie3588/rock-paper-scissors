function getComputerChoice(){
//create a variable for the computer choice
let computerChoice;
//assign the variable for the computer choice a random number of 1-3
computerChoice = Math.floor(Math.random() * 3) + 1;
console.log(computerChoice);
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
