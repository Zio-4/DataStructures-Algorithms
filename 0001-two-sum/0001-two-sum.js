/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}
    
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i]
        let pair = map[target - currNum]
        
        if (pair || pair === 0) {
            return [pair, i]
        } else {
            map[currNum] = i
        }
    }
};


// edge cases are duplicates
    // If the target is not the duplicates summed then we don't need to change the value in the hashmap
    // Index of first element will be 0 which is falsey

// Initiate hashmap

// Loop through and add unseeen unduplicated values to the map
// For every element also check if that minus the target exists in the map
    // If it does we have answer.


