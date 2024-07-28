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

computerChoice();
computerChoice();
computerChoice();

