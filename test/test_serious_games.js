// import Test from "./tests.js";

// let quizs = ["Q1","Q2","Q3"];

// document.getElementById('');
// document.getElementById('');


//  let testSeriousGame = new Test;
//  testSeriousGame.getAnswer(quizs[0], serious_games_reponce);



let SeriousGameForm = document.getElementById('SeriousGameForm');

let question;
let serious_games_reponce;

SeriousGameForm.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // let testSeriousGame = new Test;
    question = "Q2";
    serious_games_reponce =  document.getElementById('serious_games_reponce');
    serious_games_quistion =  document.getElementById('serious_games_quistion');
    serious_games_quistion.innerHTML = question;

    sessionStorage.setItem('SeriousGame',question);
    sessionStorage.setItem('SeriousGameAnswer',serious_games_reponce.value);


    
    
    location.replace("http://localhost:3000/test/motivation.html")
});