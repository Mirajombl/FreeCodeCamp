console.log(String.fromCharCode(66));

let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7);

console.log(result);  // true

let message = "JavaScript is great!";
let result2 = message.includes("script");
console.log(result2);

let text2 = "JavaScript is awesome!";
let result3 = text2.slice(0, 9);

console.log(result3);

let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);