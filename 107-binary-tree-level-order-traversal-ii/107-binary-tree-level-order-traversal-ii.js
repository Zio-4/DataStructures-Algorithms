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
var levelOrderBottom = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [[root.val]]
    
    let q = [root]
    let res = []
    let currLvl = []
    
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            currLvl.push(node.val)
        }
        res.unshift(currLvl)
        currLvl = []
    }
    
    return res
 };

// BFS approach, except unshift instead of push


