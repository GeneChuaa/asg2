let computerguess;
let userguess = [];

const init = () =>{
    computerguess = Math.floor(Math.random()* 100);
    console.log(computerguess)
    document.getElementById("newGameButton").style.display ="none";
    document.getElementById("game").style.display ="none";
};

const startGame = () => {
    document.getElementById("welcome").style.display ="none";
    document.getElementById("game").style.display ="block";
}

const easyMode = () => {
    startGame();
}

const hardMode = () => {
    startGame();
}