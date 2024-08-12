

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++; 
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++;
    } else if (humanChoice === computerChoice) {
    }
}
const score = document.querySelector("#score");
score.textContent = (`Score =  You: ${humanScore} | Computer: ${computerScore}`);

function getScore() {
    score.textContent = (`Score =  You: ${humanScore} | Computer: ${computerScore}`);
    }

function playAgain() {
   const newGame = document.querySelector("#play-again");
   newGame.style.visibility = "visible"; //displays play again buttons
   const gamebuttons = document.querySelectorAll(".gamebtn")

   buttons.forEach((button) => {
       button.setAttribute("disabled", "");
    }); //disables game buttons

   const noBtn = document.querySelector("#no");
   noBtn.addEventListener("click", () => {
    winner.textContent = "How could you click \"no\" boss? Come on, play another... I insist!";
   })
   gamebuttons.forEach((button) => {
      button.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      getScore(); //resets score
      newGame.style.visibility = "hidden";
      buttons.forEach((button) => {
            button.removeAttribute("disabled"); //re-enables game buttons
        });
      
      });
   });

};

function endGame() {
    const winner = document.querySelector("#winner")
    console.log(winner  )
    if (humanScore === 5) {
        winner.textContent = "YOU WIN BOSS!";
        playAgain()
    } else if (computerScore === 5) {
        winner.textContent = "YOU LOSE :( RNG HARDER BOSS :P";
        playAgain()
    } else {
        let result;
        let calc = (Math.random() * 100) + 1;
        if (calc <= 33) { 
            result = "Could be anyones game :o";
        } else if (calc > 33 && calc <= 66) {
            result = "C'mon boss you got this!"; 
        } else {
            result = "You can't let a computer win boss! The RNG isn't rigged, Right?";
            
        }
       winner.textContent = result;
       console.log("endgame function called");
    }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let result = button.textContent;
        let humanSelection = ''; 
        humanSelection = result;
        let humanChoice = humanSelection.toLowerCase();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        getScore();
        endGame();
    });
});



