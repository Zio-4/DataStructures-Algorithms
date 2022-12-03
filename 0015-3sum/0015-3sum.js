/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b)
    
    let res = []
    
    for (let anchor = 0; anchor < nums.length - 2; anchor++) {
        if (anchor > 0 && nums[anchor] === nums[anchor - 1]) continue;
        
        let left = anchor + 1
        let right = nums.length - 1
        
        while (left < right) {
            let sum = nums[anchor] + nums[left] + nums[right]
            
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                left++
            } else {
                // edge case for moving left up: previous is the same
                // push in pair
                res.push([nums[anchor],nums[left],nums[right]])
                left++
                while (left < right && nums[left] === nums[left - 1]) left++
            }
        }
    }
    
    return res
};


// sort to handle duplicates 

// APPROACH:

// 3 pointers: One anchor, and two pointers that move up and down.
    // The anchor pointer will start at the front [left most]

