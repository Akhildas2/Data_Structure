// TrieNode class
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

// Trie class
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Check if any word starts with a prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    // Get all words with a given prefix
    getAllWordsWithPrefix(prefix) {
        let node = this.root;
        let words = [];

        // Traverse to the node representing the prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return words;
            }
            node = node.children[char];
        }

        // Recursively collect all words from this node
        const collectWords = (node, prefix) => {
            if (node.isEndOfWord) {
                words.push(prefix);
            }
            for (let char in node.children) {
                collectWords(node.children[char], prefix + char);
            }
        };

        collectWords(node, prefix);
        return words;
    }
}

let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("banana");

console.log(trie.search("app")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("orange")); // Output: false

console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("ora")); // Output: false

console.log(trie.getAllWordsWithPrefix("app")); // Output: [ 'app', 'apple', 'application' ]
