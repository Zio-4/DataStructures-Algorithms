/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let callStack = []
    let results = new Array(n).fill(0)
    let prevTime
    
    logs.forEach(log => {
        let splitLog = log.split(":")
        
        let id = parseInt(splitLog[0])
        let action = splitLog[1]
        let time = parseInt(splitLog[2])
        
        if (action === 'start') {
           
            if (callStack.length > 0) {
                let topOfStack = callStack[callStack.length - 1]            
                results[topOfStack] += (time - prevTime)
            }
            callStack.push(id)
            prevTime = time
        } else {
            const last = callStack.pop()
            results[last] += (time - prevTime + 1)
            prevTime = time + 1
        }
    })
    
    return results
};