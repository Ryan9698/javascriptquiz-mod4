var secondsLeft = 60;
var score = 0;
var currentQuestion = 0;
var startTest = document.querySelector("#beginBtn");
var newQuestion = document.getElementById("question");
var answerBtns = document.querySelector("#answerBtns")
// var input1 = questions.answer1;
// var input2 = questions.answer2;
// var input3 = questions.answer3;
// var input4 = questions.answer4;

// Quiz Question and Answer Data

var questions = [
    {
      question: "We use a ____ element to link JavaScript to an HTML file?",
      answers: ["<src>", "<js>", "<script>", "<java>", "<script>"],
      correct: "<script>"
    },
    {
        question: "What is the correct place to insert your <script> tag?",
        answers: ["At the top of the HTML file", "In the middle of the HTML file", "At the bottom of the HTML file", "It does not matter"],
        correct: "At the bottom of the HTML file"
    },
    {
        question: "How do you make an alert box?",
        answers: ["alert('Hello')", "msg('Hello')", "pop('Hello')", "alert.box('Hello')", "alert('Hello')"],
        correct: "alert('Hello')"
    },
    {
        question: "How do you call the function myQuiz?",
        answers: ["function myQuiz();", "call function myQuiz();", "myQuiz();", "function call myQuiz();"],
        correct: "myQuiz();"
    },
    {
        question: "How do you write an 'if' statement?",
        answers: ["if i = 10", "if i = 10 then", "if {i = 10} then", "if (i = 10)",],
        correct: "if (i = 10)"
    },
    {
        question: "How do you write a comment in JavaScript?",
        answers: ["*Comment*", "<!--Comment-->", "// Comment", "!~Comment"],
        correct: "// Comment"
    },
    {
        question: "How do you write an array in JavaScript?",
        answers: ["var rgb = red, blue, green;", "var rgb = {red, blue, green};", 'var rgb = {"red", "blue", "green");', 'var rgb = ["red", "blue", "green"];'],
        correct: 'var rgb = ["red", "blue", "green"];'
    }];
    var questionInput = questions.question;
    var answers = questions.answer;
//     {
//         question:
//         answer1:
//         answer2:
//         answer3:
//         answer4:
//         correct:
//     },
//     {
//         question:
//         answer1:
//         answer2:
//         answer3:
//         answer4:
//         correct:
//     },
//     {
//         question:
//         answer1:
//         answer2:
//         answer3:
//         answer4:
//         correct:
//     },

// ];

function renderQuestion() {
    var newQuestion = document.getElementById("question");
    var newAnswers = document.querySelectorAll(".btn")
    for (i = 1; i <= questions.length; i++) {
        console.log("Hello")
        newQuestion.textContent = questions.question[i];
        for (i = 0; i < answers.length; i++);
        newAnswers.textContent = questions.answers[i];
        return;
    }
}
function nextQuestion() {
    currentQuestion++
    if (currentQuestion < questions.length) {
        renderQuestion();
    }
 }

//Function to check chosen answer with answer in data

// function answerCheck(correct) {

//     if (questions[currentQuestion].correct == ) {
//         score += 1;
//         messageOutput("Correct! You got this!");
//     } else {
//         secondsLeft -= 5;
//         messageOutput("Wrong :( Try again!");
//     }
// };
//Function that saves data to local storage and projects it onto screen

//Function that hides elements until begin test has been pressed


//Quiz Answers


//Timer
var timerEl = document.querySelector("#timer");

function quizTimer() {
    timerEl.textContent = secondsLeft
    var countDown = setInterval(function(){
    secondsLeft--;
    timerEl.textContent = "Timer: " + secondsLeft;

    if(secondsLeft <= 0) {
        clearInterval(countDown);
       console.log("Timer Finished");
       currentQuestion = questions.length;
       nextQuestion();
    }
    renderQuestion();
}, 1000);
}
//High Score

//eventListeners
startTest.addEventListener("click", quizTimer);
startTest.addEventListener("click", function (event) {
    var element = event.target;
    if (event.target.matches("button")) {
        var state = element.getAttribute("data-state");
        if (state === "show") {
        element.setAttribute("data-state", "hidden");
        }};
        nextQuestion();
    });