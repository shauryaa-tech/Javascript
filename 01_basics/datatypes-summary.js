//  Primitive

//  7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 3456458254698n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "Ironman", "Superman"]
let myObj = {
    name: "Shaurya",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof scoreValue)





// *********************************************************************************************************

// Stack(Primitivr), Heap (Non-Primitivr)

let myName = "Shaurya"

let anotherName = myName
anotherName = "Lav"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shaurya@google.com"

console.log(userOne.email);
console.log(userTwo.email);
