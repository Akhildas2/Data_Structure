# Hashing

## 1. What is Hashing?

Hashing is a technique used in data structures to efficiently store, retrieve, and manage data. It involves converting input data (keys) into a fixed-size numerical value called a hash code using a hash function. This hash code is used to index into a hash table, where the actual data is stored.

## 2. Key Concepts

1. **Hash Function**

   - A hash function takes an input (or key) and returns a hash code, which is usually a fixed-size integer.
   - The goal of a good hash function is to distribute keys uniformly across the hash table to minimize collisions.

2. **Hash Table**

   - A hash table is a data structure that implements an associative array, mapping keys to values.
   - It uses the hash code generated by the hash function to determine where to store the data in the table.

3. **Hash Mapping**
   - Hash mapping refers to the process of using a hash function to map keys to their corresponding values in a hash table.

## 3. Why Use Hashing?

Hashing provides efficient data retrieval because it allows for nearly constant-time complexity, O(1), for both insertion and lookup operations. This makes it particularly useful in scenarios where quick access to data is crucial.

## 4. Applications of Hashing

1. **Databases:** Hash tables are used to index data, allowing for fast retrieval.
2. **Caches:** Hashing is used in caching mechanisms to quickly find and retrieve cached data.
3. **Dictionaries:** Hash tables are the underlying data structure for dictionary implementations in many programming languages.
4. **Cryptography:** Hash functions are used to securely store passwords and other sensitive information.
5. **Checksum:** Hash functions can be used to verify data integrity.

## 5. Pros and Cons

### Pros

1. **Fast Lookups:** Hashing provides O(1) average time complexity for lookups.
2. **Efficient Insertions and Deletions:** Insertions and deletions are also O(1) on average.
3. **Scalability:** Hash tables can be dynamically resized to accommodate more data.

### Cons

1. **Collisions:** Hashing can lead to collisions, where multiple keys map to the same hash code. This requires additional handling, such as chaining or open addressing.
2. **Memory Overhead:** Hash tables may require more memory than other data structures.
3. **Poor Performance with Bad Hash Functions:** A poor hash function can lead to many collisions, degrading performance to O(n) in the worst case.

## 6. Types of Hashing Techniques

1. **Direct Hashing**

   - Directly maps a key to an array index.
   - Simple but not suitable for large datasets.

2. **Modulo-Division Hashing**

   - Uses the modulo operator to map keys to table indices.
   - Common and simple method, but choosing a good table size (usually a prime number) is important to minimize collisions.

3. **Multiplicative Hashing**

   - Uses multiplication and division operations to compute the hash.
   - Provides a good distribution of keys.

4. **Universal Hashing**

   - Uses a randomizing technique to choose a hash function from a family of hash functions.
   - Minimizes the probability of collisions.

5. **Cryptographic Hashing**

   - Designed to be secure and resistant to attacks.
   - Used in cryptographic applications like digital signatures and password storage (e.g., SHA-256, MD5).

6. **Perfect Hashing**
   - Aims to create a collision-free hash function.
   - Useful when the set of keys is known in advance.

## 7. Collision Resolution Techniques

1. **Chaining**

   - Uses a linked list to store multiple values that hash to the same index.
   - Simple and effective but requires extra memory for pointers.

2. **Open Addressing**

   - Probes for the next available slot within the hash table.
   - Includes methods like linear probing, quadratic probing, and double hashing.

3. **Coalesced Hashing**

   - Combines chaining and open addressing by using a single array for both the hash table and the chains.

4. **Robin Hood Hashing**
   - Ensures that all keys are as close to their optimal position as possible, by stealing slots from keys that are further away.

## 8. Time and Space Complexity of Hashing

### Time Complexity

1. **Average Case:**

   - Insertion: O(1)
   - Search: O(1)
   - Deletion: O(1)

2. **Worst Case (if many collisions occur):**
   - Insertion: O(n)
   - Search: O(n)
   - Deletion: O(n)

### Space Complexity

- **Storage:** O(n), where n is the number of entries in the hash table.
- **Auxiliary Space:** O(1), for the hash function itself.
