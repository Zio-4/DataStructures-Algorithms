/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stk = []
    
    for (let i = 0; i < s.length; i++){
        let top = stk[stk.length - 1]
        
        if (top === '(' && s[i] === ')') stk.pop()
        else stk.push(s[i])
    }
    return stk.length
};


// (()))

// ())

// )))(((

// ((()())


// push everything
 // before push, check if the the top of the stack is ( and the current is ) then pop instead
