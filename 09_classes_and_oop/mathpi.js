const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewObject = Object.create(null)

const tech = {
    name: 'war-tech',
    price: 3000,
    isAvailable: true,

    placeOrder: function(){
        console.log("Order not placed");   
    }
}

console.log(Object.getOwnPropertyDescriptor(tech, "name"));

Object.defineProperty(tech, 'name', {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(tech, "name"));

for (let [key, value] of Object.entries(tech)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`)
    }
}