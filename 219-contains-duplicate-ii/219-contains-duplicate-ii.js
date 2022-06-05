/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if (k === 0) return false
    
    let map = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        
        if (map[num] || map[num] === 0){
            let diff = Math.abs(map[num] - i)
            if (diff <= k) return true
            else map[num] = i
        } else {
            map[num] = i
        }
    }
    // console.log(map)
    return false
};