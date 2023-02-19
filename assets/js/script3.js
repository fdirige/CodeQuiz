
const startBtn = document.getElementById("start")
startBtn.addEventListener("click", startQuiz)
function startQuiz() {
    const questionWrapper = document.getElementById
        ("question-wrapper")
    questionWrapper.classList.remove("hidden")
    startCountdown();
}

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        else {
            quizTime = quizTime-100;
            console.log("test");
            console.log(quizTime);
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// CREATE A QUESTION CLASS

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choices) {
        return this.answer === choices;
    }
}

//DISPLAY QUESTION
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // SHOW NEXT QUESTION
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // SHOW OPTIONS
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice"
                + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

// GUESS FUNCTION
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}
    `;
}

// SHOW SCORE
function showScores() {
    let quizEndHTML =
        `
            <h1>Quiz Completed</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
            <div class="quiz-repeat">
                <a href="index3.html">Take Quiz Again</a>
            </div>
            <div class="quiz-repeat">
                <a href="index2.html">High Scores</a>
            </div>
            <label>Your Initials:</label>
            <form id ="form"><input class="initials" type="text" placeholder="Your Initials here">
            <button class="submit-initials" type="submit">Submit</button>
            </form>
        `;
    
    
    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
    let formElement = document.getElementById("form");
    formElement.addEventListener("submit", function(event){
        event.preventDefault();
        var initials = document.querySelector(".initials");
        console.log(initials.value);
        console.log(quiz.score);
        if (localStorage.getItem("highscores")) {
            var highscores = JSON.parse(localStorage.getItem("highscores"));
            highscores.push({initials:initials.value, quizScore:quiz.score});
        
        localStorage.setItem("highscores", JSON.stringify(highscores));
        }
        else {
            localStorage.setItem("highscores", JSON.stringify([{initials:initials.value, quizScore:quiz.score}]));
        }
    });
}

// CREATE QUIZ QUESTIONS
let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
    new Question(
        "Which is JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
    new Question(
        "Which is backend language?", ["PHP", "HTML", "CSS", "HTML"], "PHP"),
    new Question(
        "Which is best for Artificial intelligence?", ["Sass", "Python", "CSS", "all"], "Python"),
];

let quiz = new Quiz(questions);

// DISPLAY QUESTION
displayQuestion();

// ADD A COUNTDOWN
let time = 10;
let quizTimer = time * 60 * 60;
quizTime = quizTimer / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000)
}

