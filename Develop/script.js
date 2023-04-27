var questiondisplay = document.querySelector("#quizpage")
var welcomepage = document.querySelector("#welcomepage")
var startbtn = document.querySelector("#startbtn")

console.log(startbtn)


var questions = [
  { question: "What is JavaScript?", 
    answers: ["A markup language", "A programming language", "A stylesheet language", "A database language"], 
    correctAnswer: "A programming language" },

  { question: "What is the correct syntax for a JavaScript comment?", 
    answers: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/", "#This is a comment"], 
    correctAnswer: "//This is a comment" },

  { question: "Which statement is used to declare a variable?", 
  answers: ["let", "var", "const", "All of the above"], 
  correctAnswer: "All of the above" },

  { question: "Which data type is used to represent decimal numbers?", 
  answers: ["String", "Number", "Boolean", "Undefined"], 
  correctAnswer: "Number" },

  { question: "What does the '===' operator do in JavaScript?", 
    answers: ["Checks if two values are equal", "Checks if two values are equal and of the same type", "Checks if two values are not equal", "Checks if two values are not equal and of the same type"], 
    correctAnswer: "Checks if two values are equal and of the same type" },

  { question: "Which statement is used to create a loop?", 
    answers: ["if", "else", "while", "for"], 
    correctAnswer: "for" }
];


function letsgo () {
  startbtn.style.display = "none"
  // need to display questions

  //timer starts
  timerInterval = setInterval(function() {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if(timeLeft === 0) {
      clearInterval(timerInterval);
      showScore();
    }
  }, 1000);
quizBody.style.display = "block";
}

  return;
}


startbtn.addEventListener("click", letsgo)


// 1. Add query selector to start button
// 2. add event listener to remove start button when clicked
// 3. Create function to remove #welcomepage
