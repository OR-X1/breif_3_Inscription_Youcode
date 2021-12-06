
let administration = document.getElementById('administration');


let administration_quistion_1;
let administration_reponce_1;

let administration_quistion_2;
let administration_reponce_2;

let administration_quistion_3;
let administration_reponce_3;


question_administration_1 = "Q1";
    administration_quistion_1 =  document.getElementById('administration_quistion_1');
    administration_reponce_1 =  document.getElementById('administration_reponce_1');
    administration_quistion_1.innerHTML = question_administration_1;

    question_administration_2 = "Q2";
    administration_quistion_2 =  document.getElementById('administration_quistion_2');
    administration_reponce_2 =  document.getElementById('administration_reponce_2');
    administration_quistion_2.innerHTML = question_administration_2;

    question_administration_3 = "Q3";
    administration_quistion_3 =  document.getElementById('administration_quistion_3');
    administration_reponce_3 =  document.getElementById('administration_reponce_3');
    administration_quistion_3.innerHTML = question_administration_3;


    administration.addEventListener('submit', function(event) {
    event.preventDefault()
    
    // let testSeriousGame = new Test;

    let administrationResponses = {
        "reponce_1" : administration_reponce_1.value,
        "reponce_2" : administration_reponce_2.value,
        "reponce_3" : administration_reponce_3.value
    }

    sessionStorage.setItem('administration',JSON.stringify(administrationResponses));
    // sessionStorage.setItem('motivationAnswer',administration_reponce_1.value);
    
    location.replace("http://localhost:3000/test/test_technique.html")
});