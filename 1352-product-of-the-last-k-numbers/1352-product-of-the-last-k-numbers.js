
var ProductOfNumbers = function() {
    this.nums = [1]
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if (!num) this.nums = [1]
    else this.nums.unshift(num * (this.nums[0]))
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    // 0 if k index is undefined
    return (this.nums[0] / this.nums[k]) || 0
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */