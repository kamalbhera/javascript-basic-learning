console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(9e4); // 9 * 1000
console.log(9e400);
console.log(-9e400);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*2);
console.log(-Number.MAX_VALUE*2);

// Validation
function isValidNum (num) {
    if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
        return "invalid number"
    } else return num;
}
console.log(isValidNum(9e4000));
console.log(isValidNum(9e4));
