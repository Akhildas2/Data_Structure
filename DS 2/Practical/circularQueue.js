class CircularQueue {
    constructor(capacity) {
        this.queue = new Array(capacity);
        this.capacity = capacity;
        this.size = 0;
        this.front = 0; 
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
            let result = [];
            for (let i = 0; i < this.size; i++) {
                result.push(this.queue[(this.front + i) % this.capacity]);
            }
            console.log(result.toString());
        }
    }
}

const queue = new CircularQueue(3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1,2,3

queue.dequeue();
queue.print(); // Output: 2,3,

queue.enqueue(4);
queue.print(); // Output: 2,3,4

console.log('Queue size:', queue.getSize()); // Output: Queue size: 3
console.log('Is queue empty?', queue.isEmpty()); // Output: Is queue empty? false
