const inter_union = (arr1, arr2)=> {
    const inersection = arr1.filter(i => arr2.includes(i));
    const union = [...new Set([...arr1, ...arr2])];
    
    return [inersection, union];
}

console.log(inter_union([1,2,3,4,5,6], [1,2,3,6]));
