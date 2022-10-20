/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        
        if (nums[mid] === target) return mid;
        
        if (target < nums[mid]) {
            right = mid - 1
        }
        
        if (target > nums[mid]) {
            left = mid + 1
        }
    }
    
    return -1
};


// Edge case:
    // Target does not exist in nums, return -1


// Approach

    // Set a left and right pointer to act as a window
    // Find the midpoint of that window
        // If the target is less than the midpoint, then we know it could be on the left side of the midpoint
        // If the target is greater than the midpoint, then we know it could be on the right side of the midpoint

    // Repeat this process until the target is found or left and right converge