/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = []
    let left = 0
    let right = numbers.length - 1
    
    while (left < right) {
        let sum = numbers[left] + numbers[right]
        
        if (sum < target) left++
        else if (sum > target) right--
        else if (sum === target) {
            result.push(left + 1)
            result.push(right + 1)
            break
        }
    }
    
    return result
};