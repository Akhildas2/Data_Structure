class MinHeap {
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
        while (index > 0 && this.heap[index] < this.heap[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let left = this.leftChild(index);
            let right = this.rightChild(index);
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (index === smallest) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    reverse() {
        const reversedArray = [...this.heap].reverse();
        console.log(reversedArray);
    }
}

// Example usage
const minHeap = new MinHeap();

minHeap.insert(33);
minHeap.insert(56);
minHeap.insert(47);
minHeap.insert(2);
minHeap.insert(7);

console.log(minHeap.pop()); // Output: 2 (the minimum value)
console.log(minHeap); // Heap after popping the minimum value
minHeap.reverse(); // Reversed array
