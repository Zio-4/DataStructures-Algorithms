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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    
    [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
    
    return root;
};

// Edge cases:

    // There are no nodes
    // There is only the root
    // For a node, only one side has a child node

// Approach

// DFS down the tree and at every swap the left and right