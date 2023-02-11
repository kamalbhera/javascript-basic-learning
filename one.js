Spread operator = used in array

Type1 - copying the array not by reference
var a = [1,2,3,4]
var b = [...a,5]
console.log(a); // [1,2,3,4]
console.log(b); // [1,2,3,4,5]


Type2 - concating
var num1 = [10,20,30,40,50]
var num2 = [60,70,80,90,100]
console.log([...num1,55,...num2]) // concating two array

concat and sum of the array
var a = [10,20,30,40]
var b = [100]
var add = [...a, 100, ...b] // a.concat(b)
var sum = add.reduce((previousval,currentval) => previousval +  currentval)
console.log(sum)

//Type3 - finding maximum and minimum
var input = [35,65,90,70,89]
var highest = Math.max(...input)
var highest2 = input.filter((foo)=> foo!=highest)
console.log(Math.max(...highest2))

var min = [3,4,5,2,7,1]
var small = Math.min(...min)
console.log(small);                      


var x = [3,4]
console.log(Math.hypot(...x)) // hypot = square the number and add it and then find its square root(3,4=9+16=25=5)

Rest Operator - rest of the values(...) = used in function parameter

function a(loan,...expenses) {

    var sum = (expenses.reduce((b,c)=> b+c))
    console.log(sum-loan+interest)
}

(a(100,200,50,100,20,30,100))

