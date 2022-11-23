/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) return [newInterval];
    
    let res = [];
    
    for (const [start, end] of intervals) {
        if (!newInterval || end < newInterval[0]) {
            res.push([start,end])
        } else if (newInterval[1] < start) {
            res.push(newInterval)
            newInterval = null
            res.push([start,end])
        } else {
            newInterval[0] = Math.min(start, newInterval[0])
            newInterval[1] = Math.max(end, newInterval[1])
        }
    };
    
    if (newInterval) {
        res.push(newInterval)
    }
    
    return res;
};



// Three conditions

// We could push in the current interval

// Push newInterval and then the currentInterval

// Merge



// Approach:


// Create a result array

// Iterate over intervals and check the three conditions

// We will modify newInterval

    // If we already pushed it in, set it equal to null

    // If we need to merge, we will update the values of newInterval
        // Min of the start
        // Max of the end


// After the loop, we need to check if the interval has been pushed in or not which is where are null value will be handy