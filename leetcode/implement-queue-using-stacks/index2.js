/**循环队列 */
class MyQueue {
    constructor() {
        this.pushArr = [];
        this.popArr = [];
    }
    /**将一个元素放入队列的尾部 */
    push(value) {
        this.pushArr.push(value);
    }
    /**从队列首部移除元素 */
    pop() {
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop());
            }
        }
        return this.popArr.pop();
    }
    /**返回队列首部的元素 */
    peek() {
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop());
            }
        }
        return this.popArr[this.popArr.length - 1];
    }
    /**返回队列是否为空 */
    empty() {
        return !this.pushArr.length && !this.popArr.length;
    }
}

var myQueue = new MyQueue();
; // queue is: [1]
; // queue is: [1, 2] (leftmost is front of the queue)
; // return 1
; // return 1, queue is [2]
; // return false

console.log(myQueue.push(1));

console.log(myQueue.push(2));

console.log(myQueue.peek());
console.log(myQueue.push(3));

console.log(myQueue.push(4));
console.log(myQueue.pushArr);
console.log(myQueue.pop());
console.log(myQueue.empty());