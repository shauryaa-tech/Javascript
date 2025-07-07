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
myHero.shaurya()
myHero.heyShaurya()
heroPower.heyShaurya()