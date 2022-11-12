/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let a = nums[i]
        
        let left = i + 1
        let right = nums.length - 1
        
        while (left < right) {
            const sum = a + nums[left] + nums[right]
            
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                res.push([a,nums[left],nums[right]])
                left++
                while (nums[left] === nums[left - 1] && left < right) {
                    left++
                }
            }
        }
    }
    
    return res
};

// Approach

// Sort the input to avoid duplicate triplets

// Iterate through the array and for each value, create a left and right pointer

    // The left starts at i + 1 and the right at the end

// In the loop, we need to do another loop - while

    // We caculate the sum and if not equal to the target move the pointers

    // If the sum is too big, we move the right pointer down

    // If the sum is too small OR the next value is the same as the past, we move it forward

    // If sum is found, add it to the result and
        // move the left pointer up
        // again check if the previous value is the same and that the left pointer is still before the right

// return the result