/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let res = []
    const minPQ = new MinPriorityQueue({priority: v => v.distance})
    
    for (const [x, y] of points) {
        const innerOP = (x * x) + (y * y)
        const distanceFromOrigin = Math.sqrt(innerOP)
        minPQ.enqueue({pair: [x, y], distance: distanceFromOrigin})
    }
    
    while (k !== 0) {
        res.push(minPQ.dequeue().element.pair)
        k--
    }
    
    return res
};

// Iterate over points, calculating the distance from the origin for each pair

    // Add the pair and the distance value to the PQ
    // {pair: [x,y], distance: Z}

// Loop until k = 0
    // Extract the root and add the pair to the result array