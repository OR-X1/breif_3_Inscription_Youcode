class User {
    
    constructor(fname,lname,dateN,cin,email){
        this.fname = fname;
        this.lname = lname;
        this.dateN = dateN;
        this.cin = cin;
        this.email = email;
    }

    register(){

        let user = {
            "LastName": this.fname, 
            "FirstName": this.lname,
            "dateN": this.dateN,
            "CIN": this.cin,
            "email": this.email
            }

        fetch('http://localhost:5000/Users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
     })

    }


}



let registerForm = document.getElementById('registerForm');


let firstname = document.getElementById('fname').value;
let lastname = document.getElementById('lname').value;
let datenaissance = document.getElementById('daten').value;
let cin = document.getElementById('cin').value;
let email = document.getElementById('email').value;


registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

   


    let oneUser = new User(firstname,lastname,datenaissance,cin,email);

    oneUser.register();
})


var mok;