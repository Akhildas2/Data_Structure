# Asymptotic Notation

Asymptotic notation is a fundamental concept in computer science and data structures. It provides a way to describe the efficiency of algorithms in terms of time and space complexity as the input size grows. There are several types of asymptotic notations used to express these complexities:

## 1. Big O Notation (O) - Worst-Case Scenario
Big O notation describes the upper bound of the time complexity. It gives the worst-case scenario of an algorithm's growth rate as the input size \( n \) approaches infinity. This helps in understanding the maximum amount of time an algorithm can take to complete.

### Example
If an algorithm's time complexity is \( O(n^2) \), it means that in the worst case, the time it takes to complete the algorithm grows quadratically with the size of the input.

## 2. Omega Notation (Ω) - Best-Case Scenario
Omega notation describes the lower bound of the time complexity. It gives the best-case scenario of an algorithm's growth rate as the input size \( n \) approaches infinity. This is useful for understanding the minimum amount of time an algorithm will take to complete.

### Example
If an algorithm's time complexity is \( \Omega(n \log n) \), it means that in the best case, the time it takes to complete the algorithm grows at least as quickly as \( n \log n \).

## 3. Theta Notation (Θ) - Tight Bound
Theta notation describes the tight bound of the time complexity. It provides both the upper and lower bounds, meaning it gives an exact asymptotic behavior of the algorithm. If an algorithm has a complexity of \( \Theta(f(n)) \), it means that the algorithm's running time grows at the rate of \( f(n) \) for large \( n \).

### Example
If an algorithm's time complexity is \( \Theta(n) \), it means that the time it takes to complete the algorithm grows linearly with the size of the input.

## 4. Little o Notation (o) - Strict Upper Bound
Little o notation describes an upper bound that is not asymptotically tight. It provides a strict upper bound, meaning the algorithm's growth rate is less than a particular function as the input size \( n \) approaches infinity.

### Example
If an algorithm's time complexity is \( o(n^2) \), it means that the algorithm runs faster than \( n^2 \) for large \( n \), but not necessarily in the worst-case scenario.

## 5. Little omega Notation (ω) - Strict Lower Bound
Little omega notation describes a lower bound that is not asymptotically tight. It provides a strict lower bound, meaning the algorithm's growth rate is more than a particular function as the input size \( n \) approaches infinity.

### Example
If an algorithm's time complexity is \( \omega(n) \), it means that the algorithm takes more time than \( n \) for large \( n \), but not necessarily in the best-case scenario.

## Summary

- **Big O (O)**: Upper bound (worst case)
- **Omega (Ω)**: Lower bound (best case)
- **Theta (Θ)**: Tight bound (average case)
- **Little o (o)**: Strict upper bound (non-tight)
- **Little omega (ω)**: Strict lower bound (non-tight)
