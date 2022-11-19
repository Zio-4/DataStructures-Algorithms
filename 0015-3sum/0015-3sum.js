/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    
    let res = []
    
    for (let left = 0; left < nums.length; left++) {
        if (left > 0 && nums[left] == nums[left - 1]) continue;
        
        let mid = left + 1
        
        let right = nums.length - 1
        
        while (mid < right) {
            let sum = nums[left] + nums[mid] + nums[right]
            
            if (sum > 0) {
                right--
            } else if (sum < 0) {
                mid++
            } else if (sum == 0) {
                res.push([nums[left],nums[mid],nums[right]])
                mid++
                while (nums[mid] === nums[mid-1] && left < right) {
                    mid++
                }
            }
        }
    }
    
    return res

};