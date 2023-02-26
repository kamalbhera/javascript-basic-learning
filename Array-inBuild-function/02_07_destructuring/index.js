let [a, , c, d] = [1, 2, 3, 4];
console.log(a, c, d); // 1,3,4

// Swap using destructuring without using third variable
let a1 = 4;
let b1 = 5;
[a1, b1] = [b1, a1];
console.log(a1, b1); // 5, 4

// Destructuring + Rest operator
let arr = [1, 2, 3, 4, 5, 6];
let [x, ...y] = arr;
console.log(x, y); // 1 [2, 3, 4,5,6]

// Default value while destructuring
let arr1 = [1, 2];
let [a3, b3, c3 = 5] = arr1;
console.log(a3, b3, c3);
