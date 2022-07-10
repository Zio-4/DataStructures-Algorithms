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
    // if (!head.next) return head
    
    let fast = head
    console.log('fast', fast)
    console.log('fast.next', fast.next)
    
    while (fast && fast.next) {
        console.log('hello')
        head = head.next
        fast = fast.next.next
    }
    
    // console.log(head)
    
    return head
};