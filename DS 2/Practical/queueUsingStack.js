class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "Underflow";
        }
        return this.stack2.pop();
    }

    front() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) {
            return "No elements in Queue";
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage:
let queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front());  // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
