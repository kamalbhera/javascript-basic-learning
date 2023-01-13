// undefined in javascript
// if we declare a variable with var or let keyword and never assign any vlaue, the value of this variable will be undefined. Means undefined indicates that a variable that has not been assigned a value or not declared at all.
let favLanguage;
console.log(favLanguage) // undefined
console.log(name) // undefined : as name variable not even declared

// if we do not return any value from a function it'll return undefined
function add(n1, n2) {
    console.log(n1 + n2);
}
add(5, 3) 
/*
> 8
> undefined
*/

// if we call a function and do not pass the same number of parameter value, we will get undefined for the unpassed parameter
function add2(a, b) {
    console.log(a, b); // b is undefined
    const result = add2(5)
}

// if you want to access a property of an obj that don't exist in the object, then you'll get undefined
const student = {
    name: 'John',
    age: 22
}
console.log(student.roll); // undefined

// other examples
let fun = undefined;
console.log(fun); // undefined

let ages = [5, 6, 2];
console.log(ages[11]) // undefined


// null
// It's an assignment value which indicates that variable points to no object.
// null value is primitive value that represents the null, empty or non-exixtent reference.
// Converted to zero while performing primitive operations
let userName = null
