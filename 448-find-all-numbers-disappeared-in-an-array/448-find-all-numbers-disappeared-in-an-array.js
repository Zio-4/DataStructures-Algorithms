/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (nums.length == 1) return nums[0] + 1
    
    let i = 0
    let arr = []
    
    while (i < nums.length) {
        let currNum = nums[i]
        let correctPlace = currNum - 1
        
        if (currNum !== nums[correctPlace]) {
            [nums[i], nums[correctPlace]] = [nums[correctPlace], nums[i]]
        } else i++
    }
    
    console.log(nums)
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) arr.push(i + 1)
    }
    
    return arr
    

};

// Cycle sort the array

// what happens to dupplicates?

// [4,3,2,7,8,2,3,1]

// [4,3,2,7,8,2,3,1]

// [1,2,3,4,3,2,7,8]