let choices = ["Rock", "Paper", "Scissors"];

let gameStats = { wins: 0, losses: 0, ties: 0 };
let player = { choice:null};

let isAlive = true;

function playRock(){
player.choice= "Rock";
playGame()
}

function playPaper(){
    player.choice= "Paper";
    playGame()
}

function playScissors(){
    player.choice= "Scissors";
playGame()
}

function playGame(){

    if(isAlive === true){
       let computerChoice = getComputerChoice();
       document.getElementById("computer-choice").textContent = "Computer's Choice : " + computerChoice;
    document.getElementById("player-choice").textContent = "Your Choice : " + player.choice;
    
    
    comparerChoice(player.choice, computerChoice);
    }
}



function getComputerChoice(){

return choices[Math.floor(Math.random()* choices.length)];

}

function comparerChoice(playerChoice, computerChoice){
   
    if (playerChoice === computerChoice) {
            gameStats.ties++;
            displayMessage("It's a tie!");
    }
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")){
    gameStats.wins++;
    displayMessage(
        "You win! " + playerChoice + " beats " + computerChoice + "."
    );
    }
    else {
    gameStats.losses++;
    displayMessage(
      "You lose! " + computerChoice + " beats " + playerChoice + "."
    );
    }

    updateGameStats();
}

function displayMessage(msg) {
    document.getElementById("message").innerText = msg;
  }
  function updateGameStats() {
    document.getElementById("game-stats").innerText =
      "Wins: " +
      gameStats.wins +
      " | Losses: " +
      gameStats.losses +
      " | Ties: " +
      gameStats.ties;
  }
