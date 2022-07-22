/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (nums.length === 1) return []
    
    let res = []
    
    let i = 0
    while (i < nums.length) {
        let curr = nums[i]
        
        if (curr !== nums[curr - 1] && curr <= nums.length) {
            [nums[i], nums[curr - 1]] = [nums[curr - 1], nums[i]]
        } else {
            i++
        }
    }
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) res.push(nums[i])
    }
    
    return res
};

// Cycle sort (account for +1 indexing)
// Loop and push every number not in place to an array
    
    
    