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
    if (!root) return root;
    
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    
    return root;
};

// Given the root, invert the tree and return the root
                                    // ---------------
// For every child node, left and right are swapped

// DFS
