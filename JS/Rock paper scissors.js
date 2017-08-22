console.log("Please type Rock, Paper or Scissors!")
var userInput = 'Rock';
console.log("The user picked " + userInput)
userInput = userInput.toLowerCase();

if (userInput === "rock") {
	userInput = 0;
} else if(userInput === "paper")  {
	userInput = 1;
} else {
	userInput = 2;
} 

var getComputerChoice = Math.round(Math.random()*2);
var computerChoice = 0;
var getComputerChoice = computerChoice;

if (computerChoice === 0) {
	computerChoice = "rock";
} else if(userInput === 1)  {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("The Computer Choose: " + computerChoice);

var determineWinner = function(userInput, getComputerChoice)
{
    if(userInput === getComputerChoice)
    {
        return "The result is a tie!";       
    }
    else if(userInput > getComputerChoice)
    {
        return "The user Wins!";       
    }
    else
    {
        return "The AI Wins!";       
    }
}

console.log(determineWinner(userInput, getComputerChoice));  
