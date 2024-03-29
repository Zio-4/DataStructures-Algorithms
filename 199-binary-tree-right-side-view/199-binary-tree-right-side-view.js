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
var rightSideView = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    
    const res = []
    const q = [root]
    
    while(q.length) {
        const len = q.length
        
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            if (i === len - 1) res.push(node.val)
        }
    }
    
    return res
    
};