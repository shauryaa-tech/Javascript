const name = "Shaurya"
const repoCount = 7

// console.log(name + repoCount + " Value");

console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Shaurya-hhhc')

console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne =  "     Shaurya      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shaurya.com/shaurya%20singh"
console.log(url.replace('%20', '_'));

console.log(url.includes('shaurya'));

console.log(gameName.split('_'));
