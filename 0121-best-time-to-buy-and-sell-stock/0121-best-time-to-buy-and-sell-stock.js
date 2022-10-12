/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0
    
    let currMax = 0
    let pair = [[Infinity, 0], [-Infinity, 0]]
    
    for (let i = 0; i < prices.length; i++) {
        let currNum = prices[i]
        
        // swap min
        if (currNum < pair[0][0]) {
            pair[0][0] = currNum
            pair[0][1] = i
            
            pair[1][0] = -Infinity
            pair[1][1] = 1
        } else if (currNum > pair[1][0]) {
            pair[1][0] = currNum
            pair[1][1] = i
            
            let tempMax = pair[1][0] - pair[0][0]
            
            currMax = Math.max(tempMax, currMax)
        }
    }
    
    return currMax
};

// edge case: array is descending order


// Pair of numbers = [[minValue, index], [maxValue, index]]