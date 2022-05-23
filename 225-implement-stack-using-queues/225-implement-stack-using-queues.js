
var MyStack = function() {
    this.stack = []
    this.temp = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.length = this.stack.length + 1
    this.stack[this.stack.length - 1] = x
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // get the last element of the stack
    // push everyhting except last element to temp array
    // set temp array to stack
    // return last element
    console.log("stack before", this.stack)
    let last = this.stack[this.stack.length - 1]
    for (let i = 0; i < this.stack.length - 1; i++){
        this.temp.push(this.stack[i])
    }
    this.stack = this.temp
    this.temp = []
    console.log("stack after", this.stack)
    return last
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    // look at the front
    return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    console.log(this.stack.length)
    return this.stack.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */