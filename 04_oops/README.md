## 04 OOJS

### 04.01 What is an Object literal [Medium]

- Many ways to create an object
  - class `Object` is one way
- Object allows us to create a container to put multiple data type. It's a key:value data structure
- Object has properties and methods
- Qns:
  1. Can you have dynamic keys with object literal?
  - `const tv = "pCode"; let obj3 = { [tv]: 1001 }`
  2. How can you add read-only properties to an object? **IMPORTANT!**
  - `Object.defineProperty()` and `Object.create()`
  3. What is property value short hand with object literal?
  - `let obj = { pCode, pName }`: ES6
  4. What will be the output of this code? Explain the reason why?
  ```
  let obj={a:'First'};
  let obj1 = obj;
  obj1.a="Second";
  console.log(obj.a);
  ```
  - Object assigned with = have same reference
  5. How can we create a clone or separate copy of an object literal?
  - `let obj1 = Object.assign({}, obj2)` or `let obj1 = {...obj2}`

### 04.02 this Object [Easy]

- `this` contains the current context
- in browser: this will always return window context unless it is wrapped in an object or wrapper
- `this` doesn't work with arrow fn. Since with es6: this was removed from arrow fn and added to `class`. In arrow, this will point to window

### 04.03 call, apply and bind [Easy]

- call, apply and bind change context of a fn
- call and apply executes fn immediately while bind returns a fn
- Note: we can not assign object to `this` operator directly in JS. that's why we have to use call, apply or bind method
- Practical applications:
  - chain constructors for an object
  - function borrowing
    - Ex: borrow filter fn from array prototype for arguments

### 04.04 class, class expression and static members [Medium]

- class is to create a blueprint or design or prototype
- To create class:
  - ES6 we have `class` keyword
  - ES5 we had constructor fn
- Qns:
  1. How can you create a class?
  2. When does constructor() called?
  3. Can we have dynamic property or method names in a class?
  - Yes: `[getName]`
  4. What is a class expression?
  - `const House = class{}`
  5. What are static members in a class? What is the purpose of defining them as static?
  - static memebers can be created using `static` keyword before property or method
  - Application: for creating a module which has services where we do not need to instantiate a class, in those case we create those members as static props / methods.
  6. How can you call another static method from a class?

### 04.05 Inheritance, Subclassing and Extending built in class [Medium]

- ES6: `extends` keyword can be used for extending class. ES5 had other ways
- Qns:
  1. How can you inherit a class?
  2. What is subclassing?
  3. What is the purpose of super keyword?
  - `super` keyword is used to call parent constructor, method or properties. `super(); super.prop; super.method()`
  4. How will you override a method?
  - use same name as method in parent. It will override in child. To call specifically parent method: use `super.methodName()`
  5. How can you extend a built-in class?

### 04.06 Destructuring Object Literal [Easy]
