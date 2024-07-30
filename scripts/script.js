let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result;
    let calc = (Math.random() * 100) + 1;
    if (calc <= 33) { 
        result = "rock";
    } else if (calc > 33 && calc <= 66) {
        result = "paper"; 
    } else {
        result = "scissors";
    }
    return result;
}

function getHumanChoice() {
    let result = prompt("Rock, Paper or Scissors?").toLowerCase(8);
    
     if (result === "rock") {
        alert("You chose rock. A faithful choice!");
        return result;
     } else if (result === "paper") {
        alert("You chose paper. Doesn't paper always win?");
        return result;
     } else if (result === "scissors") {
        alert("You chose scissors. An fine tool, not to be overlooked!"); 
        return result;
     } else {
        alert("Please give a valid answer");
        return getHumanChoice();
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


// Create function containing human choice and computer choice
//   If humanChoice is exactly equal to rock and computerSelection is exactly equal to scissors 
//     human score +1; log "winner message"
//   else if human choice is exactly equal to paper and computerSelection is exactly equal to rock 
//     human score +1; log "winner message"
//   else if human choice is exactly equal to scissors and computerSelection is exactly equal to paper 
//     human score +1; log "winner message"
//   If computerChoice is exactly equal to rock and computerSelection is exactly equal to scissors 
//     human score +1; log "winner message"
//   else if computer choice is exactly equal to paper and computerSelection is exactly equal to rock 
//     human score +1; log "winner message"
//   else if computer choice is exactly equal to scissors and computerSelection is exactly equal to paper 
//     human score +1; log "winner message"
//   else if human choice and computer choice is exactly equal to eachother
//     display "it's a draw message"

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("Rock beats Scissors, You win this round!");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("Paper beats Rock, You win this round!");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("Scissors beats Paper, You win this round!");  
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
        console.log("Rock beats Scissors, Computer wins this round!");
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("Paper beats Rock, Computer wins this round!");
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
        console.log("Scissors beats Paper, Computer wins this round!");  
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
    console.log("Computer chose: " + computerSelection);
    console.log("You chose: " + humanSelection);
    console.log("Your Score: " + humanScore, "Computer Score: " + computerScore);
}

playRound(humanSelection, computerSelection);