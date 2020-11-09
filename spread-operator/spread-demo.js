const numbers = [1, 2, 3];

// 1. ajouter un nombre avec push
// numbers.push(4);

// 2a. ajouter un nombre avec concat
//     façon ES5
const newNumbers = numbers.concat(4);
console.log(numbers, newNumbers);

// 2b. ajouter un nombre avec le spread operator ...
//     façon ES6
const newNumbers2 = [...numbers, 4];
console.log(newNumbers2);