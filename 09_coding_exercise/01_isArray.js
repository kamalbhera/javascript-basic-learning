const a = [1, 2, 3, 4];
const b = { c: 1 };
console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(typeof a); // object
console.log(Object.prototype.toString.call(a));
if(Object.prototype.toString.call(a) === "[object Array]") {
    console.log("Is array")
}
if(toString.call(a) === "[object Array]") {
    console.log("Is array")
}

