var str = "i have 2 pen";
str = str.split(" ").join(''); //or str = str.replace(/ /g,'')
console.log([...str])
console.log(Array.from(str))   //["i",'h','a','v','e','2']

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

var arr = (new Array(7)).fill(0).map((a,i)=>i*i)
console.log(arr) // [0,1,4,9,16]

// ## Using arrow functions and Array.from()

Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// let array = Array.from({length:5}).(v,i)=> i*i);
// console.log(array)  //[0,1,4,9,16]
