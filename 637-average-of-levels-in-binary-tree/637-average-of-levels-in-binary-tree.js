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
    
    let q = [root]
    let res = []
    let currentLevelAverage = 0
    
    while (q.length) {
        let qlen = q.length

        for (let i = 0; i < qlen; i++) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            currentLevelAverage += node.val
        }
        res.push(currentLevelAverage / qlen)
        currentLevelAverage = 0
    }
    
    return res
};