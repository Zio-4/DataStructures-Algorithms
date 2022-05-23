
var MyStack = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    for (var i = 1, len = this.queue.length; i < len; i += 1) {
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    for (var i = 1, len = this.queue.length; i < len; i += 1) {
        this.queue.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.queue.push(ele);

    return ele;

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};


/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */