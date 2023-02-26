// Application 1: chain constructors for an object

function Box(height, width) {
  this.height = height;
  this.width = width;
}

function Widget(height, width, color) {
  Box.call(this, height, width);
  this.color = color;
}

let widget = new Widget("red", 100, 200);
console.log(widget);

// Application 2: borrow functions
const car = {
  name: "car",
  start() {
    console.log(`starting ${this.name}`);
  },
  speedUp() {
    console.log(`sppeding up ${this.name}`);
  },
  stop() {
    console.log(`stopping ${this.name}`);
  },
};

const aircraft = {
  name: "aircraft",
  fly() {
    console.log(`flying ${this.name}`);
  },
};

// borrowing start speedup and stop functions from car obj
console.log(car.start.call(aircraft));
console.log(car.speedUp.call(aircraft));
console.log(aircraft.fly());
console.log(car.stop.call(aircraft));

// Application 2.1: borrow functions - borrow filter fn from array prototype for arguments
const isOdd = function (item) {
  return item % 2 !== 0;
};
const getOddNumbers = function () {
  return Array.prototype.filter.call(arguments, isOdd);
};
console.log(getOddNumbers(1, 2, 3, 4, 5, 6));
