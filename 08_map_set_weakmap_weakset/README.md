## 08 Map, Set, WeakMap, WeakSet (ES6 Data Structure)

### 08.01 Map [Medium]

- JS has main DS: array or objs. ES6 introduced 4 more DS: map, set, weakmap, weakset
- Map:
  - Map is same as object but the key can also have types ex: string, number, boolean etc.
  - values inserted in map are retrieved in same order
  - mapping value to value is possible ex: `true: 23`
  - more readable code compared to obj
  - methods:
    - `.set()`, `.get()`, `.delete()`
    - `.delete(key)`, `.clear()`: wipes out the map
  - poperties: `.size`: returns length
  - Note: while assigning value pls use `.set('price', 300)` method instead of `product['price'] = 300` because the later one doesn't assign type correctly
  - `.set()` returns a map. So it is chainable. Ex: `product.set('price', 300).set(1, 'Apple').set(true, 'Available')`
  - maps are iterable
    : `.values()`,`keys()` and `entries()`: entries will return array of key value pair
    - `.forEach()` can also be used Note: can't be broken in between
  - `.has(key)` to check if a key exists
- Obj to Map conversion and vice versa
  - `let map = new Map(Object.entries(obj));`, `const obj = Object.fromEntries(map)`
- Qns:
  1. What are the advantages of using Map over objects?
  - map has type for keys.
  - keys are ordered.
  - map has size property to get length while obj doesn't hv.
  - Maps are iterable.
  - Maps are optimized for data manipulation. insertion and deletion
  2. How will you iterate through Map ?
  - values(), keys(), entries() with for of or foreach
  3. Can you assign key/values with this syntax? `map[‘key’]=value` Explain the reason for the answer.
  - incorrect way to assign. since it won't have type
  4. How can you convert simple objects to Map?
  - `new Map(Object.entries(obj));`
  5. How can you convert a Map into simple objects?
  - `Object.fromEntries(map)`
  6. How will you remove an item or all items from Map?
  - `delete()` and `clear()`

### 08.02 Set [Medium]

- Set collection of data doesn't have keys. It has unique values
  - `const set = new Set();` or `const set = new Set(["First", "Second"]);`
  - methods: `.add()`, `.delete(value)`, `.clear()`
  - props: `.size`
- Sets are iterable through for of or forEach
- Sets has same methods as map or object ie. values() keys() and entries() although it's not required. It has been done so to make it compatible with other DS
- Qns:
  1. What is the difference between Map and Set ?
  - map has key, value while set has only value. Set is unique set of values
  2. How will you remove specific values from Set ?
  - `.delete(value)`
  3. What will entries() method with Set will return ?
  - `[[key: value], [key: value], [key: value]]`

### 08.03 WeakMap, WeakSet

- WeakMap:
  - Maps hold keys inside it strongly. So if one of the key is an object. Even if it is set to null later. Map will not loose the reference and thus garbage collection will not clear this obj space
  - WeakMap will clear the memory if reference is lost. Since it hold the keys weakly.
  - Keys in WeakMap are only objects. Can not have primitive keys like string, number etc
  - keys are weakly held. So if the keys are garbage collected, so are the values.
  - because of weak keys. It doesn't have iterable methods like: .values(), .keys() or .entries()
  - weak keys doesn't hold values during GC. Very handy when DOM nodes are removed and GC is done.
  - methods: `set`, `get`, `has`
- WeakSet
  - Same as WeakMap
- Better to use to avoid memory leakage
