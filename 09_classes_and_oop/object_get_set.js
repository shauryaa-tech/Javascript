const User = {
    _email: 'sps@.ai',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tech = Object.create(User)
console.log(tech.email);
