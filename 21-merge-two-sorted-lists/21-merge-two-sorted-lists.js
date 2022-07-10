/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 && list2) return list2
    if (!list2 && list1) return list1
    if (!list1 && !list2) return null
    
    const node = new ListNode(0, null)
    
    let current = node
    
    while (list1 && list2) {
        if (list1.val > list2.val) {
            current.next = list2
            list2 = list2.next
        } else {
            current.next = list1
            list1 = list1.next
        }
        
        current = current.next
        
        if (!list1) current.next = list2
        if (!list2) current.next = list1
        
        if (!list1 && !list2) current.next = null
    }
    
    return node.next
};

// use a variable for list 1 and 2
// Loop and compare each node
// We will add on to whichever list has the first biggest node, or whichever if equal. 
// Move to the next node
// Depending on which list we added to, return that list

