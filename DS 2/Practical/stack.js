//stack

class Stack{
    constructor(){
        this.stack = [];       
    }
    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.stack.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }
        return this.stack[this.size()-1]
    }
    isEmpty(){
        return this.size() === 0
    }
    size(){
        return this.stack.length
    }
    isPrint(){
        if(this.isEmpty()){
            return "Stack is Empty"
        }

     this.stack.forEach(element=>{
        console.log(element);
     })
    }
}
const stack = new Stack();
stack.push(10);
stack.push(45);
stack.push(34);
stack.push(74);
console.log(stack.pop());
console.log(stack.peek());
stack.isPrint(); 