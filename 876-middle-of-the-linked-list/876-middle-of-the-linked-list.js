/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let length = 0
    let temp = head
    while (temp) {
        temp = temp.next
        length++
    }

    if (length === 0) return null
    if (length === 1) return head
    
    let mid = Math.ceil(length / 2)
    
    if (length % 2 === 0) {
        mid++
    }
    
    console.log('mid', mid)
    
    let counter = 1
    let node = head
    while (counter !== mid) {
        console.log('node', node)
        node = node.next
        counter++
    }
    
    return node
    
};