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
