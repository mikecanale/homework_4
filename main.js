var questionQuiz = document.getElementById("quiz");
var questionSubmit = document.getElementById("results");
var score = document.getElementById("score");
var timer = document.getElementById("timer");

var startQuiz = document.getElementById("start");

var score = 0;
var secondsLeft = 75;
var currentQuestionIndex = 0;

function goToNextQuestion(whatTheUserClicked) {
  var correctText = questions[currentQuestionIndex].answer;

  if (whatTheUserClicked === correctText) {
    alert("Right!!");
    score++;
  } else {
    alert("Wrong!!");
    score--;
  }
  currentQuestionIndex++;
  getNewQuestion(currentQuestionIndex);
}

function answerClickSetUp() {
  var a = document.getElementById("answer1");
  var b = document.getElementById("answer2");
  var c = document.getElementById("answer3");
  var d = document.getElementById("answer4");

  a.addEventListener("click", function() {
    goToNextQuestion(a.innerText);
  });
  b.addEventListener("click", function() {
    goToNextQuestion(b.innerText);
  });
  c.addEventListener("click", function() {
    goToNextQuestion(c.innerText);
  });
  d.addEventListener("click", function() {
    goToNextQuestion(d.innerText);
  });
}
answerClickSetUp();

startQuiz.addEventListener("click", function() {
  getNewQuestion(currentQuestionIndex);
});

var currentQuestion;
function getNewQuestion(questionIndex) {
  var question = questions[questionIndex];
  currentQuestion = question;
  var title = question.title;

  var questionEl = document.getElementById("question");
  questionEl.innerText = title;

  var choice1 = question.choices[0];
  var answerEl1 = document.getElementById("answer1");
  answerEl1.innerText = choice1;

  var choice2 = question.choices[1];
  var answerEl2 = document.getElementById("answer2");
  answerEl2.innerText = choice2;

  var choice3 = question.choices[2];
  var answerEl3 = document.getElementById("answer3");
  answerEl3.innerText = choice3;

  var choice4 = question.choices[3];
  var answerEl4 = document.getElementById("answer4");
  answerEl4.innerText = choice4;

  document.getElementById("question").innerText = title;
  document.getElementById("answer1").innerText = choice1;
  document.getElementById("answer2").innerText = choice2;
  document.getElementById("answer3").innerText = choice3;
  document.getElementById("answer4").innerText = choice4;
}

/*****
   * Simple timer: setInterval

HTML HEADING - Coding Quiz Challenge
HTML Paragraph - Try to answer the following code related questions within the time limit. Keep in mind that incorrect will penalize your score time by ten seconds. 
HTML BUTTON - Start Quiz

HTML Questions (are headers or paragraphs) & Answers (answers are buttons)
HTML <hr>  Correct!
HTML <hr> Wrong! 


Psudocode: 

Step 1 - Coding Quiz Challenge! 
The user clicks the start button which does three things immediately: 
it starts the 75 second clock
It clears the “Coding Quiz Challenge!” Message
It presents the first multiple choice question (1 out of 10)

Step 2 - Questions
The user reads the question and clicks an answer button (1 of 4) which sets more in motion: 
if the answer is correct a message will show up stating “Correct” (and the timer will continue to count down, one second at a time)
else, if the answer is incorrect a message will show up stating “Wrong” (and the timer will lose ten seconds and then continue to count down, one second at a time)
Correct or Incorrect, whichever the answer, the question will disappear and the next question will present itself.
This process will repeat itself until 1 of two things happen (and then the quiz will end): 
	A) The user answers all 10 of the questions
	B) The 75 second clock runs out

Step 3 - Quiz Ending
A note that says “ALL DONE” pops up and your score is given. The score is how much time you have left on the 75 second clock. If you ran out of time, your score will be zero. 
a box will appear and the user will enter their initials and press the submit button. 
Next “HIGH SCORES” will appear with the user’s initials next to their score in a list of other scores. These scores and initials will be saved to localStorage. 
Finally the user must choose if they want to clear the high scores (via button) and/or go back to the beginning (via button). If they choose the “Clear Highscores” button all the high scores and initials will be deleted. If they choose to “go Back” they will return to the first screen (the beginning of step 1)
   */
