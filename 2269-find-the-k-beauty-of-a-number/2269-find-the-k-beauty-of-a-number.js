/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let s = num.toString()
    let kBeauty = 0
    
    for (let i = 0; i < s.length - k + 1; i++) {
        let sub = s.slice(i, i + k)
        
        let number = parseInt(sub)

        if (num % number === 0) kBeauty++
    }
    
    return kBeauty
};