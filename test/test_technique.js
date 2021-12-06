
let test_technique = document.getElementById('test_technique');


let question_motivation;
let serious_games_reponce;


test_technique.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // let testSeriousGame = new Test;
    question_test_technique = "Q1";
    test_technique_reponce =  document.getElementById('test_technique_reponce');
    test_technique_quistion =  document.getElementById('test_technique_quistion');
    test_technique_quistion.innerHTML = question_test_technique;

    sessionStorage.setItem('test_technique',question_test_technique);
    sessionStorage.setItem('test_technique_Answer',test_technique_reponce.value);


    
    
    location.replace("http://localhost:3000/test/end_test.html")
});