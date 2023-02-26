const a = [1, 22, 22, 3, 4, 5, 6, 3];
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates(a));

const removeDuplicates2 = (arr) =>
  arr.filter((item, idx) => {
    // Whenever there is a difference in indexOf and index for an item it means that item is duplicate
    console.log(`${item} - ${arr.indexOf(item)} - ${idx}`);
    return arr.indexOf(item) === idx;
  });
console.log(removeDuplicates2(a));
