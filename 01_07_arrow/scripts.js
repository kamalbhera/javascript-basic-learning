const obj = {
    test(){
        console.log(this);
    },
    test2: ()=>{
        console.log(this);
    }
}

obj.test(); // obj
obj.test2(); // window

function test() {
    console.log(this)
}

const a = new test(); // Won't work with arrow fn. In arrow fn we can use class instead
console.log(a)