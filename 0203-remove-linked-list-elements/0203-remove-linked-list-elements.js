/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null
    
    let dummy = new ListNode(0)
    dummy.next = head
    
    let left = dummy
    let right = dummy.next
    
    // remove logic
    while (right.next) {
        if (right.val === val) {
            left.next = right.next
            right = left.next                                   // left = 0
                                                                // right = 1
                                                                // 0 - 2
        } else if (right.val !== val) {
            left = left.next
            right = right.next
        }
    }
    
    if (right.val === val) left.next = null
    
    // if (!dummy.next) return []
    
    return dummy.next
};

// APPROACH

    // Pointer for current node
        // starts at dummy.next

    // If curr.next exists, check if it is the value were looking for
        // make curr.next = curr.next.next


    // else just keep looping

