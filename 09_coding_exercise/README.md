## 09 Coding Exercises

### 09.01 if given variable is array [Easy]

- toStirng.call(): `Object.prototype.toString.call(a) === "[object Array]"` or `toString.call(a) === "[object Array]"`
  - toString.call returns stringified version of object. here we are binding it with array
- `Array.isArray(a)`

### 09.02 Remove duplicates from array [Easy]

- Set and spread: `const removeDuplicates = (arr) => [...new Set(arr)];`
- **filter and indexOf**: Whenever there is a difference in indexOf and index for an item it means that item is duplicate
  - `arr.filter((item, idx) => arr.indexOf(item) === idx;});`

### 09.03 Remove null, undefined, NaN and '' from array [Easy]

### 09.04 Finding Factorial [Easy]

- Recursion

### 09.05 Prime Number [Medium]

- number divisible by 1 and itself
- Naive solution: check for all numbers from 2 till n-1 and if number % i is zero then not prime
- Improvement: instead of checking from 2 till n-1 we can **check from 2 till n/2 - 1**

### 09.06 Vowel, consonant [Easy]

- vowel: a, e, i, o, u. `vowel.includes(char)`
- consonant: rest

### 09.07 array intersection and union [Easy]

- intersection: elements in both array `const inersection = arr1.filter(i => arr2.includes(i));`
- union: combination of elements from both arrays `const union = [...arr1, ...arr2];` or `const union = [...new Set([...arr1, ...arr2])];` for unique

### 09.08 Fibonacci series [Medium]

- ```
  if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      // One recursion
      return fibonacci(n - 2) + fibonacci(n - 1);
    }
  ```

### 09.09 Number reverse [Hard]

- `Number(num.toString().split("").reverse().join(""))`;
- use remainder logic. to build reverse number
  -
  ```
    while(num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10); // parseInt to avoid decimals
  }
  ```
