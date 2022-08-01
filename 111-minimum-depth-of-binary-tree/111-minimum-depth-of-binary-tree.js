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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0
    
    const q = [root]
    let minDepth = 1
    
    while (q.length) {
        const len = q.length
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            
            if (!node.left && !node.right) return minDepth
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        minDepth++
    }
};