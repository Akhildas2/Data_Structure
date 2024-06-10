// fibonacci Number
// A Fibonacci number is a number in the Fibonacci sequence,
// which is a series of numbers where each number is the sum of the two preceding ones.
// The sequence starts with 0 and 1, and then each subsequent number is the sum of the two before it. 
// The first few Fibonacci numbers are:0,1,1,2,3,5,8,13,21,34..
// Mathematically, the Fibonacci sequence is defined as follows:
// f(0) = 0,
// f(1) = 1,
// f(n) = f(n - 1) + f(n - 2) for n > 1;
//Here, 𝐹(𝑛)represents the n-th Fibonacci number.



// fibonacci Number program in javascript using for 
const fibonacci = (number) => {
    const arr = [0, 1];
    for (let i = 2; i < number; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log("result", arr);

    return arr
}
fibonacci(10)

//input = 10 ------>>> 0,1,1,2,3,5,8,13,21,34 => 34

// fibonacci Number program in javascript using recursion  
//where a function calls itself in order to solve a problem. Each time the function calls itself, it does so with a smaller or simpler input. 
//The recursive calls continue until they reach a base case, which is a condition that stops the recursion.

const fibonacciNumber = (number) => {
    return number<=1 ? number : fibonacciNumber(number - 1) + fibonacciNumber(number - 2)
}
console.log(fibonacciNumber(10 - 1))


