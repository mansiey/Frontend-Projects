console.log("welcome totic-tac-toe");

let tapAudio = new Audio("tap_sound.mp3");
let nextTurnAudio = new Audio("next_turn.mp3");
let winningAudio = new Audio("won_sound.mp3");
let isGameOver = false;

let turn = "X";

//function for change of player
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

function resetGame() {
    if(isGameOver === true) {
        document.getElementsByClassName("box").innerText = '';
    }
}

reset.addEventListener('click', resetGame());

//function if won
let winningPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

const checkWin = () => {
    let boxTexts = document.querySelectorAll('.boxtext');


    winningPattern.forEach((pattern) => {

        let [a, b, c] = pattern;

        if (boxTexts[a].innerText !== '' && (boxTexts[a].innerText === boxTexts[b].innerText) && (boxTexts[a].innerText === boxTexts[c].innerText)) {
            isGameOver = true;
            document.querySelector('.info').innerText = boxTexts[a].innerText + " WON!! "
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "150px";
            winningAudio.play();
        }
    })
    

}

//Playing part
// let boxes = document.getElementsByClassName('box');
let boxes = document.querySelectorAll('.box');
boxes.forEach((ele) => {
    // Array.from(boxes).forEach((ele) => {
    let boxText = ele.querySelector('.boxtext');
    ele.addEventListener('click', function () {
        tapAudio.play();
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            nextTurnAudio.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            } 

            resetGame(); 
        }
    })
})
