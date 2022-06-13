/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = new Map()
    let result = []
    
    for (let i = 0; i < nums1.length; i++) {
        if (!map.has(nums1[i])) map.set(nums1[i], 1)
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && map.get(nums2[i]) !== 0) {
            result.push(nums2[i])
            map.set(nums2[i], 0)
        }
    }
    return result
};

// 25 mins

// 1 - took to long, overthought simple solution

// 
    
//    [4,9,5]   [4,9,8,2,3,5] 

// [4,5,9]  [2,3,4,5,8,9]