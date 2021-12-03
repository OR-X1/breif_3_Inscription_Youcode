import User from "./authentification.js";

let loginForm = document.getElementById('loginForm');


let loginEmail;
let loginPassword;

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    loginEmail = document.getElementById('loginEmail').value;
    loginPassword = document.getElementById('loginPassword').value;


    console.log(loginEmail);
    
    let oneUser = new User();

    oneUser.login(loginEmail,loginPassword);
    
});