// singleton -- when we create singleton object it is one type of its own made with constructor
// Object.create

//object literals

const mySym = Symbol("key1")


const Jsuser = {
    name: "Shauryaa",
    "full name": "Shaurya Pratap Singh",
    [mySym]: "key1",
    age: 21,
    location: "Vapi",
    email: "Shaurya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Shaurya@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "Shaurya@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user, $(this.name)`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
