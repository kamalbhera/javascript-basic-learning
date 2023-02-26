const removeEmpty = (arr) => arr.filter((i) => i);

const myArr = [false, undefined, null, "kiran", NaN, "", 1, 0, 6];
console.log(removeEmpty(myArr));
