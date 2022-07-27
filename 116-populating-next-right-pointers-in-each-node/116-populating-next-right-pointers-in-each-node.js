/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return null
    
    let q = [root]
    let currLvl = []
    
    while (q.length) {
        let len = q.length
        
        // [4, 5, 6, 7]
        
        for (let i = 0; i < len; i++) {
            const node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            currLvl.push(node)
        }
        
        for (let i = 0; i < currLvl.length; i++) {
            let node = currLvl[i]
            
            if (currLvl[i + 1]) currLvl[i].next = currLvl[i + 1]
        }
        
        currLvl = []
    }
    
    return root
};

// With Extra space:

// BFS Approach with tracking the current level
// When iterating the current level check if there is a node next to it in the queue
// and set next to be that next node

