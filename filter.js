const numbers = [3, 2, 6, 4, 7, 8];
// Filter are use to specific condition we can define and return value as your condition 
const evenNum = numbers.filter((item) => item % 2 === 0);
console.log(evenNum); // undefined

// 2.
const oddNum = numbers.filter((item) => item % 2 === 0);
console.log(oddNum);
// [ 6, 4, 12, 8, 14, 16 ]