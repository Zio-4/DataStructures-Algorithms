/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    if (s.length < 2) return 1
    
    const stack = [s[0]]
    
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] === '(' && s[i] === ')') {
           stack.pop() 
        } 
        else {
         stack.push(s[i])   
        }
    }
    
    return stack.length
};

// )()((

// Stack = [),(,(]


// (()))))(())
// 3

// Push everything

// Pop: If top of stack is opening and current is closing

// -----------------------------------------------------------------
    
// ())
// (((
    
//  []