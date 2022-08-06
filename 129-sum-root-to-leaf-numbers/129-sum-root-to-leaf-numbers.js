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
var sumNumbers = function(root) {
    if (!root.left && !root.right) return root.val
    
    let total = 0
    
    function dfs(node, currPath = '') {
        
        currPath += node.val
        
        if (!node.left && !node.right) {
            
            total += parseInt(currPath)
        }
        
        if (node.left) dfs(node.left, currPath)
        if (node.right) dfs(node.right, currPath)
    }
    
    dfs(root)
    return total
};

// DFS 
// Keep the current path's number in a string

// When a leaf a node is reached, add the current string total to the number total.