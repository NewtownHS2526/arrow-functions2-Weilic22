// Activity 4: Functions with Complex Logic to Arrow Functions
// Convert each function below to an arrow function

// Problem 1
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     return false;
// }
// Convert to arrow function:
const isAdult = age => age >= 18;
console.log(isAdult(21));
// Problem 2
// function getGrade(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else {
//         return "F";
//     }
// }
// Convert to arrow function:
const getGrade = (score) => {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}
console.log(getGrade(74));
// Problem 3
// function calculateTotal(items) {
//     let total = 0;
//     for (let i = 0; i < items.length; i++) {
//         total += items[i];
//     }
//     return total;
// }
// Convert to arrow function:
const calculateTotal = (items) => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total += items[i];
    }
    return total;
}
console.log(calculateTotal(2,3,5,7,2,3,5));
// Problem 4
// function filterEvenNumbers(numbers) {
//     return numbers.filter(function(num) {
//         return num % 2 === 0;
//     });
// }
// Convert to arrow function (convert both outer and inner functions):
const filterEvenNumbers = (numbers) => {
    return numbers.filter((num) => num % 2 === 0)
}
console.log("Even numbers: " + filterEvenNumbers([9,1,2,3,4,5,6,7,8,10]));

// Problem 5
// function mapToSquares(arr) {
//     return arr.map(function(x) {
//         return x * x;
//     });
// }
// Convert to arrow function (convert both outer and inner functions):
const mapToSquares = (arr) => {
    return arr.map((x) => x*x)
}
console.log("Map to squares numbers: " + mapToSquares([2,4,6,8,10]));
// Problem 6
// function findLongestWord(words) {
//     let longest = "";
//     words.forEach(function(word) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     });
//     return longest;
// }
// Convert to arrow function (convert both outer and inner functions):
const findLongestWord = (words) => {
    let longest = ""
    words.forEach((word) => {
        if (word.length > longest.length) {
            longest = word
        }
    })
    return longest
}
console.log(findLongestWord(["red", "blue", "green", "purple"]))
// Problem 7
// function sumArray(numbers) {
//     return numbers.reduce(function(acc, num) {
//         return acc + num;
//     }, 0);
// }
// Convert to arrow function (convert both outer and inner functions):
const sumArray = (numbers) => {
    return numbers.reduce((acc,num) => acc + num,0)
}
console.log(sumArray([1,2,3,4,5,6]))

// Problem 8
// function getInitials(firstName, lastName) {
//     return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
// }
// Convert to arrow function:
const getInitials = (firstName,lastName) => firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
console.log(getInitials("weili", "cao"))
// Problem 9
// function checkPassword(password) {
//     if (password.length >= 8) {
//         return true;
//     }
//     return false;
// }
// Convert to arrow function:
const checkPassword = password => password.length >= 8
console.log(checkPassword("9iw92io2"))
// Problem 10
// function formatName(first, middle, last) {
//     if (middle) {
//         return first + " " + middle + " " + last;
//     }
//     return first + " " + last;
// }
// Convert to arrow function:
const formatName = (first, middle, last) => {
    if (middle) {
        return first + " " + middle + " " + last
    }
    return first + " " + last
}
console.log(formatName("John", "Paul", "Jones"))
console.log(formatName("John", "Paul"))
