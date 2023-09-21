var secondsLeft = 60;
var score = 0;
var currentQuestion = 0;
var startTest = document.querySelector("#beginBtn");
var newQuestion = document.getElementById("question");

// var input1 = questions.answer1;
// var input2 = questions.answer2;
// var input3 = questions.answer3;
// var input4 = questions.answer4;

// Quiz Question and Answer Data

var questions = [
    {
      question: "We use a ____ element to link JavaScript to an HTML file?",
      answers: ["<src>", "<js>", "<jscript>", "<java>", "<script>"],
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
    var answer = questions.answer;
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
    var newAnswers = document.getElementById("answerBtns");
        console.log("Hello")
        newQuestion.textContent = questions[currentQuestion].question;
        for (i = 0; i < questions[currentQuestion].answers.length; i++){
        let btnEl = document.createElement('button');
        btnEl.setAttribute("class", "btn btn-success bg-gradient btn-lg");
        btnEl.setAttribute("value", questions[currentQuestion].answers[i]);
        btnEl.textContent = questions[currentQuestion].answers[i];
        newAnswers.append(btnEl);
        btnEl.addEventListener("click", answerCheck);
        }
};


//Function to check chosen answer with answer in data

function answerCheck(btnEl) {
    var btnEl = document.getElementsByClassName(".btn")
    if (questions[currentQuestion].correct == btnEl.textContent) {
        score += 1;
        console.log("Correct! You got this! Your score is " + score);
        renderQuestion();
    } else {
        secondsLeft -= 5;
        console.log("Wrong :( Try again!");
    }
};
// Function that saves data to local storage and projects it onto screen

// Function that hides elements until begin test has been pressed


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
  
    }
}, 1000);
}
//High Score

//eventListeners
startTest.addEventListener("click", quizTimer);
startTest.addEventListener("click", renderQuestion);
startTest.addEventListener("click", function (event) {
    var element = event.target;
    if (event.target.matches("button")) {
        var state = element.getAttribute("data-state");
        if (state === "show") {
        element.setAttribute("data-state", "hidden");
        }};
    
    });

