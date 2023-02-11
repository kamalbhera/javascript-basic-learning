SHADOWING
//block Scope 
//var : var is not a block Scope

//eg :
 var a = 'guvi'
 {
     var a = 'something'
     console.log(a)
 }
console.log(a)

// In this global scope is overriden(shadowed) by local scope variable


//Shadowing : same variable in inner block and outside block (b) with different value,when we call the inner block assigned to it, will be printed and respective of outside it will be assigned.

var b ='guvi'
{
    let b = "codekata"
    console.log(b)
}
console.log(b)

// but in let we have different value is printed inside and outside the block.
// global scope value is overriden by local scope

var a ="guvi"
let b = "codekata"
{
    let a = "shahith"
  //  var b = "abith"
    console.log(a)
   // console.log(b)
}
console.log(a)
console.log(b)

// var is shadowed by let and let is block scoped.


// The final salient difference between let / const and var is that if you access var before it's declared, it is undefined.
// But if you do the same for let and const, they throw a ReferenceError.

1.
console.log(a)
var a= 1;  //undefined

console.log(b)
let b =1; // reference error