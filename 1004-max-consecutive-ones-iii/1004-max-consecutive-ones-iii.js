/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    if (nums.length === 1 && nums[0] === 1) return 1
    if (nums.length === 1 && k === 1) return 1
    
    let max = 0
    
    let left = 0
    for (let right = 0; right < nums.length; right++ ) {
        let num = nums[right]
        
        if (num === 0) k -= 1
        
        while (k === -1) {
            if (nums[left] === 0) {
                k++
            }
            left++
        }
        

        max = Math.max(max, (right - left + 1))
    }
    
    return max
};

// [0,0,1,1,1,1,]

