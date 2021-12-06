
let motivation = document.getElementById('motivation');


let question_motivation;
let serious_games_reponce;


motivation.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // let testSeriousGame = new Test;
    question_motivation = "Q1";
    motivation_reponce =  document.getElementById('motivation_reponce');
    motivation_quistion =  document.getElementById('motivation_quistion');
    motivation_quistion.innerHTML = question_motivation;

    sessionStorage.setItem('motivation',question_motivation);
    sessionStorage.setItem('motivationAnswer',motivation_reponce.value);


    
    
    location.replace("http://localhost:3000/test/test_administration.html")
});