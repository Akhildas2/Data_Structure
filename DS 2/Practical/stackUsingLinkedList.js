// Stack in linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }


    push(data) {
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }


    pop() {
        if (this.isEmpty()) {
            return null;
        }
        let popped = this.top;
        this.top = this.top.next;
        this.size--;
        return popped.data;
    }


    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.top.data;
    }


    getSize() {
        return this.size;
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.getSize());
console.log(stack.isEmpty()); 
