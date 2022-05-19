/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const record = []
    
    for (let i = 0; i < ops.length; i++) {
        let char = ops[i]
        if (Number(char)){
            record.push(Number(char))
        } else if ( char === '+'){
            record.push((record[record.length-1] + record[record.length-2]))
        } else if (char === 'D'){
            record.push((record[record.length-1] * 2))
        } else if (char === 'C'){
            record.pop()
        }
    }
    
    // sum record
    return record.reduce((prevValue, currValue) => prevValue + currValue, 0)
};