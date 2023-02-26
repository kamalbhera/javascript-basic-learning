let arr = [4, 5, 6, 7];
// arrays are iterable
for (let i of arr) {
  console.log(i);
}
// understand iterable for arr
let itr = arr[Symbol.iterator]();
console.log(itr.next()); // { value: 4, done: false }
console.log(itr.next());
console.log(itr.next());
console.log(itr.next()); // { value: 7, done: false }
console.log(itr.next()); // { value: undefined, done: true }
console.log(itr.next()); // { value: undefined, done: true }

// Making an object iterable
let obj = {
  start: 10,
  end: 15,
  [Symbol.iterator]() {
    return {
      next() {
        if (obj.start <= obj.end) {
          return { value: obj.start++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let i of obj) {
    console.log(i)
}
