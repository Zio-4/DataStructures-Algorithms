/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0]
    
    let max = -Infinity
    let tempSum = -Infinity
    
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i]
        if (nums[i] > tempSum) {
            tempSum = nums[i]
        }
        max = Math.max(tempSum, max)
    }
    
    return max
};

// [1,2,3,4,5]