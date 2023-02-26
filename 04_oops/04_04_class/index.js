// 1 Creating class with ES6 `class` keyword
const key = "getData";
class House {
  constructor(windows, doors) {
    this.windows = windows;
    this.doors = doors;
  }
  static appVersion = 1.2;
  //   getData() {
  //     console.log(this.windows, this.doors);
  //   }
  [key]() {
    console.log(this.windows, this.doors);
  }

  static getVersion() {
    console.log(this.appVersion);
    this.getAppName();
  }
  static getAppName() {
    console.log("Kiran's app");
  }
}

const house1 = new House(3, 5);
house1.getData();

// static members and props can be called straight from class without instantiating
console.log(House.appVersion);
console.log(House.getVersion());
