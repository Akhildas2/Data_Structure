# Bubble Sort

## 1. What is Bubble Sort?

Bubble Sort is a simple comparison-based sorting algorithm. It is named for the way smaller elements "bubble" to the top of the list through successive swaps.

## 2. How Bubble Sort Works?

1. **Compare Adjacent Elements:** Starting from the first element, compare it with the next element.
2. **Swap if Necessary:** If the first element is greater than the next element, swap them.
3. **Iterate:** Move to the next pair of elements and repeat the process.
4. **Pass Through the List:** Continue this process for the entire list. After one pass, the largest element will have bubbled to its correct position.
5. **Repeat:** Perform the process for the remaining elements, excluding the last sorted ones. Repeat until no swaps are needed.

## 3. Characteristics

1. **Time Complexity:**
    - **Worst-case:** O(n^2) (when the array is sorted in reverse order.)
    - **Average-case:** O(n^2)
    - **Best-case:** O(n) (when the array is already sorted.)
2. **Space Complexity:** O(1) (because it requires a constant amount of additional memory space.)
3. **Stability:** Yes (does not change the relative order of equal elements)
4. **Adaptive:** Yes (performance improves if the list is partially sorted)

## 4. Uses and Applications

### Uses

1. **Educational Tool:** Introduces basic sorting concepts in computer science courses. Helps understand comparison, swapping, and iteration.
2. **Checking Sortedness:** Quickly checks if a list is already sorted.
3. **Easy Implementation:** Simple to code and understand for small tasks.

### Applications

1. **Small Data Sets:** Effective for sorting small, nearly sorted datasets.
2. **Basic Optimization Tasks:** Can be adapted for specific, simple optimization problems.
3. **Benchmarking:** Used as a baseline to compare with more advanced sorting algorithms.

## 5. Pros and Cons

### Pros

1. **Simplicity:** Easy to understand and implement.
2. **Stability:** Maintains the relative order of equal elements.
3. **Adaptive:** Can stop early if the list is already sorted.

### Cons

1. **Inefficiency:** O(n^2) time complexity in the average and worst cases.
2. **High Number of Comparisons and Swaps:** Not suitable for large datasets.
3. **Performance:** Generally slower compared to more efficient sorting algorithms like quicksort or mergesort.
