// Activity 5: Advanced Arrow Function Conversions
// Convert each function below to an arrow function (including nested functions)

// Problem 1
// function createMultiplier(factor) {
//     return function(number) {
//         return number * factor;
//     };
// }
// Convert to arrow function (convert both outer and inner functions):
const createMultiplier = (factor) => {
    return (number) => {
        return number * factor;
    };
};

// Problem 2
// function processArray(arr, callback) {
//     return arr.map(function(item) {
//         return callback(item);
//     });
// }
// Convert to arrow function (convert both outer and inner functions):
const processArray = (arr, callback) => {
    return arr.map((item) => callback(item))
}

// Problem 3
// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }
// Convert to arrow function (convert both outer and inner functions):
const createCounter = () => {
    let count=0;
    return () => {
        count++
        return count
    }
}

// Problem 4
// function sortByProperty(objects, property) {
//     return objects.sort(function(a, b) {
//         return a[property] - b[property];
//     });
// }
// Convert to arrow function (convert both outer and inner functions):
const sortByProperty = (objects, property) => {
    return objects.sort((a,b) => a[property] - b[property])
}

// Problem 5
// function filterAndMap(numbers) {
//     return numbers
//         .filter(function(num) {
//             return num > 0;
//         })
//         .map(function(num) {
//             return num * 2;
//         });
// }
// Convert to arrow function (convert all functions):
const filterAndMap = (numbers) => {
    return numbers
    .filter((num) => num > 0)
    .map((num) => num * 2)
}

// Problem 6
// function createValidator(min, max) {
//     return function(value) {
//         return value >= min && value <= max;
//     };
// }
// Convert to arrow function (convert both outer and inner functions):
const createValidator = (min, max) => {
    return value => value >= min && value <= max
}

// Problem 7
// function processData(data, transform) {
//     return data.reduce(function(acc, item) {
//         acc.push(transform(item));
//         return acc;
//     }, []);
// }
// Convert to arrow function (convert both outer and inner functions):
const processData = (data, transform) => {
    return data.reduce((acc, item) => {
        acc.push(transform(item))
        return acc
        }, [])
    }

// Problem 8
// function createAdder(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         };
//     };
// }
// Convert to arrow function (convert all nested functions):
const createAdder = x => {
    return y => {
        return z => x + y + z
    }
}

// Problem 9
// function groupBy(array, keyFn) {
//     return array.reduce(function(groups, item) {
//         const key = keyFn(item);
//         if (!groups[key]) {
//             groups[key] = [];
//         }
//         groups[key].push(item);
//         return groups;
//     }, {});
// }
// Convert to arrow function (convert both outer and inner functions):
const groupBy = (array, keyFn) => {
    return array.reduce((groups, item) => {
        const key = keyFn(item);
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
};

// Problem 10
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
// Convert to arrow function (convert both outer and inner functions):
const compose = (f,g) => {
    return (x) => f(g(x))
}
