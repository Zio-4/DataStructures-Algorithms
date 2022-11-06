/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const minHeap = new MinPriorityQueue({priority: v => v.distance})
    
    for (const coor of points) {
        let inner = Math.pow((coor[0] - 0), 2) + Math.pow((coor[1] - 0), 2)
        let root = Math.sqrt(inner)
        
        minHeap.enqueue({distance: root, points: coor})
    }
    
    let res = []
    
    while (k--) {
        let coordinate = minHeap.dequeue()
        
//         console.log('coordinate :', coordinate.element.points)
        
        res.push(coordinate.element.points)
    }
    
    return res
};


// Use a min heap

// Enqueue the value as the distance of every point from the origin and also include the coordinates

// Dequeue k coordinates and return the answer array