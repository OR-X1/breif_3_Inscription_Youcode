export default class User {
    
    constructor(){
        // this.fname = fname;
        // this.lname = lname;
        // this.dateN = dateN;
        // this.cin = cin;
        // this.email = email;
        // this.refLogin = refLogin;
        // this.password = password;
    }

    refLoginRandom(firstname,lastname,cin){
        return firstname.charAt(0) + lastname.charAt(0) + cin + Math.floor(Math.random() * (9999 - 0 + 1) );
    }

    passwordRandom(){
        return (Math.random() + 1).toString(36).substring(7);
    }

    register(fname,lname,dateN,cin,email,refLogin,password){

        

        let user = {
            "LastName": fname, 
            "FirstName": lname,
            "dateN": dateN,
            "CIN": cin,
            "email": email,
            "refLogin": refLogin,
            "password": password
            }
            console.log(user);

        fetch('http://localhost:5000/Users', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user)
     })

    }

    login(loginEmail,loginPassword){
        // fetch('http://localhost:5000/Users', {
        //     method: 'GET'
        // }).then(
        //         response => response.json()
        //     ).then(result => {
        //         console.log(result);
        //         // sessionStorage.setItem("idUser", result[0]);
        //         // sessionStorage.setItem("idRole", result[1]);
                
        //         // if (sessionStorage.getItem('idRole') == 2) {
        //         //     document.location.href = "../view/espaceClient.html"
        //         // } else if (sessionStorage.getItem('idRole') == 3) {
        //         //     document.location.href = "../view/profile.html"
                    
        //         // }
        //     })


            fetch('http://localhost:5000/Users')
                .then(function(response) {
            // response.json() returns a promise, use the same .then syntax to work with the results
                    response.json().then(function(users){
                        // users is now our actual variable parsed from the json, so we can use it
                        users.forEach(function(user){
                        // console.log(user.LastName)

                        if(loginEmail == user.LastName){
                                console.log('login');
                        }else{
                            console.log('noooo');
                        }

                        });
                    });
            }).catch(err => console.error(err));



     

    }


}