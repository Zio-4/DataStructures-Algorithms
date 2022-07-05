/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, map = {}) {
    let nToString = n.toString()
    let arr = nToString.split('')
    let newArr = arr.map(num => num * num)
    let reduced = newArr.reduce((prev, curr) => prev + curr, 0)
    
    if (map[reduced]) return false
    else {
        if (reduced === 1) return true
        
        map[reduced] = 1
        return isHappy(reduced, map)
    }
    console.log(reduced)
};