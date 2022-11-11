/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}
    
    for (const char of magazine) {
        map[char] ? map[char]++ : map[char] = 1
    }
    
    for (const char of ransomNote) {
        if (!map[char]) return false
        
        if (map[char] === 0) return false
        
        map[char]--
    }
    
    return true
};


// If anagram can be created


// hashmap of magazine

// Iterate through ransomeNote and subtract 1 from the value of every letter in the hashmap
    // If there is ever a zero already at that OR the value does not exist then return false