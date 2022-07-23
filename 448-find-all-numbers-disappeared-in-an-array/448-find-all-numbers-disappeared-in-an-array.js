/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = []
    
    let i = 0
    while (i < nums.length) {
        let curr = nums[i]
        
        if (curr !== nums[curr - 1] && curr <= nums.length) {
            [nums[i], nums[curr - 1]] = [nums[curr - 1], nums[i]]
        } else i++
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) result.push(i + 1)
    }
    
    return result
};

