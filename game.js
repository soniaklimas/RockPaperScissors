const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select i")];

// function handSelection
function handSelection() {
  console.log(this.dataset);
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.color = ""));
  this.style.color = "yellowgreen";
}

// function aiChoice
function aiChoice() {
  const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  return aiHand;
}

// function checkresult
function checkResult(player, ai) {
  if (player === ai) {
    return "draw";
  } else if (
    (player === "paper" && ai === "rock") ||
    (player === "stone" && ai === "scisors") ||
    (player === "scisors" && ai === "paper")
  ) {
    return "You won";
  } else {
    return "You lost";
  }
}

// function showResult
function showResult(player, ai, result) {
  document.querySelector(`[data-summary="user-choice"]`).textContent = player;
  document.querySelector(`[data-summary="ai-choice"]`).textContent = ai;
  document.querySelector("p.number span").textContent = ++gameSummary.numbers;

  if (result === "You won") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector(`[data-summary="who-won"]`).textContent = "You won!";
    document.querySelector(`[data-summary="who-won"]`).style.color = "green";
  } else if (result === "You lost") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector(`[data-summary="who-won"]`).textContent =
      "You lost.";
    document.querySelector(`[data-summary="who-won"]`).style.color = "red";
  } else {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector(`[data-summary="who-won"]`).textContent = "draw";
    document.querySelector(`[data-summary="who-won"]`).style.color = "gray";
  }
}

// function endGame
function endGame() {
  document.querySelector(`[data-option = ${game.playerHand}]`).style.color =
    "white";
}

// control function
function startGame() {
  if (!game.playerHand) {
    return alert("Choose an option!");
  }
  game.aiHand = aiChoice();
  const gameResult = checkResult(game.playerHand, game.aiHand);
  console.log(gameResult);
  showResult(game.playerHand, game.aiHand, gameResult);
  endGame();
  // resetGame();
}

function resetGame() {
  console.log("działa");
  document.querySelector("p.number span").textContent = "";
  document.querySelector("p.wins span").textContent = "";
  document.querySelector("p.losses span").textContent = "";
  document.querySelector("p.draws span").textContent = "";
}

document.querySelector(".start").addEventListener("click", startGame);
hands.forEach((hand) => hand.addEventListener("click", handSelection));

document.querySelector(".reset").addEventListener("click", resetGame);
