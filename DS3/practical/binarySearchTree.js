class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    findClosestValue(target) {
        let current = this.root;
        let closest = current.value;

        while (current !== null) {
            if (Math.abs(target - closest) > Math.abs(target - current.value)) {
                closest = current.value;
            }

            if (target < current.value) {
                current = current.left;
            } else if (target > current.value) {
                current = current.right;
            } else {
                break;
            }
        }

        return closest;
    }

    validateBST() {
        return this._validateBSTHelper(this.root, -Infinity, Infinity);
    }

    _validateBSTHelper(node, min, max) {
        if (node === null) return true;
        if (node.value <= min || node.value >= max) return false;
        return this._validateBSTHelper(node.left, min, node.value) &&
               this._validateBSTHelper(node.right, node.value, max);
    }
}

const bst = new BinarySearchTree();
bst.insert(34);
bst.insert(44);
bst.insert(24);
bst.insert(64);
bst.insert(4);

console.log(bst.search(bst.root, 34)); // true
console.log(bst.search(bst.root, 4));  // true
bst.levelOrder();  // 34, 24, 44, 4, 64
bst.delete(4);
bst.levelOrder();  // 34, 24, 44, 64

console.log("Closest to 23:", bst.findClosestValue(23)); // 24
console.log("Is Valid BST:", bst.validateBST()); // true
