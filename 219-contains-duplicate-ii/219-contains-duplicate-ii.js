/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (nums.length === 1) return false
    const map = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], i)
        else if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true
            } else {
                map.set(nums[i], i)
            }
        }
    }
    return false
};


// update the index if the a duplicate exits and it dosent meet the requirement
// [3,2,4,3,544,65,3]