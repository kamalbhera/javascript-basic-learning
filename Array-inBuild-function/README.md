## 02 Arrays

### 02.01 Array and Traversal in array [Easy]

- JS has Array class and arrays are a prototype of this
- Looping array
  - `for()` loop
  - ES6:
    - `for key in arr` and
    - `for val of arr`: faster and recommended
    - `arr.forEach()`: **Important**! can not break the loop while other loops can be broken

### 02.02 Add, Remove, Insert, Replace elements in array [Medium]

- Methods: `push()`, `pop()`, `shift()`, `unshift()`
  - Add items:
    - push(): add items at end and returns length
    - unshift(): add items at beginning, returns length
  - Remove items:
    - pop(): remove last item, returns removed element
    - shift(): remove first item, returns removed element
- `splice()`: `splice(startIdx)`: delete starting from idx - returns deleted items in array
  - can be used to add, remove, insert, replace modifying the technique
- All these methods mutate the original array
- Qns:
  1. What is the difference between push() and unshift() method ?
  2. What is the difference between pop() and shift() ?
  3. How can you insert an element at a given position ?
  - `arr.splice(2, 0, "New"))` will insert "New" at index 2 and delete 0 items
  4. How can you remove a specific element ?
  - `arr.splice(2, 1))`
  5. What does splice() return ?
  - removed array
  6.  If there is not element removed then what will splice() method return ?
  ```
  let arr=["One","Two","Three","Four","Five"];
  console.log(arr.splice(2,0,"New")); // will return []
  ```

### 02.03 Search in Array [Medium]

- Methods: `indexOf()`, `lastIndexOf()`, `includes()`
  - indexOf: `arr.indexOf(searchElem, startIndex)`
    - returns index where search items is found. -1 if not found
    - returns index of first element if multiple items found
  - lastIndexOf:
    - same but returns index of last elem if multiple items found
  - includes:
    - sasme but returns true or false
- Advanced methods: `find()`, `findIndex()`, `filter()`
  - find(): returns item which matches the callback condition: only returns first match
  - filter(): returns array of items that matches the condition
- Qns:

1. What is the difference between find() and filter() method ?

- find returns item while filter returns array of all items

2. If there is no value to return, what will findIndex() return ?

- undefined

3. What is the difference between indexOf() and includes() method ?

- returns index, returns boolean

4. How will you search multiple values in an array ?

- filter

5. What will be the output of this code ?
   ```
   let arr=["One","Two","Three","Four","Five"];
    console.log(arr.lastIndexOf("Abcd")); // -1
   ```

### 02.04 map method [Easy]

- returns new array after modifying each item in array

### 02.05 Flatten 2D array - reduce [Medium]

- flattening is converting 2D, 3D array to 1D
  - `const flatArr = twoDimArr.reduce((acc, item) => acc.concat(item));`
- `reduce()`
- `reduceRight()`:
  - loops from right to left
- Qn:
  - What is the difference between reduce() and reduceRight() ?

### 02.06 Sort array [Easy]

- `arr.sort()`: sorts alphabetically assign arr is of strings
  - modifies the original array
  - use comparison callback fn to sort descending order
    - return -1, 1 or 0
- Numeric sort: use comparison method
  - if no cb fn given then it will sort the unicode string value
- Qn:
  1. What will be the output in case an array has `undefined` while sorting the values ?
  - all undefined values are moved to the end
  2. How will sort an object literal ?
  - using comparison fn
  3. How will you sort a numeric array ?
  4. Sort all values of array in descending order.

### 02.07 Destructuring array [Medium]

- getting values from arr or obj into individual variables
- Qns:
  1. What is the destructuring assignment ?
  - `let [a3, b3, c3 = 5] = arr1;`
  2. Swap values using destructuring.
  - `[a1, b1] = [b1, a1];`
  3. What will be the output of this code ?
  -
  ```
    let [a,b,c] = [5,,7];
    console.log(a,b,c); // undefined
  ```
  4. How will you set a default value while destructuring an array?
