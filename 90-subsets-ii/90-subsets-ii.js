/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort()
    
    console.log('sorted', nums)
    
    const map = {}
    
    const res = []
    
    let subset = []
    let index = 0
    
    function dfs(nums, index, subset) {
        if (index === nums.length) {
            if (!map[subset.join('')]) {
                map[subset.join('')] = true
                res.push(subset)
                return
            } else {
                return
            }
        }
        
        
        dfs(nums, index + 1, [...subset, nums[index]])
        
        dfs(nums, index + 1, subset)
    }
    
    dfs(nums, index, subset)
    
    return res
    
};

// Given an integer array with possible duplicates, return all the subsets WITHOUT DUPLICATES. Can be in any order

// Edge cases
    // [] counts as a subset
    // [3,4] and [4,3] are the same

// Approach

// Use DFS and recursion to find subsets
// Modify the base to also check if the subset exist already

// base case
    // if the index equals the length of nums (at the last position)
        // if (the subset does not exist in the map) push it in to the result

// Keep a map for the existing subsets
// Join the subset together to create a string and use as the key for the map

//     let test = [1,2].join('')
//         map[test] = true
    
//     if (map[[1,2].join('')]) {
//         console.log(map)
//     }