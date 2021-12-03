import User from "./authentification.js";



let registerForm = document.getElementById('registerForm');


let firstname;
let lastname;
let datenaissance;
let cin;
let email;
let refLogin;
let password;




registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    firstname = document.getElementById('fname').value;
    lastname = document.getElementById('lname').value;
    datenaissance = document.getElementById('daten').value;
    cin = document.getElementById('cin').value;
    email = document.getElementById('email').value;



    
    let oneUser = new User();
    
    refLogin = oneUser.refLoginRandom(firstname,lastname,cin);
    password = oneUser.passwordRandom();

    oneUser.register(firstname,lastname,datenaissance,cin,email,refLogin,password);
    
    location.replace("http://localhost:3000/auth/login.html")
});