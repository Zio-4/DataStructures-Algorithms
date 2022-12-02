
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.first = null
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (!this.first) this.first = x
    this.stack1.push(x) 
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stack2.length === 0) {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        
        this.first = null
    }
    
    // console.log(this.stack2)
    
    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stack2.length) {
        return this.stack2[this.stack2.length - 1]
    }
    
    return this.first
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0 && this.stack2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


// APPROACH

// Create two stacks

// Always push to stack1

// If there is no first element, set it to the first element

// If we need shift, we pop everything from stack1 and push to stack2
    // while stack2 is not empty, we will pop from there when we need to shift next