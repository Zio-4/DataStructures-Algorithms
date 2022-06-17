/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) return true
    if (!s && !t) return true
    if (s && !t) return false
    
    let counter = 0
    
    let pointer = 0
    for (let i = 0; i < t.length; i++) {
        if (s[pointer] === t[i] ) {
            counter++
            pointer++
        }
        if (counter === s.length) break
    }
    
    return counter === s.length
};

// TIme: 11 + 6

// Score: 4

// 'abbbbb' 'afsdbbbfsdb'

// "axc"  "xacfscfdx"