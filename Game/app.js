let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user_scor");
const compScorepara = document.querySelector("#computer_scor");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomindx = Math.floor(Math.random() * 3);
    return options[randomindx];
}

const gameDraw = () => {
    // console.log("Game is Draw");
    msg.innerText = "Game was Draw. Try again.";
    msg.style.backgroundColor = "#021526";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else { 
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log ("you chose", userChoice);
    const compChoice = genCompChoice();
    // console.log("computer chose", compChoice );

    if (userChoice === compChoice ) {
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if ( userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin , userChoice, compChoice);
    }
}

choices.forEach((choice ) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });
    
});