
var RecentCounter = function() {
    this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)
    if (this.requests.length === 1) return 1
    
    let lowerBound = t - 3000
    let upperBound = t
    let count = 0
    
    for (const req of this.requests) {
        if (req >= lowerBound && req <= upperBound) count++
    }
    return count
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */