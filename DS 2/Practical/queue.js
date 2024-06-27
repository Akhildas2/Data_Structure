//queue

class Queue {
    constructor() {
        this.queue = [];
    }


    enqueue(element) {
        this.queue.push(element)
    }
    dequeue() {
        if (this.isEmpty()) {
            return "underflow , Cannot perform dequeue"
        }
        return this.queue.shift();
    }
    isEmpty() {
        return this.size() === 0
    }
    front() {
        if (this.isEmpty()) {
            return "No element in the Queue"
        }
        return this.queue[0]
    }
    size() {
        return this.queue.length;
    }
    print() {
        if (this.isEmpty()) {
            return "Stack is Empty"
        }

        this.queue.forEach(element => {
            console.log(element);
        })
    }
}

const myQueue = new Queue();
myQueue.enqueue(6);
myQueue.enqueue(16);
myQueue.enqueue(26);
myQueue.dequeue()

console.log(myQueue.front())
myQueue.print()
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue.dequeue())
console.log(myQueue.front())

console.log(myQueue.size())
