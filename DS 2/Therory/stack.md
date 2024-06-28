# Stack

## 1.What is Stack?

A stack is a linear data structure that follows a specific order for operations: Last In, First Out (LIFO). This means that the last element added to the stack is the first one to be removed. Imagine a stack of plates; you can only take the top plate off the stack or add a new plate on top.

## 2.Operations

- **Push**: Adds a new element onto the top of the stack.
- **Pop**: Removes and returns the top element from the stack.
- **Peek**: Returns the top element without removing it.
- **IsEmpty**: Checks if the stack is empty.
- **IsFull**: Checks if the stack is full (applicable only if the stack has a fixed size).

## 3.Implementation

Stacks can be implemented using various techniques, including:

1. **Arrays**: Simple and efficient for fixed-size stacks.
2. **Linked Lists**: More flexible for dynamic size stacks, but may have slightly slower performance compared to arrays.

## 4.Applications of Stacks

1. **Expression Evaluation**: Used by compilers to evaluate postfix and prefix expressions.
2. **Function Calls**: The system stack keeps track of function calls and local variables during program execution.
3. **Undos/Redos**: Implemented in many software programs to allow users to reverse actions.
4. **Browsing History**: The back button in web browsers utilizes a stack to store previously visited pages.
5. **Syntax Analysis**: Parsers in compilers often use stacks to check for balanced parentheses and other syntactic structures.
6. **Backtracking Algorithms**: Such as depth-first search in trees and graphs.

## 5.Pros and Cons of Using Stacks

### Pros:

- **Simplicity**: Easy to implement and use.
- **Efficiency**: Provides constant time complexity for push and pop operations, O(1).
- **Memory Management**: Helps in memory management through stack allocation.

### Cons:

- **Limited Access**: Only the top element can be accessed directly.
- **Potential for Overflow/Underflow**: Fixed-size stacks can overflow if too many elements are pushed, or underflow if elements are popped from an empty stack.

## 6.Time Complexity of Stack Operations

- **Push** (Adding an element): O(1)
- **Pop** (Removing an element): O(1)
- **Peek/Top** (Accessing the top element): O(1)
- **isEmpty** (Checking if the stack is empty): O(1)
- **Size** (Getting the number of elements): O(1)

## 7.Space Complexity of Stack Implementations

- **Array-based Stack**: O(n)
- **Linked List-based Stack**: O(n)

## 8.Why Do We Use Stacks?

Stacks are used because they are simple and efficient for managing data in a way that follows the LIFO principle. They are particularly useful for tasks that involve reversing processes, backtracking, or managing nested structures.
