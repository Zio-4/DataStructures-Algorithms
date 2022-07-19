/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const result = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > result[result.length - 1][1]) {
            result.push(intervals[i])
        } else {
            result[result.length - 1] = [result[result.length - 1][0], Math.max(intervals[i][1], result[result.length - 1][1])]
        }
    }
    
    return result
};

// Approach

// sort the intervals by start times in ascending order
// create a result array with the first interval
// loop through the intervals and compare the times

