/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    
    let count = 0
    
    function dfs(currSum, idx) {
        if (idx === nums.length) {
            if (currSum === target) {
                count++
            }
            return
        }
        
        dfs(currSum + nums[idx], idx + 1)
        dfs(currSum - nums[idx], idx + 1)
        
        
    }
    
    dfs(0, 0)
    
    return count
};


// Have to use number element in nums

// Use backtracking to build all combinations of ways to get to target

// The base case will be when we are at the last index, we check if sum == target

