var MyQueue = function() {
    this.input = []
    this.output = []
};

MyQueue.prototype.push = function(x) {
    this.input.push(x)
};

MyQueue.prototype.pop = function() {
    if(!this.output.length){
        while(this.input.length){
            this.output.push(this.input.pop())
        }
    }
    return this.output.pop()
};

MyQueue.prototype.peek = function() {
    if(!this.output.length){
        while(this.input.length){
            this.output.push(this.input.pop())
        }
    }
    return this.output[this.output.length - 1]
};

MyQueue.prototype.empty = function() {
    return !this.input.length && !this.output.length
};

var myQueue = new MyQueue();
; // queue is: [1]
; // queue is: [1, 2] (leftmost is front of the queue)
; // return 1
; // return 1, queue is [2]
; // return false

console.log(myQueue.push(1));

console.log(myQueue.push(2));

console.log(myQueue.peek());
console.log(myQueue.input);
console.log(myQueue.pop());
console.log(myQueue.empty());


