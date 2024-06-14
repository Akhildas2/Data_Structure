class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    prepend(value){
        const newNode =new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }
    removeValue(value){
        if(this.isEmpty())return ;
        if(this.head.value == value){
            this.head = this.head.next;
            this.size--;
            return value;
        }else{
            let current = this.head;
            while(current.next){
                let removedNode = current.next;
                current.next= removedNode.next;
                this.size--
                return value
            }
            return null
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }
        let current = this.head;
        let listValues =''
        while(current){
            listValues += `${current.value} `
            current=current.next
        }
        console.log(listValues);
    }
}


const list = new LinkedList()
list.prepend(34)
list.prepend(40)
list.prepend(44)
list.prepend(54)
list.print()
list.removeValue(54)
list.print()

