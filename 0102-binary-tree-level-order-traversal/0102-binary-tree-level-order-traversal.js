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
    
    let q = [root]
    
    let res = []

    let currLevel = []
    
    let length = 1
    
    while (q.length) {
        let node = q.shift()
        length--
        currLevel.push(node.val)
        
        if (node.left) {
            q.push(node.left)
        }
        
        if (node.right) {
            q.push(node.right)
        }
        
        if (length === 0) {
            length = q.length
            res.push(currLevel)
            currLevel = []
        }
        
    }
    
    return res
    
};

// BFS 