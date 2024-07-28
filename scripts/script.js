 function computerChoice(answer) {
    let calc = (Math.random() * 100) + 1;
    if (calc <= 33) { 
    answer = "rock";
  } else if (calc >= 34 && calc < 66) {
    answer = "paper"; 
  } else {
    answer = "scissors";
  }
  console.log(calc)
  console.log(answer)
}

function getHumanChoice(answer) {
    let result = prompt("Rock, Paper or Scissors?");
     if (result === "Rock" || result === "rock") {
        answer = "Rock"; alert("You chose rock. A faithful choice!");
     } else if (result === "Paper" || result === "paper") {
        answer = "Paper"; alert("You chose paper. Doesn't paper always win?");
     } else if (result === "Scissors" || result === "scissors") {
        answer = "Scissors"; alert("You chose scissors. An fine tool, not to be overlooked!");
     }
     else alert("Please give a valid answer")
     console.log(answer)
}

getHumanChoice()

