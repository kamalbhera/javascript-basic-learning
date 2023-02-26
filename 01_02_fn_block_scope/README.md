## 01 Language Basics

### 01.01 Diff b/w null and undefined [Easy]

- A variable which is not assigned a value is undefined
  - `typeof undefined` is **undefined**
- When we want to assign empty value to a variable we use null
  - `typeof null` is **object** but null is a primitive data type (mistake since beginning)
- Relative Qns:
  1. What is "undefined" in JavaScript ?
  2. What will be the output of `undefined==null` & `undefined===null` ? Why ?
  - true, false because strict equality checks for type and value. typeof null is object while typeof undefined is undefined
  3. Can you explicitly assign "undefined" to a variable ? (let i = undefined)
  - yes

### 01.02 Fn Scope vs Block Scope [Easy]

- ES5 has fn scope ex: var - is hoisted to top
  - var can be redeclared
- ES6 has block scope
- Recommended: use block scope ES6

### 01.03 ASI (Automatic Semicolon Insertion) [Easy]

- JS adds semicolon automatically at end of line if statement seems complete
- Relative Qns:
  1. Can `"use strict"` statement or the strict mode change the behavior of ASI ?
     - No

### 01.04 Rest and Spread operator [Medium]

- Rest operator: Rest of parameters
  - Rest operator takes all arguments passed and puts it in an array
  - ES6
  - In ES5, we have an array like object "arguments" which does not work with arrow fn. So better to avoid it
  - if multiple params are passed, **rest params must comes at end**
- Spread operator
  - spreads all values from an array
- Qns:
  1. Can we use arguments object in arrow function?
  - No
  2. Which is the best way to create new arrays with assignment?
     - wrong: `const arr2 = arr1`
     - correct: `const arr2 = [...arr1]`
  3. How can you handle the number of parameters passed to a function ? or create a function which can take any number of parameters and returns sum or max or any other such calculative values.
  - rest operator
  4. Can the rest operator be placed anywhere in the function parameter list?
     - No

### 01.05 Infinity or -Infinity [Medium]

- Infinity is highest possible value in JS
  - `Number.POSITIVE_INFINITY`
  - `Number.NEGATIVE_INFINITY`
- In JS numbers are stored in 64 bit format. If number > 64 bit then it is stored as infinity
- Use: For validation if a number is valid or not

### 01.06 NaN, isNaN, isFinite [Medium]

- When NaN will output
  - when operation can't be performed on a number
- use validation with `isNaN(expression)`
  - don't use `num === NaN` because NaN value is not same all the time
- `isFinite()`: checks for NaN and Infinite -Infinite
- Qns:
  1. What will be the output of the below statement?
     - `console.log(NaN==NaN);`
  2. What is the difference between isNaN() and isFinite() method?

### 01.07 Arrow fns [Medium]

- Behaviours:
  1. No `this` object
  2. No `arguments` array like object
  3. Can't use `new` to call arrow fn
- ES6: `()` and `class`
- ES5 functions can be used as fn and class. It had `this` keyword since earlier fns were also behaving as class
  - But in ES6: we have `class` for classes and `()` specifically for fns
- Qns:
  1.  Why "this" does not work in arrow function?
      - No. Since we have a `class` keyword to deal with classes. So we don't need fn to act as class
  2.  How can you handle arguments object like functionality in arrow function?
      - rest params

### 01.08 Closure [Easy]

- When a fn comes under another fn, a "closure" is created
- it helps to remember outer scope variable
- Qns:
  1. How can you access private variable or function outside the scope ?
     - Closure
  2. Explain the advantage of closure ?
     - Any member which is private for certain scope, can be accessed keeping it private so that the variable is away from any accidental change of value

### 01.09 Curry - sum(5)sum(6) [Easy]

- unique way to call inner functions where you can pass args partially or multiple args in a fn one at a time
- uses closure concept
    - can be used to create multiple varitations of a fn
- Application:
    - pass partial params for fixed items and create multiple variations to avoid repetition

### 01.10 Iterables and Iterators [Hard]
- Iterables: string, maps, sets etc
- Iterator: `Symbol.iterator`: to convert non iterable items to iterable ex: obj to arr. So we can use `for of` loop
- Qns:
    1. What is the purpose of the iterator ?
        - to make a DS iterable
    2. How do you create an iterator ?
        - `Symbol.iterator` method must be implemented which should return an iterator obj `{ value: somethig, done: false }` and also must contain a `next` method on it
    3. Explain a practical use of an iterator ?
        - While creating custom data structure for end users or other programmers so that they can iterate through our data structure

### 01.11 Generators [Hard]
- Defn:
    - Generators helps us to pause or resume a code
        - `yield` to pause and `.next` to proceed further
    - Generic fns return one value while generators can return multiple values in phases
    - `function*` keyword is used to define generator
    - `yield` operator is used to pause generator fn
    - `yield` is also used to receive input and send output
    - Generators are iterable
    - while calling recursive fns or gen fns from gen fn, we should use `yield*`
        - can be used to call recursive methods which can be terminated with return() or throw() on meeting base case
    - **methods**:
        - `.next()` move to next line from last yield
        - `.return()` terminate the gen fn by returning
            - writing `yield` inside `finally` will not allow return() to terminate. used to suspend termination. return will terminate all try block code after it but it will continue to execute the finally code block
            - can pass string to `return` fn and it will set as value
        - `.throw()`: will execute catch block from gen fn: used for error handling
- Application: Rarely used
    - mostly used in handling async calls ex: redux saga helps us to execute a set of async tasks
- Qns:
    1. What are generator functions? Explain the syntax.
    2. Which is the right syntax function* () { } or function *(){} ?
    3. Explain all methods of generator objects.
    4. Explain the use of `yield*`
    5. Can you prevent `return()` from terminating the generator ?

### 01.12 Memory Management and Garbage collection(GC) [Medium]
- when we declare a var, arr, fn, obj etc all are stored somewhere in memory. When program execution ends, the memory should be cleared. This is GC.
- In JS, this is **automatic**. JS runs a routine "garbage collector". 
- It considers references and tries to release the memory if location is not reachable
- **Mark and Sweep Algorithm**:
    - The algo starts with root obj & checks for the references linked
    - In case if this algorithm finds unreachable locations, and those are the locations to be removed
    - All modern browsers use MnS algo
    - In older browsers, in case of circular reference there was a situation of memory leaks
- Qns:
    1. How GC works in JS?
    2. Explain Mark and Sweep algo
    3. Which situation can cause a memory leak

### 01.13 Error handling with try catch finally [Medium]
- **Dealing with unknown error using try catch:** If any code has chances of facing run time error but not compile time error, add it in `try catch` block
    - Otherwise error will stop JS execution and not let us run code further
    - **try catch(err) finally**
        - Error obj: props: `name`, `message`, `stack`
        - finally block is 
- **Custom Errors**:
    - we can throw custom error using `throw` operator
    - `throw <error object>`
        - error object can be of class `Error`, `TypeError`, `SyntaxError` etc
- Qns:
    1. When do you need try...catch ?
        - to handle run time errors for code that might throw error and should not stop execution
    2. How can you generate an error ?
        - `throw`
    3. Can you generate SyntaxError or ReferenceError kind of errors ?
        - yes. with `throw`. by default try catch will catch default error obj
    4. What is the purpose of the finally block ?
    5. How can you refer to the name or description of error ?
    6. Can we have finally without a catch block as well ?
        - yes
