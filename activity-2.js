// Activity 2: Functions with Single Parameter to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
// function greet(name) {
//     return "Hello, " + name + "!";
// }
// Convert to arrow function:
const greet = name => "Hello, " + name + "!";
console.log(greet("John"));
// Problem 2
// function square(number) {
//     return number * number;
// }
// Convert to arrow function:
const square = number => number*number;
console.log(square(12));

// Problem 3
// function double(value) {
//     return value * 2;
// }
// Convert to arrow function:
const double = value => value*2;
console.log(double(20));

// Problem 4
// function isEven(num) {
//     return num % 2 === 0;
// }
// Convert to arrow function:
const isEven = num => num % 2 === 0;
console.log(isEven(13))

// Problem 5
// function capitalize(str) {
//     return str.toUpperCase();
// }
// Convert to arrow function:
const capitalize = str => str.toUpperCase();
console.log(capitalize("listen!"))
// Problem 6
// function getLength(text) {
//     return text.length;
// }
// Convert to arrow function:
const getLength = text => text.length;
console.log(getLength("fear"));

// Problem 7
// function addOne(x) {
//     return x + 1;
// }
// Convert to arrow function:
const addOne = x => x+1
console.log(addOne(45))
// Problem 8
function isPositive(n) {
    return n > 0;
}
// Convert to arrow function:


// Problem 9
// function reverseString(s) {
//     return s.split("").reverse().join("");
// }
// Convert to arrow function:
const reverseString = s => s.split("").reverse().join("");
console.log(reverseString("abcdefghijklmnopqrstuvwxyz"));
// Problem 10
// function getType(value) {
//     return typeof value;
// }
// Convert to arrow function:
const getType = value => typeof value;
console.log(getType(980));