
const quizData = [
    {
        question: "How old is Linkedin ?",
        a: "10 years",
        b: "17 years",
        c: "19 years",
        d: "30 years",
        correct: "c"
    },
    {
    question: "What is the most used Programming language in 2019 ?",
    a: "Java",
    b: "c",
    c: "Python",
    d: "JavaScript",
    correct: "d"
    },
   { 
    question: "Who is PM of India ?",
    a: "kerjuial",
    b: "Modi",
    c: "kim",
    d: "Trump",
    correct: "b"
    },
    {
    question: "What does HTML stands for ?",
    a: "Hypertext Markup Language",
    b: "Cascading Styles sheet",
    c: "Json Object Notation",
    d: "Application Programming interface",
    correct: "a"
    },
    {
    question: "When JavaScript Launched ?",
    a: "2020",
    b: "2018",
    c: "2007",
    d: "None of the above",
    correct: "d"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
