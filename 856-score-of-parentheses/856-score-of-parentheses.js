/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = []
    let cur = 0;
    for(let c of s) {
        if(c == '(') {
            stack.push(cur);
            cur = 0;
        } else {
            cur = stack.pop() + Math.max(1, cur*2);
        }
    }
    return cur;
};

// Keep track of opening parantheses in the stack
// Keep a score variable
// pop for every closing pranthes
// update the score based on number of opening parantheses


// if stack.length is 1
// pop, reset it to 0

