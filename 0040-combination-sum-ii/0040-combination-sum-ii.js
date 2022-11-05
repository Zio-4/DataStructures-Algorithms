/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (target == 0) return []
    
    candidates.sort((a,b) => a - b)
    
    let res = []
    
    let prev = -1
    
    const helper = (currSum, path, idx) => {
        if (currSum == 0) {
            res.push([...path])
            return
        }
        
        if (currSum < 0) {
            return
        }
        
        
        for (let i = idx; i < candidates.length; i++) {
            if (candidates[i] === prev) continue;
            path.push(candidates[i])
            helper(currSum - candidates[i], path, i + 1)
            path.pop()
            prev = candidates[i]
        }
    }
    
    helper(target, [], 0)
    
    return res
    
};