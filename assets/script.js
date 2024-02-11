//Initial values for questions, timer, and score
let currentQuestionIndex = 0;
let timeLeft = 60;
let score = 0;
let timerInterval;

// DOM elements
const startButton = document.getElementById("beginBtn");
const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answerBtns");
const timerCount = document.getElementById("timerCount");
const scoreDisplay = document.getElementById("scoreDisplay");
const initialsInput = document.getElementById("initialsInput");
const saveScoreButton = document.getElementById("saveScore");
const backButton = document.getElementById("backButton");
const feedbackElement = document.getElementById("feedback");

//Utility functions to make toggling elements easier
function showElement(element) {
  element.classList.remove("hidden");
  element.classList.add("visible");
}

function hideElement(element) {
  element.classList.remove("visible");
  element.classList.add("hidden");
}

//Toggles the display of these elements when the page is loaded.
function initializeQuiz() {
  hideElement(questionElement);
  hideElement(answerBtns);
  hideElement(timerCount);
  hideElement(scoreDisplay);
  hideElement(initialsInput);
  hideElement(saveScoreButton);
  hideElement(backButton);
  hideElement(feedbackElement);
  showElement(startButton);
}
//When the Begin Quiz button is clicked, the button disappears and the elements are displayed and the timer starts.
//It immediately proceeds to the nextQuestion function to render the first question in the object array.
function startGame() {
  currentQuestionIndex = 0;
  timeLeft = 60;
  score = 0;
  timerCount.textContent = `Timer: ${timeLeft}`;
  scoreDisplay.textContent = ` Current Score: ${score}`;
  startTimer();
  nextQuestion();
  hideElement(startButton);
  showElement(questionElement);
  showElement(timerCount);
  showElement(scoreDisplay);
}
//If the quiz is finished, the endGame function is called.
function nextQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    endGame();
    return;
  }
  //Otherwise, it renders the question and styled answer buttons that each check the data inside against the correct
  //answer based on user input(click).
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  //Remove data from the html container before rendering new buttons with new data.
  answerBtns.innerHTML = "";
  //Creates buttons for each potential answer in the array
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn", "btn-success", "m-2"); //Adding bootstrap classes to generated buttons
    button.onclick = () => checkAnswer(answer);
    answerBtns.appendChild(button);
  });
}
//Checks the input click against the correct answer.
function checkAnswer(answer) {
  const correct = quizQuestions[currentQuestionIndex].correctAnswer;
  let isCorrect = answer === correct;

  if (isCorrect) {
    // If correct, feedback renders correct and adds +1 to score
    score++;
    scoreDisplay.textContent = `Current Score: ${score}`; // Displays updated score;
    feedbackElement.textContent = "Correct! :D";
  } else {
    // If incorrect, feedback renders incorrect and deducts 10 seconds from timer
    timeLeft = Math.max(timeLeft - 10, 0);
    timerCount.textContent = `Timer: ${timeLeft}`;
  }
  // Shows feedback to user if the question was correct/incorrect and is set for 1 second.
  showElement(feedbackElement);
  setTimeout(() => {
    hideElement(feedbackElement);
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      nextQuestion();
    } else {
      endGame();
    }
  }, 1000);
}
//Timer function to show time left
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerCount.textContent = `Timer: ${timeLeft}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}
//At the end of the quiz, elements are again hidden and displayed
function endGame() {
  clearInterval(timerInterval);
  answerBtns.innerHTML = "";
  hideElement(questionElement);
  hideElement(answerBtns);
  hideElement(timerCount);
  hideElement(scoreDisplay);
  hideElement(feedbackElement);
  showElement(initialsInput);
  showElement(saveScoreButton);
}
//Function to save score to local storage with initials (Limited to 2 characters)
function saveScore() {
  const initials = initialsInput.value;
  if (!initials || initials.length !== 2) {
    alert("Please enter your initials(2 characters).");
    return;
  }

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ score, initials });
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Hide the input field and button after saving, notify user the score is saved and redirect to high score page.
  hideElement(initialsInput);
  hideElement(saveScoreButton);
  feedbackElement.textContent = "Score saved!";
  showElement(feedbackElement);

  setTimeout(() => {
    window.location.href = "./highScores.html";
  }, 2000);
}

// Event listeners
startButton.addEventListener("click", startGame);
saveScoreButton.addEventListener("click", saveScore);

initializeQuiz();
