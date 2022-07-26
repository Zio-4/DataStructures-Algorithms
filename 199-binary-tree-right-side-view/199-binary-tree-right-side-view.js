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
// var rightSideView = function(root) {
//     if (!root) return []
//     if (!root.left && !root.right) return [root.val]
    
//     let res = [root.val]
    
//     dfs(root)
    
//     return res
    
//     function dfs(node) {
//         if (!node) return
        
//         if (node.right) {
//             res.push(node.right.val)
//             return dfs(node.right)
//         } else if (node.left) {
//             res.push(node.left.val)
//             return dfs(node.left)
//         }
//     }
// };

var rightSideView = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val]
    
    let res = []
    let q = [root]
    let currLvl = []
    
    while(q.length) {
        const len = q.length
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            
            currLvl.push(node.val)
        }
        
        res.push(currLvl.pop())
        currLvl = []
    }
    
    return res
    
};

Approach:

// DFS
// Always check if there is a right side, if there is go down right
// Otherwise go left
// Repeat until at root