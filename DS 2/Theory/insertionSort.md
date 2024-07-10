# Insertion Sort

## 1. What is Insertion Sort?

Insertion sort is a sorting algorithm that iteratively builds a sorted sub-array by inserting each element from the unsorted portion into its correct position within the sorted sub-array. It resembles the way you might sort playing cards in your hand.

## 2. How Insertion Sort Works:

1. Start with the first element (consider it as a sorted list of one element).
2. Pick the next element and compare it with the elements in the sorted list.
3. Insert the picked element into its correct position in the sorted list.
4. Repeat the process until all elements are sorted.

## 3. Time Complexity:

- **Best Case:** O(n) when the array is already sorted.
- **Average Case:** O(n^2)
- **Worst Case:** O(n^2) when the array is sorted in reverse order.

## 4. Space Complexity:

- O(1) because it requires a constant amount of additional memory space.

## 5. Applications:

1. **Small datasets:** Efficient for small arrays due to low overhead.
2. **Nearly sorted data:** Efficient for arrays that are already mostly sorted.
3. **Real-time data:** Can sort data as it arrives.
4. **Educational purposes:** Good for teaching the basics of sorting algorithms.
5. **Hybrid algorithms:** Often used in conjunction with other algorithms for small subarrays (e.g., in Timsort).

## 6. Pros and Cons

### Pros:

- Simple to implement.
- Stable sorting algorithm.
- Adaptive; efficient for small or nearly sorted arrays.

### Cons:

- Inefficient for large datasets.
- O(n^2) time complexity in average and worst cases.
- Not as fast as more advanced sorting algorithms like quicksort or mergesort.
