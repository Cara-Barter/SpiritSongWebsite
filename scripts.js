// object arrays
var yarn = [
  {
    weight: "fingering",
    photo:
    price:
    description:
  },
  {

  }
]

// yarn quiz created using the tutorial on https://simplestepscode.com/javascript-quiz-tutorial/

var myQuestions = [
  {
    question: "What is 10/2?",
    answers: {
      a: '3',
      b: '5',
      c: '115'
    },
    correctAnswer: 'b'
  },
  {
    question: "What is 30/3?",
    answers: {
      a: '3',
      b: '5',
      c: '10'
    },
    correctAnswer: 'c'
  }
];

function generateQuiz (questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions (questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // first reset the list of answers
      answers = [];

      // for each available answer to this question...
      for(letter in questions[i].answers){

        // add an HTML radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ':'
            + questions[i].answers[letter]
          + '<label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' +answers.join('') + '</div'
      );
    }
  // finally combine out output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join('');
  }

  function showResults (questions, quizContainer, resultsContainer) {

    // gather answer containers from out quiz
    var answerContainers = quizContainer.querySelectorAll('answers');

    // keep track or user's answers
    var userAnswer = '';
    var numCorrect = 0;

    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add tot he number of correct answers
        numCorrect++;

        // colour the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if the answer is wrong or blank
      else{
        // colour the answers red
        answerContainers[i].style.color = 'red';
      }
    }
  // show the number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + 'out of ' +questions.length;
  }

  // show the questions
  showQuestions (questions, quizContainer);

  // when user clicks submit, show results
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }
}

// var myQuestions = [
//   {
//     question: "What is 10/2?",
//     answers: {
//       a: '3',
//       b: '5',
//       c: '115'
//     },
//     correctAnswer: 'b'
//   },
//   {
//     question: "What is 30/3?",
//     answers: {
//       a: '3',
//       b: '5',
//       c: '10'
//     },
//     correctAnswer: 'c'
//   }
// ];

// display to html
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
