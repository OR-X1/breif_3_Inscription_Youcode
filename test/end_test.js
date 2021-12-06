import Test from './tests.js';


let submit = document.getElementById('submit');



submit.addEventListener('click', function(event) {
    event.preventDefault()
    


    let id = sessionStorage.getItem('id');
    let firstname = sessionStorage.getItem('FirstName');
    let lastname = sessionStorage.getItem('LastName');
    let score = sessionStorage.getItem('score');
    let seriousgame = sessionStorage.getItem('SeriousGameAnswer');
    let seriousgameresponce = sessionStorage.getItem('SeriousGame');
    let motivation = sessionStorage.getItem('motivation');
    let motivationresponce = sessionStorage.getItem('motivationAnswer');
    // let administration = sessionStorage.getItem('administration',JSON.stringify(administrationResponses));;
    let administrationresponce =  sessionStorage.getItem('administration');
    let technique =sessionStorage.getItem('test_technique') ;
    let techniqueresponce = sessionStorage.getItem('test_technique_Answer');


    let test = new Test(); 

    test.getAnswer(id, firstname, lastname, score, seriousgame, seriousgameresponce, motivation, motivationresponce, administrationresponce, technique, techniqueresponce)

    location.replace("http://localhost:3000/index.html")
});