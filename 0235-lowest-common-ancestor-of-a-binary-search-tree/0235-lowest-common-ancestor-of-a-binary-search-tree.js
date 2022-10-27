/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    console.log('root val: ', root.val)
    console.log('p val: ', root.val)
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }
    
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    
    return root
};

// Edge case

    // Node can be descendant of itself

