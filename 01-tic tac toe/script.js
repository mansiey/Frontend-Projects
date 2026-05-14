console.log("welcome totic-tac-toe");

let tapAudio = new Audio("tap_sound.mp3");
let nextTurnAudio = new Audio("next_turn.mp3");

let turn = "X";

//function for change of player
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//function if won
const checkWin = () => {

}

//Playing part
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((ele) => {
    let boxText = ele.querySelector('.boxtext');
    ele.addEventListener('click', function () {
        tapAudio.play();
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            nextTurnAudio.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        }
    })
})
