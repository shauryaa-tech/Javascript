class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tech = new Teacher("tech", "tech@teacher.com", "123")

tech.addCourse()
const war = new User("WarTech")

war.logMe()

console.log(tech instanceof User);