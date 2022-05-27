
var ProductOfNumbers = function() {
    this.stream = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.stream.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    console.log("arr =", this.stream)
    let lastIdx = this.stream.length - 1
    let prod = 0
    let first = true
    for (let i = lastIdx; i > lastIdx - k; i--) {
        if (first) {
            prod = this.stream[i]
            first = false
        } 
        else prod *= this.stream[i]
    }
    return prod
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */