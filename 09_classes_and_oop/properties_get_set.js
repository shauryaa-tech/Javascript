function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCsse()
        },
        set: function(value){
            this._password = value
        }
    })

}

const tech = new User("sps@ai", "tech")

console.log(tech.email);