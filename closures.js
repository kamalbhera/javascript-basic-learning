function Closure1(a) {
    return function (b) {
        return a+b;
    }
}
let closureFunc1 = new Closure1(2);
console.log(closureFunc1(3));

// 2. Second Approach
function Closure(a) {
    function innerFunc(b) {
        return a+b;
    }
    return innerFunc;
}
let closureFunc = new Closure(2);
console.log(closureFunc(3));

// 3. Approach
function stopWatch() {
    let count =0;
    return function() {
        count++
        return count
    }
}
let clock = stopWatch();
console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());
let clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());