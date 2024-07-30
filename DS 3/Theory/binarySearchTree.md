# Binary Search Tree (BST)

## 1.Introduction of BST

A Binary Search Tree (BST) is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. The key property of a BST is that for each node:

- The values in the left subtree are less than the node's value.
- The values in the right subtree are greater than the node's value.

This ordering property allows for efficient search, insertion, and deletion operations, typically achieving an average time complexity of O(log n) for these operations when the tree is balanced.

## 2.Properties

1. **Node Structure**:

   - Each node contains a value.
   - Each node has at most two children: a left child and a right child.

2. **Ordering Property**:
   - The left subtree of a node contains only values less than the node's value.
   - The right subtree of a node contains only values greater than the node's value.
   - This property must hold for every node in the tree.

## 3.Operations

### 1.Search

- Start at the root.
- If the target value is less than the current node's value, move to the left child.
- If the target value is greater than the current node's value, move to the right child.
- Repeat until the target value is found or the subtree is null.

### 2.Insertion

- Start at the root.
- Compare the value to be inserted with the current node's value.
- If the value is less than the current node's value, move to the left child; if greater, move to the right child.
- When a null position is found, insert the new value there.

### 3.Deletion

- **Node with no children (leaf)**: Simply remove the node.
- **Node with one child**: Remove the node and replace it with its child.
- **Node with two children**: Find the in-order successor (smallest value in the right subtree) or in-order predecessor (largest value in the left subtree), copy its value to the node to be deleted, and then delete the successor or predecessor.

## 4.Example

Consider the following BST:

50
/ \
30 70

### Operations

- **Search for 40**:

  - Start at 50: 40 < 50, move left.
  - At 30: 40 > 30, move right.
  - At 40: Found.

- **Insert 25**:

  - Start at 50: 25 < 50, move left.
  - At 30: 25 < 30, move left.
  - At 20: 25 > 20, move right.
  - Insert 25 as the right child of 20.

- **Delete 70**:
  - 70 has two children.
  - Find in-order successor (80).
  - Replace 70 with 80.
  - Delete 80.

## 5.Applications

1. **Databases**: BSTs are used in database indices for efficient data retrieval.
2. **File Systems**: Directory structures often use trees to manage hierarchical data.
3. **Search Algorithms**: Used in various search algorithms for efficient searching.
4. **Dynamic Sets**: Suitable for dynamic data where frequent insertions and deletions are required.
5. **Auto-complete Features**: Used in implementations of autocomplete and spell-checking algorithms.

## 6.Usage

- **Efficient Search, Insertion, and Deletion**: Average time complexity is \(O(\log n)\) due to the tree's height.
- **Dynamic Data Structures**: Can handle a dynamic set of elements with frequent insertions and deletions.

## 7.Limitations

- **Skewed Trees**: If not balanced, the tree can become skewed (like a linked list), causing operations to degrade to \(O(n)\).
- **Balancing**: Requires self-balancing techniques like AVL trees or Red-Black trees to maintain \(O(\log n)\) operations consistently.

## For Animation

[Binary Search Tree Animation](https://yongdanielliang.github.io/animation/web/BST.html)

[VisuAlgo: Binary Search Tree](https://visualgo.net/en/bst)

[Tree Visualizer by cs.usfca.edu](https://www.cs.usfca.edu/~galles/visualization/BST.html)
