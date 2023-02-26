function sum(...args) {
  console.log(args);
}

sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5);

// if multiple params are passed, rest params must comes at end
function sum2(a, ...args) {
  console.log(a, args);
}

sum2(1, 2, 3, 4);
sum2(1, 2, 3, 4, 5);

function sum3() {
  console.log(arguments); // array like object
  console.log(arguments[0]);
}

sum3(1, 2, 3, 4);
sum3(1, 2, 3, 4, 5);

// arguments does not work with arrow fn
const sum4 = () => {
  console.log(arguments); // array like object
  console.log(arguments[0]);
};

sum4(1, 2, 3, 4);
sum4(1, 2, 3, 4, 5);

let arr1 = [4, 78, 90, 154];
console.log(Math.max(...arr1));
