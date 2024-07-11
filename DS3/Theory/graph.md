# Graphs in Data Structures

## 1. Graph

A graph in computer science is a non-linear data structure consisting of nodes (vertices) and edges that connect these nodes. It's used to represent relationships or connections between pairs of objects.

## 2. Properties of a Graph

- **Vertices (Nodes):**

  - Each element in a graph is called a vertex or a node.
  - Nodes can have associated data, such as names or values.

- **Edges:**

  - An edge is a connection between two nodes.
  - It may be directed (one-way) or undirected (two-way).
  - Directed edges have an orientation indicating a specific direction from one node to another.
  - Undirected edges have no direction and represent bidirectional relationships.

- **Weight:**
  - Some graphs assign a weight or cost to each edge, indicating the "cost" or "distance" between connected nodes.
  - Weighted graphs are useful for modeling scenarios where edges represent physical distances, costs, or other measurable quantities.

## 3. Types of Graphs

### 1. Directed Graph (Digraph)

- Each edge has a direction.
- The relationship between nodes is asymmetric.

### 2. Undirected Graph

- Edges have no direction.
- The relationship between nodes is symmetric.

### 3. Weighted Graph

- Each edge has an associated weight or cost.
- Useful for modeling scenarios with varying edge costs.

### 4. Unweighted Graph

- All edges are considered to have the same weight or cost.
- Simpler than weighted graphs but less expressive.

### 5. Cyclic Graph

- Contains at least one cycle, where a cycle is a path that starts and ends at the same vertex.

### 6. Acyclic Graph

- Does not contain any cycles.

## 4. Representations of Graphs

### 1. Adjacency Matrix

- A 2D array of size \( V \times V \) (where \( V \) is the number of vertices).
- The element at row \( i \) and column \( j \) is 1 (or the weight of the edge) if there is an edge from vertex \( i \) to vertex \( j \), otherwise it is 0.
- Suitable for dense graphs where the number of edges is close to the maximum number of edges.

**Example:**
For a graph with vertices {A, B, C} and edges {(A, B), (B, C)}:
x A B C
A 0 1 0
B 0 0 1
C 0 0 0

### 2. Adjacency List

- An array of lists. The array size is \( V \).
- The list at index \( i \) contains all vertices that are adjacent to vertex \( i \).
- Suitable for sparse graphs where the number of edges is much less than the maximum number of edges.

**Example:**
For a graph with vertices {A, B, C} and edges {(A, B), (B, C)}:
A -> [B]
B -> [C]
C -> []

## 5. Operations on Graphs

- **Add Vertex:** Add a new vertex to the graph.
- **Add Edge:** Add a new edge between two vertices in the graph.
- **Remove Vertex:** Remove a vertex and all edges associated with it.
- **Remove Edge:** Remove an edge between two vertices.
- **Search (Traversal):** Explore the graph's vertices and edges.
  - **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.
  - **Breadth-First Search (BFS):** Explores all neighbors of a vertex before moving to the next level neighbors.
- **Shortest Path:** Find the shortest path between two vertices (e.g., Dijkstra's algorithm).
- **Minimum Spanning Tree (MST):** Find a subset of edges that connect all vertices with the minimum total edge weight (e.g., Kruskal's and Prim's algorithms).

## 6. Time Complexity of Graph Operations

Operations on graphs can vary in time complexity depending on algorithms and graph characteristics:

- **Traversal**: \( O(|V| + |E|) \)
- **Path Finding**: Depends on the algorithm (e.g., \( O(|V| + |E|) \) for BFS, \( O(|V|^2) \) for certain cases).
- **Cycle Detection**: \( O(|V| + |E|) \)
- **Minimum Spanning Tree (MST)**: \( O((|V| + |E|) \log |V|) \)
- **Shortest Path**: \( O((|V| + |E|) \log |V|) \) to \( O(|V|^2) \), depending on the algorithm.

## 7. Space Complexity of Graph Operations

The space complexity of graph operations also varies based on the data structures used:

- **Adjacency Matrix**: \( O(|V|^2) \)
- **Adjacency List**: \( O(|V| + |E|) \)
- **Additional Structures**: Algorithms may require additional space for auxiliary data structures.

## 8. Advantages of Graphs

- **Versatility:** Can model diverse real-world scenarios.
- **Complex Relationships:** Represent complex dependencies effectively.
- **Efficient Algorithms:** Many efficient algorithms exist for various graph problems.

## 9. Disadvantages of Graphs

- **Complexity:** Some operations can be computationally expensive, especially on large graphs.
- **Storage:** Inefficient for sparse graphs when using adjacency matrices.
- **Traversal:** Requires careful handling to avoid cycles and ensure completeness.

## 10. Applications of Graphs

- **Social Networks:** Nodes for people, edges for relationships.
- **Maps and Navigation Systems:** Nodes for locations, edges for roads.
- **Network Routing Algorithms:** Nodes for routers, edges for connections.
- **Recommendation Systems:** Nodes for items/users, edges for ratings.
- **Circuit Design:** Nodes for components, edges for connections.

## 11. Special Cases

### 1. Isolated Vertex

- A vertex not connected to any other vertex by an edge.

### 2. Spanning Tree

- Subset of graph edges forming a connected acyclic graph.
- Spans all vertices without cycles.

### 3. Graph Indexing

- Methods and data structures for efficient graph storage and access.
- Includes adjacency lists, matrices, and optimized indexing techniques.

## 12. Variations of Graphs

- **Multigraph:** Can have multiple edges (parallel edges) between the same pair of vertices.
- **Hypergraph:** Edges can connect any number of vertices.
- **Planar Graph:** Can be drawn on a plane without edges crossing.
- **Bipartite Graph:** Vertices can be divided into two disjoint sets such that no two graph vertices within the same set are adjacent.

## 13. Time and Space Complexity

- **Storage Complexity:**
  - **Adjacency Matrix:** \(O(V^2)\) space, where \(V\) is the number of vertices.
  - **Adjacency List:** \(O(V + E)\) space, where \(E\) is the number of edges.
- **Traversal Time Complexity:**
  - **DFS and BFS:** \(O(V + E)\).
- **Shortest Path Algorithms:**
  - **Dijkstra's Algorithm:** \(O(V^2)\) with adjacency matrix, \(O((V + E) \log V)\) with adjacency list and min-heap.
  - **Bellman-Ford Algorithm:** \(O(VE)\).
- **Minimum Spanning Tree Algorithms:**
  - **Kruskal's Algorithm:** \(O(E \log E)\).
  - **Prim's Algorithm:** \(O(V^2)\) with adjacency matrix, \(O((V + E) \log V)\) with adjacency list and priority queue.
