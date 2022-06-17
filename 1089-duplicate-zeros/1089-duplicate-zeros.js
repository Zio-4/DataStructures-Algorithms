/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if (arr.length === 1) return arr
    
    const n = arr.length
    
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            arr.splice(i+1, 0, 0)
            i+=1
        } 
    }
    
    arr.splice(n)
    
    return arr
};