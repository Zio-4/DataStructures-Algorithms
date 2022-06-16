/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0
    
    const n = nums.length
    console.log('n before: ', n)
    
    for (let i = 0; i < n; i++) {
        if (nums[i] !== val) {
            nums.push(nums[i])
        }
    }
    console.log(nums)
    console.log('n after: ', n)
    
    nums.splice(0,n)
    
    console.log(nums)
    return nums.length
};