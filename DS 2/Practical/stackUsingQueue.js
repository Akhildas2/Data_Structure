class StackUsingTwoQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];

    }

    push(element) {
        this.queue2.push(element)
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift())
        }

        let temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }
    pop() {
        if (this.isEmpty()) {
            return "underflow"
        }
        return this.queue1.shift()
    }
    top() {

        if (this.isEmpty()) {
            return "no element"
        }
        return this.queue1[0]
    }
    isEmpty() {
        return this.queue1.length === 0;
    }
}

let stack = new StackUsingTwoQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.top()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true