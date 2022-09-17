/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    
    let open = n
    let close = n
    
    let str = ""
    
    function recurse(o, c, s) {
        if (s.length === n * 2) {
            res.push(s)
            return
        }
        
        if (o !== 0) {
            recurse(o - 1, c, s + "(")
        }
        
        if (c > o) {
            recurse(o, c - 1, s + ")")
        }
    }
    
    recurse(open, close, str)
    
    return res
};

// Given pairs of parantheses, generate all possible valid combinations

// Return an array of valid combinations



// Every combination will start with an opening bracket

// Keep track of open and close
// while we have open, we can keep adding closed 

// open and close is either equal or close is greater than open


// Approach: 
// Recusively build the paratheses

// Initaite variables for open and close which both start at n
// Initiate a variable for the result

// Use a helper function to build every combination 
    // The helper function will take in n, open, close, currentString

    // Call helper function recursively,
        // first adding open parenthese
        
        // then while close is greater than open
            // recurse adding closing parentheses