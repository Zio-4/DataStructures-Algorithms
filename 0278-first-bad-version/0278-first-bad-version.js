/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        
        let bad = 0
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            
            if (isBadVersion(mid)) {
                bad = mid
                break
            } else {
                left = mid + 1
            }
        }
        
        
        while (bad--) {
            if (!isBadVersion(bad)) return bad + 1
        }
    };
};

// Binary search to find the first bad version

// From there loop down until a the first good version