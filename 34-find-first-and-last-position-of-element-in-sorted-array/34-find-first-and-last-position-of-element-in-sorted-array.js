/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length < 1) return [-1,-1]
    
    let res = []
    
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        let mid = Math.floor(right + left / 2)
        
        if (nums[mid] === target && nums[mid-1] !== target) {
            left = mid
            break
        }
        
        if (nums[left] === target && nums[left-1] !== target && nums[left-1] !== undefined) {
            left = left - 1
            break
        }
        
        if (nums[right] === target && nums[right-1] !== target && nums[right-1] !== undefined) {
            left = right - 1
            break
        }
        
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
        
    }
    
    if (nums[left] === target) {
        res.push(left)
        
        while (nums[left] === target) {
            left++
        }
        res.push(left - 1)
    } else return [-1,-1]
    
    return res
};

// Given sorted increasing array with numbers, find the starting and ending position of a given target value
// BASICALLY: Return the indices of the duplicate target numbers


// If not found, return [-1,-1]

// Approach

// Binary search
// Check all pointers, if any of them equal the target and the previous element does not then that is the start.

//. break the loop and count up from there.