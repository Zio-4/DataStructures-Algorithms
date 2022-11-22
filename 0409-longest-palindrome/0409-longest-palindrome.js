/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) return 1
    
    const map = {}
    
    for (const char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    let currOdd = ['', 0]
    
    let count = 0
    
    for (const [key, value] of Object.entries(map)) {
        count += value
        
        if (currOdd[0].length && value % 2 !== 0) {
            count--
        }
        
        if (value % 2 !== 0) currOdd = [key, value]
    }
    
    return count
    
};

// Approach

    // Frequency counter of characters
        // At most, we can 1 group of characters have an odd amount, and the rest must be even

    