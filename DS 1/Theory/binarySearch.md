# Binary Search

## What is Binary Search?

Binary search is a fast algorithm used to find the position of a target value in a sorted array. It works by repeatedly dividing the search range in half, comparing the middle element to the target value, and then deciding whether to search the left or right half next. This process continues until the target value is found or the search range is empty.

## How Binary Search Works

### 1. Initialization

- Start with two pointers, one at the beginning (`start`) and one at the end (`end`) of the array.

### 2. Calculate Midpoint

- Compute the middle index `mid` of the array segment as:
  \[
  mid =Math.floor(start + end) / 2.
  \]

### 3. Comparison

- If `array[mid]` equals the target, return `mid` (the index of the target).
- If `array[mid]` is less than the target, update `start` to `mid + 1` and repeat the search in the right half.
- If `array[mid]` is greater than the target, update `end` to `mid - 1` and repeat the search in the left half.

### 4. Termination

- The search continues until `start` is greater than `end`. If the target is not found, return an indication that the target is not in the array (e.g., `-1`).

## Advantages of Binary Search

- **Efficiency**: Significantly faster than linear search for large datasets, reducing the time complexity from \(O(n)\) to \(O(\log n)\).
- **Predictability**: Performs consistently and predictably as the array size grows.

## Limitations

- **Sorted Data Requirement**: Only works on arrays or lists that are already sorted.
- **Static Data**: The array must be static (i.e., not frequently modified), as each insertion or deletion would require resorting for binary search to work effectively.

## Use Cases for Binary Search

- **Searching in Sorted Arrays**
  - **Usage**: To quickly find if a specific element exists in a sorted array.
- **Database Indexing**
  - **Usage**: To efficiently locate records in databases that use sorted indices.
- **Determining Boundaries**
  - **Usage**: To find the boundary values in optimization problems.
- **Real-Time Systems**
  - **Usage**: To manage real-time data that is continuously sorted.
