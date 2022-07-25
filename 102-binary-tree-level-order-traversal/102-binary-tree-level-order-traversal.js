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
var levelOrder = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [[root.val]]
    
    let result = []
    let q = [root]
    let currLvl = []
    
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            currLvl.push(node.val)
        }
        result.push(currLvl)
        currLvl = []
    }
    
    return result
};

// iterate iteratively (BFS) through each level
// push each level into an array then at the end push that array into a result array