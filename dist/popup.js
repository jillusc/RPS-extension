"use strict";
/*
1: wait for the DOM to finish loading before running the game
2: get the buttons
3: insert event listeners for getPlayerChoice buttons
4: begin the game with whichever choice was made (via button click)
*/
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByClassName("btn-choices"); // 2
    for (let button of buttons) {
        button.addEventListener("click", (event) => {
            console.log("BUTTON CLICKED!");
            const target = event.currentTarget; // grab the element and store as target; typed
            const img = target.querySelector("img"); // find the first <img> inside it and store as img
            if (!img)
                return; // safety: only run game when img exists
            const playerChoice = img.getAttribute("data-type"); // read the said attribute from the image and store its value
            if (!playerChoice)
                return;
            runGame(playerChoice); // 4
        });
    }
});
/* Variables */
const choices = ["rock", "paper", "scissors"];
const maxScore = 5;
let playerScore = 0;
let computerScore = 0;
const playerChoiceImg = document.getElementById("player-choice-img");
const computerChoiceImg = document.getElementById("computer-choice-img");
const scoresElement = document.getElementById("scores");
const lossesElement = document.getElementById("losses");
/* The main game function - called both when the script is first loaded and after the restart alert */
// we add null to the type to appease TS:
function runGame(playerChoice) {
    showPlayerChoiceImage(playerChoice);
    // delay by 300ms:
    setTimeout(() => {
        const computerChoice = getComputerChoice();
        const winner = ascertainWinner(playerChoice, computerChoice);
        incrementScores(winner);
    }, 300);
}
/* Display the player's choice of R, P or S */
function showPlayerChoiceImage(playerChoice) {
    if (!playerChoice || !playerChoiceImg)
        return; // safety guard
    playerChoiceImg.src = `assets/images/${playerChoice}.webp`;
    playerChoiceImg.style.display = "block";
}
/* Generate a random choice of R, P or S for the computer */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    computerChoiceImg.src = `assets/images/${computerChoice}.webp`;
    computerChoiceImg.style.display = "block";
    return computerChoice;
}
/* Determine whether player or computer choice wins */
function ascertainWinner(playerChoice, computerChoice) {
    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    }
    else if (playerChoice === computerChoice) {
        return "tie";
    }
    else {
        return "computer";
    }
}
/* Increment player wins (scores) and computer wins (losses) and display them */
function incrementScores(winner) {
    if (winner === "player")
        playerScore++;
    else if (winner === "computer")
        computerScore++;
    scoresElement.textContent = playerScore.toString();
    lossesElement.textContent = computerScore.toString();
    if (playerScore === maxScore || computerScore === maxScore) {
        gameEnd();
    }
}
/* Game end = after 5 rounds add restart alert */
function gameEnd() {
    let winnerText;
    if (playerScore === maxScore) {
        winnerText = "You won! Hurrah!";
    }
    else {
        winnerText = "Sorry!<br>The computer won!";
    }
    const overlay = document.getElementById("modal-overlay");
    const message = document.getElementById("modal-message");
    const restartBtn = document.getElementById("modal-restart");
    if (!overlay || !message || !restartBtn)
        return;
    message.innerHTML = winnerText;
    overlay.style.display = "flex";
    overlay.classList.add("show");
    restartBtn.onclick = () => {
        playerScore = 0;
        computerScore = 0;
        scoresElement.textContent = "0";
        lossesElement.textContent = "0";
        playerChoiceImg.src = "assets/images/blank.webp";
        computerChoiceImg.src = "assets/images/blank.webp";
        overlay.classList.remove("show");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 250); // wait for fade-out to finish
    };
}
//# sourceMappingURL=popup.js.map