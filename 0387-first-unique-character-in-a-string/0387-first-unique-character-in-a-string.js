/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {}
    
    for (const char of s) {
        map[char] ? map[char]+= 1 : map[char] = 1
    }
    
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        
        if (map[char] === 1) return i
    }
    
    return -1
}; 

// Store frequency in a map

// iterate again, returning the first letter's index that has a value of 1