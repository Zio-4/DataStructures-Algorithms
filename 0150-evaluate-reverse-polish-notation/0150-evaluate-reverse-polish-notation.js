/**
 * @param {string[]} tokens
 * @return {number}
 */
// var evalRPN = function(tokens) {
//    if (tokens.length == 1) return tokens[0] 
    
//    let prevOp = null
   
//    const stack = []
   
//    for (const el of tokens) {
       
//        console.log('el: ', el)
//        console.log('prevOp: ', prevOp)
       
//        if (el === '+' || el === '-' || el === '*' || el === '/') {
//            if (prevOp == null) {
//                let b = stack.pop()
//                let a = stack.pop()
               
//                if (el === '+') {
//                    prevOp = a + b
//                } else if (el === '-') {
//                    prevOp = a - b
//                } else if (el === '*') {
//                    prevOp = a * b
//                } else if (el === '/') {
//                    let op = a / b
//                    prevOp = Math.trunc(op)
//                }
//            } else {
//                // previous operation occured
               
//                let num = stack.pop()
               
//                if (el === '+') {
//                    prevOp = num + prevOp
//                } else if (el === '-') {
//                    prevOp = num - prevOp
//                 } else if (el === '*') {
//                    prevOp = num * prevOp
//                } else if (el === '/') {
//                    let op = num / prevOp
//                    prevOp = Math.trunc(op)
//                }
//            }
//        } else {
//             stack.push(parseInt(el))
//        }
//    }
   
    
//    return prevOp
// };

let a, b
const evaluate = {"+": ()=>a+b, "-": ()=>a-b, "*": ()=>a*b, "/": ()=>~~(a/b)}

var evalRPN = function(tokens) {
    let stack = []
    for (let t of tokens) {
        if (evaluate[t]) {
            b = stack.pop(), a = stack.pop()
            stack.push(evaluate[t]())
        } else stack.push(~~t)
    }
    console.log(stack)
    return stack[0]
};


           // console.log('stack:', stack)


// ASSUMPTIONS

// If after 2 intergers the next elements are intergers then we know they are part of an expression 

// Push intergers to stack

// When operator is reached:

// If we have no previous operation completed,
    // pop off two elements and do the operation
    // store the result for the next operations

// Otherwise, we know we are already working on an ongoing operation and pop off one element