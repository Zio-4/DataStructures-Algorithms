/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    if (nums.length == 1) return []
    
    let arr = []
    
    let i = 0
    while (i < nums.length) {
        let currNum = nums[i]
        
        console.log('currNum', currNum)
        console.log('i', i)
        
        if (currNum !== nums[currNum - 1]) {
            [nums[i], nums[currNum - 1]] = [nums[currNum - 1], nums[i]]
        } else i++
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i+1) arr.push(nums[i])
    }
    
    console.log(nums)
    
    return arr
    
};


// [4,3,2,7,8,2,3,1]
// [3,2,3,4,8,2,7,1]