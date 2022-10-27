/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let tempSum = nums[0]
    let maxSum = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        let currNum = nums[i]
        
        tempSum = Math.max(tempSum + currNum, currNum)
        
        maxSum = Math.max(tempSum, maxSum)
    }
    
    return maxSum
};

// [5,4,-1,7,8]

// tempSum = 

// maxSum = 8







// Approach: Kadane's algorith


// We keep a running sum and max sum

// The max is always updated when the tempSum becomes larger

// the temp sum is updated for every element we add but if the element is greater than the tempSum after that element was added then we to that element