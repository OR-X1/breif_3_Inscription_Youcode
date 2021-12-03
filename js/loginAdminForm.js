import User from "./authentification.js";

let loginAdminForm = document.getElementById('loginAdminForm');


let loginAdminEmail;
let loginAdminPassword;

loginAdminForm.addEventListener('submit', function(event) {
    event.preventDefault();

    loginAdminEmail = document.getElementById('loginAdminEmail').value;
    loginAdminPassword = document.getElementById('loginAdminPassword').value;

    let oneUser = new User();

    oneUser.loginAdmin(loginAdminEmail,loginAdminPassword);

});