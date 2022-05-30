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
  
  let currentQuiz = 0 
  let score = 0 