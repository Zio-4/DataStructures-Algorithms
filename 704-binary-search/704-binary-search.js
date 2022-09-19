/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1 
    
    while (left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (nums[mid] === target) return mid
        
        if (nums[mid] > target) {
            right = mid - 1
        }
        
        if (nums[mid] < target) {
            left = mid + 1
        }
    }
    
    return -1
};


// Given an array of integers sorted in ascending order, find the target if it exists, and return the index
// return -1 if it does not exist

// Constraint: Time = O(log n)


// Approach:

    // Have 2 variables, start and end, which keep track of the current numbers we are looking at
    // Have a mid variable which will always have the middle (idx) of the current numbers array were looking at

    // Loop while left is less than right

    // Calculate the mid for every loop and the new start and end

    // If the target is greater than mid, search the right half
    // If the target is less than the mid, search the left half.

    // If the start, end, or mid is the target return that index

    // If it does not exist, return -1