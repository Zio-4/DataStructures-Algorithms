/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map = new Map()
    
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (!map.has(num)) map.set(num, i)
        if (num === 0) {
            if (map.get(num) === i) continue
        }
        let double = num * 2
        let half = num / 2
        if (map.has(double) || map.has(half)) return true
    }
    
    return false
};