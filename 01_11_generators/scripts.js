// generator fn
function* genFn() {
  console.log(1);
  yield 1.5;
  console.log(2);
  yield;
}

// generator object
const genObj = genFn();

// yield and next to pause and resume
console.log(genObj.next()); // { value: 1.5, done: false }
console.log(genObj.next()); // { value: undefined, done: false }
console.log(genObj.next()); // { value: undefined, done: true }

// generators are iterable
console.log("=== generators are iterable ===");
const genObj2 = genFn();
for (let i of genObj2) {
  console.log(i);
} // 1, 1.5, 2 Note: if we log genObj2 again it will return empty array because all steps are executed/yielded

console.log("=== generators are iterable ===");
const genObj3 = [...genFn()]; // all the yield values are stored in array
console.log(genObj3);

// Improving Symbol.iterator with generator fn
console.log("=== Symbol.iterator with generator fn ===");
let obj = {
  start: 10,
  end: 15,
  *[Symbol.iterator]() {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};

console.log([...obj]);

console.log("=== yield* for generator in generator ===");
function* gen1() {
  console.log("Hi");
}

function* gen2() {
  // const gen1Obj = gen1();
  // gen1Obj.next();
  yield* gen1();
}

const gen2Obj = gen2();
gen2Obj.next();

console.log("=== return ===");
function* genFn4() {
  yield "One";
  yield "Two";
  yield "Three";
}
const genObj4 = genFn4();
console.log(genObj4.next());
console.log(genObj4.return("Condition met"));
console.log(genObj4.next());

console.log("=== return with finally ===");
function* genFn5() {
  try {
    yield "One";
    yield "Two"; // will be skipped since return
  } finally {
    // Can't be skipped with return
    yield "Three";
    yield "Four";
    yield "Five";
  }
}

const genObj5 = genFn5();
console.log(genObj5.next());
console.log(genObj5.return("Condition met"));
console.log(genObj5.next());
console.log(genObj5.next());
console.log(genObj5.next());

console.log("=== throw ===");

function* genFn6() {
  try {
    yield "One";
    yield "Two"; // will be skipped since return
  } catch (e) {
    console.log('Error occured');
  }
}

const genObj6 = genFn6();
console.log(genObj6.next())
console.log(genObj6.next())
console.log(genObj6.throw())
