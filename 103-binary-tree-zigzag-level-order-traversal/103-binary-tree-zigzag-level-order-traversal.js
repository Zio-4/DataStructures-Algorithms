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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    
    const q = [root]
    const result = []
    let depth = 1
    
    while (q.length) {
        const len = q.length
        let lvl = []
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            depth % 2 === 0 ? lvl.unshift(node.val) : lvl.push(node.val)
        }
        depth++
        result.push(lvl)
        lvl = []
    }
    return result
};