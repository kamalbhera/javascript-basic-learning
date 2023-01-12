const array = [1, 3, 11, 5, 6, 7, 9];

// for break keyword
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
        break;
    }
    console.log(array[i]);
}
// for continue keyword
const nums = [1, -2, 3, -4, 5, 6, 7, -8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
        continue
    }
    console.log(num);
}