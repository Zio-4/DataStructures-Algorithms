/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (nums.length === 1) return 0
    
    nums.sort((a, b) => a - b)
    
    let min = Infinity
    
    let left = 0
    for (let right = k - 1; right < nums.length; right++) {
        let diff = nums[right] - nums[left]
        min = Math.min(min, diff)
        left++
        
    }
                                                           
    return min                                                    
};

    // [1,2,3,4,5,6,7] k = 3

// Fixed window of k length

// From 34