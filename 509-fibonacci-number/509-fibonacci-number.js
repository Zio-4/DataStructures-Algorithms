/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n, memo = {}) {
    if (n === 1 || n === 0) return n
    
    memo[n] = fib(n - 1) + fib(n - 2)
    
    if (memo[n]) return memo[n]
    
    return fib(n - 1) + fib(n - 2)
};