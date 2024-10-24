let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset_btn");
let newBtn =document.querySelector(".new_btn");
let winnerContainer = document.querySelector(".winnerContainer");
let msg = document.querySelector(".msg");

let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let resetGame = () => {
    turn0 = true;
    enablebtn();
    winnerContainer .classList.add("hide");
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turn0) {
            btn.innerText= "0";
            turn0 = false;
        } else {
            btn.innerText= "X";
            turn0 = true;
        }
        btn.disabled = true;

        checkWiner();

        
    });
});

const disablebtn = () => {
    for (let btn of btns) {
        btn.disabled = true;
    }
}

const enablebtn = () => {
    for (let btn of btns) {
        btn.disabled = false;
        btn.innerText = "";
    }
}

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    winnerContainer. classList.remove("hide");
    disablebtn();
}
const checkWiner = () => {
    for (let pattern of winPatterns) {
        let patt1 = btns[pattern[0]].innerText;
        let patt2 = btns[pattern[1]].innerText;
        let patt3 = btns[pattern[2]].innerText;


        if (patt1 !="" && patt2 != "" && patt3 != "") {
            if (patt1 === patt2 && patt2 === patt3) {
                showWinner (patt1);

            }
        }
    }
};

newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener("click", resetGame);
