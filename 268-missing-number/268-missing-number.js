/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if (nums.length == 1 && nums[0] == 0) return nums[0] + 1
    if (nums.length == 1 && nums[0] == 1) return 0
    
    let i = 0
    
    while (i < nums.length) {
        let currNum = nums[i]
        console.log('currNum',currNum)
        console.log('i',i)
        
        if (currNum !== i && currNum < nums.length) {
            [nums[i], nums[currNum]] = [nums[currNum], nums[i]]
        } else i++
    }
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i
    }
    
    return nums[nums.length - 1] + 1
};

// if the number is greater than ther array length?

// [0,1,3]
// [3,0,1]