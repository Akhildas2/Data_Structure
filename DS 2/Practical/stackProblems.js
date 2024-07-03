// Problem 20: Valid Parentheses
// Description: Given a string containing just the characters (, ), {, }, [ and ], determine if the input string is valid. An input string is valid if:

// 1.Open brackets are closed by the same type of brackets.
// 2.Open brackets are closed in the correct order.

function isValid(s){
    let stack=[];
    let map={
        '(':')',
        '{':'}',
        '[':']'
    }
    for (let i=0;i<s.length;i++){ //O(n)
        if(map[s[i]]){
            stack.push(s[i]);
        }else{
            let last=stack.pop()
            if(s[i] !== map[last]){
                return false
            }
        }
    }
    return stack.length === 0
}

// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{)")); // false
console.log(isValid("(]")); // false
console.log(isValid("()[]")); // true




// Reverse a String using Stack
//Question: Reverse a string using a stack.

class Stack{
    constructor(){
        this.items =[]
    }
    isEmpty(){
        return this.items.length === 0;
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.isEmpty()){
            return 'Underflow'
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "No element in stack"
        }
        return this.items[this.items.length-1]
    }
    print(){
      this.items.forEach(element => {
            console.log(element);
        });
    }
    reverseString(inputString) {
        let reversed = '';
        for (let i = 0; i < inputString.length; i++) {
            this.push(inputString[i]);
        }
        while (!this.isEmpty()) {
            reversed += this.pop();
        }
        return reversed;
    }
}
let stack = new Stack();
console.log(stack.reverseString("hello"));
