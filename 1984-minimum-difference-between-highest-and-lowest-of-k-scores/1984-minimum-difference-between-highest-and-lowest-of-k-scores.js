/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k === 1) return 0
    
    let minDiff = Infinity
    
    nums.sort((a, b) => a - b) 
    
    
    for (let i = 0; i < nums.length - k + 1; i++) {
        // let sub = nums.slice(i, i+k)
        
        // let diff = Math.abs(sub[0] - sub[sub.length - 1])
        
        let diff = Math.abs(nums[i] - nums[i + k - 1])
        
        minDiff = Math.min(minDiff, diff)
    }
    
    return minDiff
};

// time = 20
// score = 3

// 1,4,7,9    k = 2

// [1, 2, 3, 50, 99,100 ] k = 3

// [10, 7, 1, 2 18] k = 3