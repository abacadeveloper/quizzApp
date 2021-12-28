const quizData = [
    {
        question: 'How old are you?',
        a: '10',
        b: '24',
        c: '34',
        d: '38',
        correct: 'c'

    }, {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question: 'What is el castillo?',
        a: 'A castle',
        b: 'A pyramid',
        c: 'A fairytale',
        d: 'A tv show',
        correct: 'b'
    }, {
        question: 'What HTML stands for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Type Makeup Language',
        c: 'Hyper Programming Language',
        d: 'It is an API',
        correct: 'a'
    }, {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbitBtn = document.getElementById("submit");


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
      const answerEls = document.querySelectorAll('.answer');

      let answer = undefined;

      answerEls.forEach((answerEl) => {
          if(answerEl.checked) {
             answer =  answerEl.id;
          };
      });

     return answer
  }

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;

    });
}


  sumbitBtn.addEventListener('click', () => {
      //check to see the answer
      const answer = getSelected();

      if(answer) {
          if(answer === quizData[currentQuiz].correct){
              score++;
          }
        currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                quiz.innerHTML = `<h2>You answer correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`
            }

    }
  });