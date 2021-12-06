class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }


  }



/* export default  class Test {
    constructor(text, answer) {
      this.text = text;
      this.answer = answer;
    }

    getAnswer(text, answer){

      let test = {
          "question": text, 
          "answer": answer,
          
          }

      fetch('http://localhost:5000/Users', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(test)
   })

  }

  } */
  let questions = [
    new Question("Question 1", ["choix1", "choix2", "choix3", "choix4"], "choix1"),
    new Question("Question 2", ["choix1", "choix2", "choix3", "choix4"], "choix2"),
    new Question("Question 3", ["choix1", "choix2", "choix3", "choix4"], "choix3"),
    new Question("Question 4", ["choix1", "choix2", "choix3", "choix4"], "choix4"),
    new Question("Question 5", ["choix1", "choix2", "choix3", "choix4"], "choix1")
  ];
  
  console.log(questions);
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
        // return this.score;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  }
  
  // Regroup all  functions relative to the App Display
  const display = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
      this.elementShown("quiz", endQuizHTML);
      sessionStorage.setItem('score',quiz.score);


      // next test --------
      if(quiz.score == quiz.questions.length){
        setTimeout(() => {
          location.replace("http://localhost:3000/test/serious_games.html");
        }, 2000);
      }
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // display choices and handle guess
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    //   this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
      document.getElementById('chartScor').style.width=  (currentQuestionNumber - 1) *100 / quiz.questions.length + "%";
      document.getElementById('scoreNumber').innerHTML=  (currentQuestionNumber - 1) *100 / quiz.questions.length + "%";
    },
    
  };
  
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  // sessionStorage.setItem('score',quiz.score);
  console.log(sessionStorage.getItem('score'));


  
  console.log(quiz);

  


  
  