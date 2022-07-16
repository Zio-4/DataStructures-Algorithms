/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
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
    
    return nums.length
};

// if the number is greater than ther array length?

// [0,1,3]
// [3,0,1]