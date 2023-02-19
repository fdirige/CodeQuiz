//LOCAL STORAGE TO VIEW HIGH SCORES
console.log(JSON.parse(localStorage.getItem("highscores")));
var scoresElement = document.querySelector(".scores");
var highscores = JSON.parse(localStorage.getItem("highscores"));

    for (let i = 0; i < highscores.length; i++) {
        const scoreInfo = highscores[i];
        scoresElement.innerHTML += scoreInfo.initials + " " + scoreInfo.quizScore + "<br>"
    }