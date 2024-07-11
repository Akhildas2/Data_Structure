class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }

    addEdge(vertex1, vertex2) {
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        this.adjacencyList.get(vertex1).add(vertex2);
        this.adjacencyList.get(vertex2).add(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            return;
        }
        // Remove edges connected to vertex
        for (let adjacentVertex of this.adjacencyList.get(vertex)) {
            this.adjacencyList.get(adjacentVertex).delete(vertex);
        }
        this.adjacencyList.delete(vertex);
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).delete(vertex2);
            this.adjacencyList.get(vertex2).delete(vertex1);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList.has(vertex1) && this.adjacencyList.get(vertex1).has(vertex2);
    }

    // Depth-First Search (DFS)
    dfs(start) {
        const visited = new Set();
        const result = [];

        const dfsRecursive = (vertex) => {
            visited.add(vertex);
            result.push(vertex);
            for (let adjacentVertex of this.adjacencyList.get(vertex)) {
                if (!visited.has(adjacentVertex)) {
                    dfsRecursive(adjacentVertex);
                }
            }
        };

        dfsRecursive(start);
        return result;
    }

    // Breadth-First Search (BFS)
    bfs(start) {
        const queue = [start];
        const visited = new Set();
        const result = [];

        visited.add(start);

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            for (let adjacentVertex of this.adjacencyList.get(current)) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex);
                    queue.push(adjacentVertex);
                }
            }
        }

        return result;
    }

    // Check if the graph has a cycle using DFS
    hasCycle() {
        const visited = new Set();
        for (let vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex) && this.detectCycle(vertex, visited, null)) {
                return true;
            }
        }
        return false;
    }

    detectCycle(vertex, visited, parent) {
        visited.add(vertex);
        for (let adjacentVertex of this.adjacencyList.get(vertex)) {
            if (!visited.has(adjacentVertex)) {
                if (this.detectCycle(adjacentVertex, visited, vertex)) {
                    return true;
                }
            } else if (adjacentVertex !== parent) {
                return true;
            }
        }
        return false;
    }

    // Count cycles in the graph using DFS
    countCycles() {
        const visited = new Set();
        let cycleCount = 0;

        const dfsCountCycles = (vertex, parent) => {
            visited.add(vertex);
            for (let adjacentVertex of this.adjacencyList.get(vertex)) {
                if (!visited.has(adjacentVertex)) {
                    dfsCountCycles(adjacentVertex, vertex);
                } else if (adjacentVertex !== parent) {
                    cycleCount++;
                }
            }
        };

        for (let vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                dfsCountCycles(vertex, null);
            }
        }

        return cycleCount / 2; // Each cycle is counted twice
    }

    // Find the shortest path using BFS
    shortestPath(start, end) {
        const queue = [[start]];
        const visited = new Set([start]);

        while (queue.length > 0) {
            const path = queue.shift();
            const lastNode = path[path.length - 1];

            if (lastNode === end) {
                return path;
            }

            for (let adjacentVertex of this.adjacencyList.get(lastNode)) {
                if (!visited.has(adjacentVertex)) {
                    visited.add(adjacentVertex);
                    queue.push([...path, adjacentVertex]);
                }
            }
        }

        return null; // No path found
    }

    // Display the adjacency list of the graph
    display() {
        for (let [vertex, adjacentVertexs] of this.adjacencyList) {
            console.log(`${vertex} -> ${[...adjacentVertexs]}`);
        }
    }
}

// Example usage:
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("Graph:");
graph.display();

console.log("DFS:", graph.dfs("A"));
console.log("BFS:", graph.bfs("A"));
console.log("Has cycle:", graph.hasCycle());
console.log("Cycle count:", graph.countCycles());
console.log("Shortest path from A to F:", graph.shortestPath("A", "F"));

graph.removeVertex("A");
console.log("Graph after removing vertex A:");
graph.display();
