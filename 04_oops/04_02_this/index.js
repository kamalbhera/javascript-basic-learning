// 1
console.log(this); // window object

// 2
function test1(){
    console.log(this); // window object
}
test1();

// 3
let obj1 = {
    test2() {
        console.log(this); // will return obj1 reference
    }
}
obj1.test2();

// 4
let obj4 = {
    test4: () => {
        console.log(this); 
    }
}
obj4.test4();


// 5 
function test5(){
    console.log(this); // window object
    return function test6() {
        console.log(this); // window object
    }
}
test5()();
