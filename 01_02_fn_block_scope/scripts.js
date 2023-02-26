function test() {
  var z = 9;

  if (true) {
    var z = 10;
    console.log(z); // 10
  }
  console.log(z); // 10
}
test();
console.log(z); // undefined
