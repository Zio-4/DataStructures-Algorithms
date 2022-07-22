/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    let i = 0
    let numbers = 1
    let positive = []
    
    while (i < arr.length) {
        if (arr[i] !== numbers) {
            positive.push(numbers)
            if (positive.length === k) return positive.pop()
        } else {
            i++
        }
        numbers++
    }
    
    return arr.length + k
};


// [2,3,4,7,11]

// positive = [1, 5, 6, 8, 9]
// numbers = 2
// // i = 4

// 11 = 8


