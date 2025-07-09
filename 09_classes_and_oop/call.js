function Setusername(username){
    // complex DB call
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    Setusername.call(this, username)
    
    this.email = email
    this.password = password
}

const tech = new createUser("tech", "tech@fb.com", "123")
console.log(tech);
