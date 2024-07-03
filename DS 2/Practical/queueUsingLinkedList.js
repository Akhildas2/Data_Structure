// queue using linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let dequeued = this.front;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        this.size--;
        return dequeued.data;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.data;
    }
    getSize() {
        return this.size;
    }
}


let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.isEmpty()); 