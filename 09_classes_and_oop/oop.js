const user = {
    username: "shaurya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
    
}



// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    } 

    return this 
}

const userOne = new User("Shaurya", 12, true)  // after writing new it create new object
const userTwo = new User("Shaurya-tech", 11, false)
console.log(userOne.constructor);
// console.log(userOne);
// console.log(userTwo);