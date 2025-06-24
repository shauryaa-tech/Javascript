// // if
// const isUserLoggedIn = true
// const tempreature = 41

// if ( tempreature === 40 ){
//     console.log("less than 50");   
// } else{
//     console.log("tempreature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// // if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");

// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2) {
    console.log("allow to buy courses");  
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");   
}