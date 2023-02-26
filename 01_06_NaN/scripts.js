let a = 5;
let b = "value";
console.log(a * b);
if (!isNaN(a * b)) {
  console.log("Valid", a * b);
} else {
  console.log("Invalid");
}
console.log(NaN === NaN); // false
console.log(isFinite(a * b));
// checks for NaN and Infinite
console.log(isFinite(9e400));
// Checks for valid number
console.log(isNaN(9e400));
