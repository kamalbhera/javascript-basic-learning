# JS--inBuild-function

# Adding the value to the array
var a = [1,2,3,4,5]
a.push(6) = [1,2,3,4,5,6] // add in the last place

a.unshift(6) = [6,1,2,3,4,5] // add in the first place

var b = ["mango",'orange','lemon','apple']
b.splice(1,0,'grapes) - ["mango",'grapes','orange','lemon','apple']

 ## Removing the element
 a.pop() - removes the last element of the array
 
 a.shift() - removes the first element of the array
 
 [1,2,3,4,5]
 a.splice(2,3) => [1,2] - it delete from 2 index with the respective count(3)
 
# In splice 1st one indicate starting index of the array. 2nd - deleting element count. 3rd - adding value in the deleted element

example:1
let a = [1,2,3,4,5,6];
a.splice(2,2,1.5);
console.log(a);
output:
[1,2,1.5,5,6]  // 2nd index- 3 and 3rd index are delted and 1.5 is added.

2.eg:
let a = [1,2,3,4,5,6];
a.splice(1);     // it delete after all the index element from mentioned in the splice.
console.log(a); => [1]

# SLICE:
The slice() method returns selected elements in an array, as a new array.

slice() selects the elements starting at the given start argument, and ends at, but does not include the given end argument.

array.slice(start,end-1)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 fruits.slice(1, 3); => ["Orange","lemon"]
                  -5          -4      -3      -2     -1
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var myBest = fruits.slice(-3, -1); => ["Lemon","Apple]

let arr = [1,2,3,4,5]
arr.slice(1) => [2,3,4,5] It will remove only first element
