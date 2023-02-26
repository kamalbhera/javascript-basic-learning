// 1 obj creation
let obj = {};
obj.pCode = 1001;
obj.pName = "Apple";
obj.getData = function () {
  console.log(obj.pCode, obj.pName);
};
console.log(obj.getData());
// or
let obj1 = {
  pCode: 1001,
  pName: "Apple",
  //   getData: function () {
  //     console.log(obj.pCode, obj.pName);
  //   },
  // ES6 Standard - same in class as well
  getData() {
    console.log(obj.pCode, obj.pName);
  },
};
console.log(obj1.getData());

// 2. Dynamic Key
const tv = "pCode";
let obj2 = {
  [tv]: 1001,
  pName: "Apple",
};
console.log(obj2.pCode); // 1001

// 3. Read Only properties of an object
const proto = Object.defineProperty({}, "pCode", {
    writable: false,
    configurable: true,
    value: 2001
})
const obj3 = Object.create(proto);
obj3.pCode = 4000;
console.log(obj3.pCode) // 2001

// 4. property value short hand with object literal
let pCode = "pCode";
let pName = "pName";
const obj4 = {
    pCode,
    pName
}
console.log(obj4)

// 5. Objects have same reference if assigned with =
let obj5={a:'First'};
let obj51 = obj5;
obj51.a="Second";
console.log(obj5.a);

// 6. clone or separate copy of an object literal
let obj6 = {a: 'First'};
let obj7 = Object.assign({}, obj6);
// let obj7 = {...obj6}
obj7.a = "Second";
console.log(obj6.a);