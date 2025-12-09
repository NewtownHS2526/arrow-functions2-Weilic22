// Activity 3: Functions with Multiple Parameters to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
// function add(a, b) {
//     return a + b;
// }
// Convert to arrow function:
const add = (a, b) => a + b;
console.log(add(6,2));
// Problem 2
// function multiply(x, y) {
//     return x * y;
// }
// Convert to arrow function:
const multiply = (x,y) => x*y;
console.log(multiply(5,9));
// Problem 3
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// Convert to arrow function:
const subtract = (num1, num2) => num1-num2;
console.log(subtract(6,1));
// Problem 4
// function divide(dividend, divisor) {
//     return dividend / divisor;
// }
// Convert to arrow function:
const divide = (dividend, divisor) => dividend / divisor;
console.log(divide(10, 2));
// Problem 5
// function greet(firstName, lastName) {
//     return "Hello, " + firstName + " " + lastName;
// }
// Convert to arrow function:
const greet = (firstName, lastName) => "Hello, " + firstName + " " + lastName;
console.log(greet("John", "Bay"));
// Problem 6
// function findMax(a, b) {
//     return a > b ? a : b;
// }
// Convert to arrow function:
const findMax = (a,b) => a > b ? a : b;
console.log(findMax(8,10));
// Problem 7
// function findMin(x, y) {
//     if (x < y) {
//         return x;
//     }
//     return y;
// }
// Convert to arrow function:
const findMin = (x, y) => x < y ? x : y;
console.log(findMin(9,10));
// Problem 8
// function concatenate(str1, str2) {
//     return str1 + str2;
// }
// Convert to arrow function:
const concatenate = (str1, str2) => str1 + " " + str2;
console.log(concatenate("Hi", "bro!"));
// Problem 9
// function power(base, exponent) {
//     return Math.pow(base, exponent);
// }
// Convert to arrow function:
const power = (base, exponent) => Math.pow(base, exponent);
console.log(power(6,3));
// Problem 10
// function calculateArea(length, width) {
//     return length * width;
// }
// Convert to arrow function:
const calculateArea = (length,width) => length * width;
console.log(calculateArea(19,13));
