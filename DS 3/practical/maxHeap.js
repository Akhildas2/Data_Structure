class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChild(index) {
        return 2 * index + 1;
    }

    rightChild(index) {
        return 2 * index + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0 && this.heap[index] > this.heap[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return max;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = this.leftChild(index);
            let right = this.rightChild(index);
            let largest = index;

            if (left < length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (index === largest) {
                break;
            }

            this.swap(index, largest);
            index = largest;
        }
    }

    reverse() {
        const reversedArray = [...this.heap].reverse();
        console.log(reversedArray);
    }
}

// Example usage
const maxHeap = new MaxHeap();

maxHeap.insert(33);
maxHeap.insert(56);
maxHeap.insert(47);
maxHeap.insert(2);
maxHeap.insert(7);

console.log(maxHeap.pop()); // Output: 56 (the maximum value)
console.log(maxHeap); // Heap after popping the maximum value
maxHeap.reverse(); // Reversed array
