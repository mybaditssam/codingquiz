// All global variables
var questiondisplay = document.querySelector('#quizpage');
var welcomepage = document.querySelector('#welcomepage');
var startbtn = document.getElementById('startbtn');
var quizTimer = document.querySelector('#timer');
var finalScore = document.querySelector('finalScore')
var highscoreInput = document.getElementById('initials')
var timeLeft = 60;
var codingquiztitle = document.querySelector('h1');
var btnA = document.getElementById('a');
var btnB = document.getElementById('b');
var btnC = document.getElementById('c');
var btnD = document.getElementById('d');
var quizMain = document.getElementById('quiz');
var score = 0;
var result = document.getElementById('result')
var correct;
var gameover = document.getElementById('gameoverDiv')

//console log to check if selectors are working
console.log(startbtn);


var questions = [
  {
    question: 'What is JavaScript?',
    answer1: 'A markup language',
    answer2: 'A programming language',
    answer3: 'A stylesheet language',
    answer4: 'A database language',
    correctAnswer: 'A programming language'
  },
  {
    question: 'What is the correct syntax for a JavaScript comment?',
    answer1: '!--This is a comment--',
    answer2: '//This is a comment',
    answer3: '/*This is a comment*/',
    answer4: '#This is a comment',
    correctAnswer: '//This is a comment'
  },
  {
    question: 'Which statement is used to declare a variable?',
    answer1: 'let',
    answer2: 'var',
    answer3: 'const',
    answer4: 'All of the above',
    correctAnswer: 'All of the above'
  },
  {
    question: 'Which data type is used to represent decimal numbers?',
    answer1: 'String',
    answer2: 'Number',
    answer3: 'Boolean',
    answer4: 'Undefined',
    correctAnswer: 'Number'
  },
  {
    question: 'What does the === operator do in JavaScript?',
    answer1: 'Checks if two values are equal',
    answer2: 'Checks if two values are equal and of the same type',
    answer3: 'Checks if two values are not equal',
    answer4: 'Checks if two values are not equal and of the same type',
    correctAnswer: 'Checks if two values are equal and of the same type'
  },
  {
    question: 'Which statement is used to create a loop?',
    answer1: 'if',
    answer2: 'else',
    answer3: 'while',
    answer4: 'for',
    correctAnswer: 'for'
  }
];

var lastquestion = questions.length;
var questionON = 0;
var questiontext = document.getElementById('questions');
// will keep track of user highscores
let highScores = [];

function displayquestion () {
  var currentQuestion = questions[questionON];
  console.log(currentQuestion)
  questiontext.innerHTML = '<p>' + currentQuestion.question + '</p>';
  btnA.innerHTML = currentQuestion.answer1;
  btnB.innerHTML = currentQuestion.answer2;
  btnC.innerHTML = currentQuestion.answer3;
  btnD.innerHTML = currentQuestion.answer4;
}

// hides h1, Start Quiz btn && begins quiz/timer
function letsgo () {
  startbtn.style.display = 'none'
  codingquiztitle.style.display ='none'
  displayquestion();
 

  timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = 'Time left: ' + timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
  quizMain.style.display = 'block'
}

function showScore(){
  quizMain.style.display = 'none';
  gameover.style.display = 'flex';
  clearInterval(timerInterval);
  highscoreInput.value = '';
  finalScore.textContent =  score + " out of " + questions.length + 'questions correct';
}

function checkAnswer(answer) {
  var currentQuestion = questions[questionON];
  console.log (currentQuestion)
  var correct = currentQuestion.correctAnswer;
  console.log(correct)

  if (answer.textContent === correct && questionON !== lastquestion - 1){
    score++;
      result.textContent ='You are Correct!'
      result.setAttribute('style','color:lightgreen')
    questionON++;
    displayquestion()
  } 
    else if (answer.textContent !== correct && questionON !== lastquestion - 1){
        result.textContent ='You are Incorrect'
        result.setAttribute('style','color:red')
      timeLeft -= 5;
    questionON++;
    displayquestion();
  
  } 
    else {
    showScore()
    clearInterval(timerInterval);
    
  }
}


startbtn.addEventListener('click', letsgo)
