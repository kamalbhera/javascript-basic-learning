// No complie timer error - Run time error
// let a = 10;
// console.log(a);
// // The error will not let run code further
// letb = 11;
// console.log(b);

try {
  let a = 10;
  console.log(a);
  letb = 11;
  console.log(b);
} catch (err) {
  // err: Error obj with properties: name, message, stack
  console.log("Error found");
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}

// Custom Errors
// 1. Error class
console.log("=== Custom Errors ===");
let age = 16;
const ageErr = new Error("Invalid age");
try {
  if (age < 18) {
    throw ageErr;
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.error(err.message);
}

console.log("=== Custom Errors: TypeError ===");
const ageTypeErr = new TypeError("Invalid age");
try {
  if (age < 18) {
    throw ageTypeErr;
  } else {
    console.log("Valid age");
  }
} catch (err) {
  console.log(err.name);
  console.error(err.message);
} finally {
    console.log("always executes")
}
