// comma operator
let a = 2;
a = (a++, a);
console.log(a);

// another ex.
let x = (3, 5);
console.log(x);


// comma operator use cases in for loop
let arr = [[2, 3, 5, 1], [1, 4, 8], [8, 9, 6], [10]];
for (let i = 0, j = 3; i < arr.length; i++, j--) {
	console.log(`a[${i}][${j}] - `, arr[i][j]);
}
