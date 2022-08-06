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
var maxDepth = function(root) {
    if (!root) return 0
    
    let max = 1
    
    function dfs(node, currDepth) {
        // if (!node) return 0
        
        max = Math.max(currDepth, max)
        
        if (node.left) dfs(node.left, currDepth + 1)
        if (node.right) dfs(node.right, currDepth + 1)
    }
    
    dfs(root, max)
    
    return max
};

// Approach

// DFS to farthest node

// Keep a variable outside helper function for maximum depth
// In helper func, pass in the root and initial maximum (1)
// Update max on outside of the function on every move forward

