/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    if (s.length === 1) return s
    
    let arr = s.split('')
    
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
        while (!arr[left].match(/[A-Z|a-z|ü|é]/i)  && left < right) left++
        while (!arr[right].match(/[A-Z|a-z|ü|é]/i) && right > left) right--
        
        [arr[left], arr[right]] = [arr[right], arr[left]]
        
        left++
        right--
    }
    
    let str = arr.join('')
    
    return str
};