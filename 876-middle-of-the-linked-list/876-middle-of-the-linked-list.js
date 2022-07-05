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
    let fast = head
    let counter = 1
    while (fast && fast.next) {
        head = head.next
        fast = fast.next.next
        counter++
    }
    console.log(counter)
    
    if (counter % 2 === 0) return head
    else return head
};