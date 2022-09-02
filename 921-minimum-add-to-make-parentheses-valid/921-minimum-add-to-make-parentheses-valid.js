/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    if (s.length < 2) return 1
    
    const stack = [s[0]]
    
    for (let i = 1; i < s.length; i++) {
        let currParen = s[i]
        let topOfStack = stack[stack.length - 1]
        
        if (topOfStack === '(' && currParen === ')') {
           stack.pop() 
        } 
        else {
         stack.push(currParen)   
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