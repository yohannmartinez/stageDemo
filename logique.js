const questions = [
    {
        question: "Quel language sert à faire de la logique sur un site ? ",
        answers: ["JS", "HTML", "CSS"],
        correct: "JS",
    },
    {
        question: "Quel language sert à structurer sur un site ? ",
        answers: ["CSS", "JS", "HTML"],
        correct: "HTML",
    },
    {
        question: "Quel langage sert à faire du style sur un site ?",
        answers: ["HTML", "CSS", "JS"],
        correct: "CSS",
    },
];

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

const questionText = document.getElementById("question");
const answersDiv = document.getElementById("answers");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const image = document.getElementById("image")

function showQuestion() {
    const q = questions[currentQuestion];

    questionText.textContent = q.question;
    answersDiv.innerHTML = "";
    resultText.textContent = "👉 Choisis une réponse";
    nextBtn.disabled = true;

    q.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].correct;

    if (answer === correctAnswer) {
        resultText.textContent = "✅ Bonne réponse !";
        score++;
        hasAnswered = true;
        const buttons = answersDiv.querySelectorAll("button");
        buttons.forEach((btn) => {
            btn.disabled = true
        });

    } else {
        resultText.textContent = "❌ Mauvaise réponse";
    }

    scoreText.textContent = "Score : " + score;
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestion++;
hasAnswered = false;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionText.textContent = "🎉 Quiz terminé !";
    answersDiv.innerHTML = "";
    resultText.textContent = "Score final : " + score + " / " + questions.length;
    nextBtn.disabled = true;
    if (score === 3) {
        image.src = "./images/bien.webp"
    }else if (score === 2) {
        image.src = "./images/moyen.webp"
    } else {
        image.src = "./images/nul.webp"
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreText.textContent = "Score : 0";
    showQuestion();
    image.src = "https://s1.qwant.com/thumbr/474x315/3/6/7417082ee3afc0ec870c544cbe3a55353b54577b010bb175f3bb3ccdedf1dd/OIP.uiZpQS-6ZthgWWcUUZiLfwHaE7.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%2Fid%2FOIP.uiZpQS-6ZthgWWcUUZiLfwHaE7%3Fpid%3DApi&q=0&b=1&p=0&a=0" 
}

showQuestion();
