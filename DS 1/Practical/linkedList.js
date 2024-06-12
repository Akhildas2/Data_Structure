class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.prepend(value);
        } else {
            const newNode = new Node(value);
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) return null;

        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            removedNode = current.next;
            current.next = removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) return null;

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let current = this.head;
            while (current.next && current.next.value !== value) {
                current = current.next;
            }
            if (current.next) {
                const removedNode = current.next;
                current.next = removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    search(value) {
        if (this.isEmpty()) return -1;

        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let current = this.head;
            let listValues = '';
            while (current) {
                listValues += `${current.value} `;
                current = current.next;
            }
            console.log(listValues.trim());
        }
    }
}

const list = new LinkedList();
console.log("List is empty:", list.isEmpty());
console.log("List size:", list.getSize());
list.print();
list.prepend(40);
list.print();
list.prepend(60);
list.prepend(80);
list.append(68)
list.insert(10, 0)
list.print();
console.log(list.removeFrom(10));
console.log(list.removeFrom(2));
list.print();
console.log(list.removeValue(40));
list.print();
console.log(list.search(68));
list.reverse()
list.print()
