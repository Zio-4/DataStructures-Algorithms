/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const map1 = {}
    const map2 = {}
    
    for (const l of s) {
        map1[l] ? map1[l] += 1 : map1[l] = 1
    }
    
    for (const l of t) {
        map2[l] ? map2[l] += 1 : map2[l] = 1
    }
    
    console.log(map1)
    
    for (let [key, value] of Object.entries(map1)) {
        if (map2[key] !== value) return false
    }
    
    return true
    
};

// Edge cases:

    // Lengths of strings can differ (false)


// Approach

    // Use a frequency counter to frequency of both strings

    // Iterate through both hash maps to check if the keys values are the same


