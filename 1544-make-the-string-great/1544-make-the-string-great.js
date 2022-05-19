/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const result = ['']
    
    for (let i = 0; i < s.length; i++){
        let char = s[i]
        let topOfStack = result[result.length-1]
        // letters equal to objective
        console.log("top of Stack: ", topOfStack)
        console.log("top of stack lowercased :", topOfStack.toLowerCase())
        if (char.toLowerCase() === topOfStack.toLowerCase() && char !== topOfStack) {
            result.pop()
        } else 
            result.push(char)
    }
    
    return result.join('')
};

// Forgot case where Capital letter comes first