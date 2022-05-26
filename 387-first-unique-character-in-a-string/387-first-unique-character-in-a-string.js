/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (s.length === 1) return 0
    const freq = new Map()
    
    for (const l of s){
        if (freq.has(l)) {
            freq.set(l, freq.get(l) + 1)
        } else freq.set(l, 1)
    } 
    
    for (const [key, val] of freq.entries()) {
        if (val === 1) {
            return s.indexOf(key)
        }
    }
    
    return -1 
};