const submitInitials = document.getElementById("scores")
submitInitials.addEventListener("click", showHighscores)
function showHighscores() {
    const scores = [
        {
            initials: "AJ",
            score: 4
        },
        {
            initials: "BJ",
            score: 3
        },
        {
            initials: "CJ",
            score: 2
        },
        {
            initials: "FJ",
            score: 2
        }
    ]

    const highscoresWrapper = document.getElementById
        ("highscores")


    for (let i = 0; i < scores.length; i++) {
        const scoreInfo = scores[i];
        highscoresWrapper.innerHTML += scoreInfo.initials + " " + scoreInfo.score + "<br>"
    }

    highscoresWrapper.classList.remove("hidden")
}

renderScore();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderScore() {
    var scores = localStorage.getItem("scores");
    var initials = localStorage.getItem("initials");

    if (!scores || !initials) {
      return;
    }

    userScoresSpan.textContent = scores;
    userInitialsSpan.textContent = initials;
  }

  scoreBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var scores = document.querySelector("#scores").value;
    var initials = document.querySelector("#initials").value;

    if (initials === "") {
      displayMessage("error", "Initials cannot be blank");
    } else {
      displayMessage("success", "Succesfully entered!");

      localStorage.setItem("scores", score);
      localStorage.setItem("initials", initials);
      renderScore();
    }
  });