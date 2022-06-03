/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let strNum = num.toString()
    
    let kBeauty = 0
    
    for (let i = 0; i < strNum.length - k + 1; i++) {
        let subNum = strNum.slice(i, (i+k))
        
        let parsedNum = parseInt(subNum)
        
        
        if (num % parsedNum === 0) kBeauty++
    }
    
    return kBeauty
};