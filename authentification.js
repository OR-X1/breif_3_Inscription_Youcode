class User {
    
    constructor(fname,lname,dateN,cin,email,refLogin){
        this.fname = fname;
        this.lname = lname;
        this.dateN = dateN;
        this.cin = cin;
        this.email = email;
        this.refLogin = refLogin;
    }

    register(){

        let user = {
            "LastName": this.fname, 
            "FirstName": this.lname,
            "dateN": this.dateN,
            "CIN": this.cin,
            "email": this.email,
            "refLogin": this.refLogin
            }
            console.log(user);

        fetch('http://localhost:5000/Users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
     })

    }
    


}



let registerForm = document.getElementById('registerForm');


let firstname;
let lastname;
let datenaissance;
let cin;
let email;



registerForm.addEventListener('submit', function(event) {
    event.preventDefault()

    firstname = document.getElementById('fname').value;
    lastname = document.getElementById('lname').value;
    datenaissance = document.getElementById('daten').value;
    cin = document.getElementById('cin').value;
    email = document.getElementById('email').value;


    refLogin = firstname.charAt(0) + lastname.charAt(0) + cin + Math.floor(Math.random() * (9999 - 0 + 1) );
    password = Math.floor(Math.random() * (9999 - 0 + 1) )
    
   
    console.log(firstname);
    console.log(lastname);

    let oneUser = new User(firstname,lastname,datenaissance,cin,email,refLogin);

    oneUser.register();
    
    // location.replace("http://localhost:3000/auth/login.html")
})


