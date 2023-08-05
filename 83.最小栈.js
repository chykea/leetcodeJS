var MinStack = function () {
    this.stack = [];
    this.size = 0;
    this.min = [];

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (!this.stack.length) this.min.push(val)
    else this.min[this.min.length - 1] > val ? this.min.push(val) : this.min.push(this.min[this.min.length - 1])
    this.stack[this.size++] = val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.splice(this.size--, 1)
    this.min.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.size - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1]
};
let m = new MinStack()
console.log(m.push(2147483646));
console.log(m.push(2147483646));
console.log(m.push(2147483647));
console.log(m.getMin());

console.log(m.top());

console.log(m.pop());

console.log(m.getMin());
