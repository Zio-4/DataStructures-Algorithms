/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) this.stack.push(x)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length > 0) {
        return this.stack.pop()
    }
    else {
        return -1
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    // If there are less than k elements in the stack
    if (k > this.stack.length) {
        this.stack = this.stack.map(ele => ele + val)
    } else {
        this.stack = this.stack.map((ele, idx) => {
            if (idx < k){
               return ele + val
            } else return ele
        }) 
    }
    console.log(this.stack)
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// 3
// [1,2,3,]