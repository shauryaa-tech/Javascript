// let myName = "shaurya    "
// let myChannel = "shaurya-tech     "

// console.log(myName.truelength);


let myHero = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shaurya = function(){
    console.log(`shaurya is present in all objects`)
}

Array.prototype.heyShaurya = function(){
    console.log(`Shaurya says hello`)
}

// heroPower.shaurya()
// myHero.shaurya()
// myHero.heyShaurya()
// heroPower.heyShaurya()

// inheritance

const User = {
    name: "shaurya",
    email: "shaurya@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ShauryawithCode       "

String.prototype.trueLength =  function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"shaurya".trueLength()
"iceTea".trueLength()