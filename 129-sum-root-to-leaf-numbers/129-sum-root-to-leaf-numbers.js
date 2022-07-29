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
var sumNumbers = function(root, pathSum = '', sums = []) {
    if (!root) return 0
    
    pathSum += root.val.toString()
    
    if (!root.left && !root.right) {
        sums.push(parseInt(pathSum))
    }
    
    sumNumbers(root.left, pathSum, sums)
    sumNumbers(root.right, pathSum, sums)
    
    return sums.reduce((prev, curr) => prev + curr, 0)
};

// Time: 19 minutes
// SCore: 3

// DFS
// Go down each path and sum the nodes values
// Add each paths' sum to an array
// reduce the array 