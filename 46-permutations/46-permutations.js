/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    let used = new Array(nums.length)
    backtrack(nums, res, used, [])
    return res
};

function backtrack(nums, res, used, curr) {
    if (curr.length === nums.length) {
        res.push([...curr])
        return
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue
        
        curr.push(nums[i])
        used[i] = true
        backtrack(nums, res, used, curr)
        curr.pop()
        used[i] = false
    }
}


// Given an array of numbers, return all the possible combinations in any order

// Approach:
    // Recusively build up every combination
    // Because every time we choose we have one less option, we can keep track of this another array.


    // Base case: when the combination is the same length as the input

// Keep variable for result array
// initialize the used variable which will be the length of the input and keep track what number is used
// call helper function 
// return result array



// helper function
    // will take in the input, the current combintation, used
    // used will initally be the length of the input array.

    // loop over the input
    // add the current element, say that it's used (true)

    // when we backtrack, set the current element's index to false