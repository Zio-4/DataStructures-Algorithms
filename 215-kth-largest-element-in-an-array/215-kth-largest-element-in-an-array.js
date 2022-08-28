/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const maxHeap = new MaxPriorityQueue({priority: v => v})
    let res
    
    for (const num of nums) {
        maxHeap.enqueue(num)
    }
    
    console.log(maxHeap.toArray())
    
    while (k !== 0) {
        if (k === 1) {
            res = maxHeap.dequeue().element
            k--
        } else {
             maxHeap.dequeue()
            k--
        }
    }
    
    return res
    
};


// Approach O(n log n)

// Initialize a maxPQ

// Enqueue each element into the maxPQ (priority: number value)

// Loop again while k is not 0, pulling out elements
