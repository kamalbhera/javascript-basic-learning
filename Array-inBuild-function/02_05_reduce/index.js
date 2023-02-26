const arr = [2, 4, 6, 8, 10];
const avg = arr.reduce((acc, item, idx) => {
  acc += item;
  if (idx === arr.length - 1) {
    return acc / arr.length;
  } else {
    return acc;
  }
}, 0);
console.log(avg);

// Flatten a 2D array
const twoDimArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const flatArr = twoDimArr.reduce((acc, item) => acc.concat(item));
console.log(flatArr);
