var frequencySort = function(nums) {
    let freqObj = {};
    for(let i =0; i<nums.length; i++){
        freqObj[nums[i]] = (freqObj[nums[i]] || 0) +1;
    }
    let result = nums.sort((a,b) => freqObj[a] === freqObj[b] ? b - a : freqObj[a] - freqObj[b])
    return result
};
console.log(frequencySort([2,3,1,3,2]));