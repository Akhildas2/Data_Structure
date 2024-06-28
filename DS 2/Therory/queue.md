# Queue

## 1. What is Queue?

A Queue is a linear data structure that follows the First In, First Out (FIFO) principle, meaning the first element added to the queue will be the first one to be removed. This is similar to a real-life queue, like a line of people waiting to buy tickets.

## 2. Operations on Queues

1. **Enqueue:** Add an element to the end of the queue.
2. **Dequeue:** Remove an element from the front of the queue.
3. **Front/Peek:** Get the front element without removing it.
4. **Rear:** Get the last element without removing it.
5. **IsEmpty:** Check if the queue is empty.
6. **IsFull:** Check if the queue is full (for fixed-size queues).

## 3. Implementation

* **Array-Based Queues:** Efficient for enqueue and dequeue at the rear, but less efficient for dequeue or peek at the front if elements need to be shifted.
* **Linked List-Based Queues:** More flexible for insertions or deletions at any position, but may have overhead for node creation/deletion compared to arrays.

## 4. Applications of Queues

1. **CPU Scheduling:** Managing processes in operating systems.
2. **Disk Scheduling:** Managing disk access tasks.
3. **Print Queue:** Managing print jobs in a printer.
4. **Network Data Packets:** Managing packets in networking.
5. **Breadth-First Search (BFS):** Used in graph traversal algorithms.
6. **Order Processing:** Managing orders in a business process.

## 5. Pros and Cons of Queues

### Pros:

1. **Order Preservation:** Ensures that elements are processed in the order they were added.
2. **Simple Implementation:** Easy to implement and understand.
3. **Concurrency Management:** Useful in managing tasks in a multithreaded environment, ensuring tasks are executed in order.
4. **Resource Management:** Effective in managing resources that are shared among multiple consumers.

### Cons:

1. **Fixed Size:** If implemented with a fixed size, the queue can fill up, leading to overflow issues.
2. **Limited Access:** Only the front and rear elements are accessible directly; accessing elements in the middle can be inefficient.
3. **Inefficiency in Some Operations:** Operations like searching, deleting elements from the middle, and inserting in the middle are not efficient.

## 6. Types of Queues

1. **Simple Queue:** The basic FIFO queue.
2. **Circular Queue:** The last position is connected back to the first position to make a circle.
3. **Priority Queue:** Each element is associated with a priority, and elements are dequeued based on priority.
4. **Double-ended Queue (Deque):** Elements can be added or removed from both ends.

## 7. Why We Use Queues

Queues are used in various applications where tasks need to be managed in the order they occur. They help in situations where the order of processing is important.

## 8. Time and Space Complexity

### Array-based Queue:

* **Time Complexity:**
    - Enqueue: O(1)
    - Dequeue: O(1)
    - Peek: O(1)
    - IsEmpty: O(1)
    - IsFull: O(1)

* **Space Complexity:** O(n) where n is the size of the array.

### Linked List-based Queue:

* **Time Complexity:**
    - Enqueue: O(1)
    - Dequeue: O(1)
    - Peek: O(1)
    - IsEmpty: O(1)

* **Space Complexity:** O(n) where n is the number of elements, including extra space for pointers.
