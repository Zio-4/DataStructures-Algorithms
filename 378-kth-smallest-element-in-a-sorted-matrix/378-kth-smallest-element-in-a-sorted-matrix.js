/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const minPQ = new MinPriorityQueue({priority: v => v})
    
    let smallest = 0
    
    for (const row of matrix) {
        for (const col of row) {
            minPQ.enqueue(col)
        }
    }
    
    while (k!==0){
        let el = minPQ.dequeue().element
        k--
        if (k === 0) {
            smallest = el
        }
    } 
    
    return smallest
};

// Given a sorted matrix, find the kth smallest element in the sorted order, not kth distinct element.

// Edge cases;
    // K is greater than any of the amount of elements in the matrix


// Approach #1 -- DOES NOT CUZ OF DISTINCT

    // Because the elements are sorted vertically and horizontally, we can just loop through the input until we get to the k count

// Approach #2

    // Loop over matrix, enqueue eveery element in a min heap
    // The then dequeue while k is not 0, return the kth element

    //

// Approach #3

    // Loop over matrix, enqueue eveery element in a max heap
    // The max heap will of size k and will enqueue / dequeu based on the following:

    //