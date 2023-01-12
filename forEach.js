

const numbers = [3, 2, 6, 4, 7, 8];
// Foreach are not return anything 
const result = numbers.forEach((item) => item*2);
console.log(result); // undefined
console.log(numbers); // [ 3, 2, 6, 4, 7, 8 ]

// 2.
let output = [];
numbers.forEach((item) => output.push(item*2));
console.log(output);
// [ 6, 4, 12, 8, 14, 16 ]