// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }

// const tech = new User("tech", "tech@gmail.com", "123")

// console.log(tech.encryptPassword());
// console.log(tech.changeUsername());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const war = new User("war", "war@gmail.com", "123")

console.log(war.encryptPassword());
console.log(war.changeUsername());