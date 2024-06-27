//circular queue
class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
        this.front = 0; // Keep track of the front index
    }
    enqueue(value) {
        if (this.size === this.capacity) {
            console.log('Queue is full. Cannot enqueue.');
            return;
        }
        this.queue[(this.front + this.size) % this.capacity] = value;
        this.size++;
    }
    dequeue() {
        if (this.size === 0) {
            console.log('Queue is empty. Cannot dequeue.');
            return;
        }
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
    }
    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
        } else {
            console.log(this.queue.toString());
        }
    }
}


const queue = new CircularQueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();

queue.dequeue();
queue.print();

queue.enqueue(4);
queue.print();
console.log('Queue size:', queue.getSize());
console.log('Is queue empty?', queue.isEmpty());