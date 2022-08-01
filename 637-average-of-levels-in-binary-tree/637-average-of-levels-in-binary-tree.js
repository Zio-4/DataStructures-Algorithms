/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root.left && !root.right) return [root.val]
    
    const q = [root]
    let result = []
    
    while (q.length) {
        let len = q.length
        let currLvlAvg = 0
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            console.log(node)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            currLvlAvg += node.val
        }
        
        result.push(currLvlAvg / len)
        currLvlAvg = 0
    }
    
    return result
};