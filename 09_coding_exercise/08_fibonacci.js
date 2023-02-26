const fibonacci = (n) => {
  // Two base cases
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    // One recursion
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};

console.log(fibonacci(12)); // 144 fibonacci based on index, to get only the number

const logAllFibonacci = (n) => {
  let a = 0;
  let b = 1;
  let fn = a + b;
  let resultArr = [0];
  do {
    resultArr.push(fn);
    fn = a + b;
    a = b;
    b = fn;
  } while (fn < n);
  return(resultArr)
};
console.log(logAllFibonacci(12)); // fibonacci based on number

const logAllFibonacci2 = (n) => {
    let a = 0;
    let b = 1;
    let fn = a + b;
    let count = 0;
    let resultArr = [0];
    do {
      resultArr.push(fn);
      fn = a + b;
      a = b;
      b = fn;
      count++;
    } while (count < n);
    return(resultArr)
  };
  console.log(logAllFibonacci2(12)); // fibonacci based on index