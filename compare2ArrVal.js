

function compareArray(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, key) => item == arr2[key]);
}


let arr1 = [1, 3, 5, 7];
let arr2 = [1, 3, 5, 7];
console.log(compareArray(arr1, arr2));
