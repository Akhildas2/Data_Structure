// palindrome
// An Integer is a palindrome when it reads the same as forword and backword
// eg: Input:x=121 ------>>> Output:ture
// eg: Input:x=10 ------>>> Output: false




// palindrome program in javascript 
const isPalindrome = (x) => {
    return x < 0 ? false : x === x.toString().split(" ").reverse().join(" ")
}
const result = isPalindrome(121)
console.log("result",result);