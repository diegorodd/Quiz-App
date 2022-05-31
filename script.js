// my questions for the quiz //
const quizData = [
    {
      question: "Which country is luis Diaz from?",
      a: "brazil",
      b: "chile",
      c: "colombia",
      correct: "c",
    },
    {
      question: "Where is Loniel Messi from?",
      a: "peru",
      b: "colombia",
      c: "argentina",
      correct:"c",
    }, 
    {
      question: "The next World Cup will be hosted where?",
      a: "qatar",
      b: "brazil",
      c: "spain",
      correct: "a",
    },
  
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer') 
  const questionEL = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const submitBtn = document.getElementById('submit')

  var clock = document.getElementById('time')

  var time = quizData.length * 15;
  var timerId;
  
  let currentQuiz = 0 
  let score = 0 

  loadQuiz()

function loadQuiz() {

    // setting the seconds on the timer//
    if(currentQuiz === 0){
    timerId = setInterval(clockStart, 1000);
    }
    clock.textContent = time;



  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEL.textContent = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
}

function clockStart() {
    time--;
    clock.textContent = time;
    if (time <= 0) {
        clearInterval(timerId)
    }
    
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
// trying to reduce the time of the timer when answering a question wrong//
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id 
    }

    if(time < 5){
        time - 10
    } else {
        time = 25
    }

})
return answer
}
// making sure the answers are correct //
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          console.log(answer)
        score++
      }
      currentQuiz++

      if(currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> You answered ${score}/${quizData.length} questions correctly </h2>

        <button onclick="location.reload()">Reload</button>
        ` 
        clearInterval(timerId)
        // time -= 15;
        // clock.textContent = time;
      }
    }
})

var count = 0;
// var time = 30;
var marks = 0;
var answer = [];
// var timer;


function buttons_manager(){
  if(count > 0){
    $(`#prev`).show();
    if(count == 4){
      $(`#next`).hide();
      $(`#finish`).show();
    }
    else{
      $(`#next`).show();
    }
  }
  else{
    $(`#prev`).hide();
  }
}

console.log(answer)


// function timer001() {
//   c = c -1;
//   if (c < 200) {
//     time001.innerHTML = c;
//   }

//   if ( c < 1 ) {
//     window.clearInterval(update);
//   }
// }

// update = setInterval ("timer001()", 1000);
