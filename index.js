function sumWithArgument(arr) {
    const args = arguments;
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
        
    }
    return sum
}
let result = sumWithArgument(1,2,3,4,5,6,7,8);
console.log(result); // 38