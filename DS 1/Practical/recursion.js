// Recursion
// Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem
//* multiply using recursion
function multiply(nums) {
    if (nums.length <= 0) {
        return 1
    } else {
        return nums[nums.length - 1] * multiply(nums.slice(0, nums.length - 1))

    }
}
console.log(multiply([1, 2, 3, 4, 5]));

//factorial using the recursion
function factorial(nums) {
    if (nums <= 0) {
        return 1
    } else {
        return nums * factorial(nums - 1)
    }
}
console.log(factorial(5));

//range of number
function rangeOfNumber(start, end) {
    if (end < start) {
        return []
    } else {
        const numbers = rangeOfNumber(start, end - 1)
        numbers.push(end)
        return numbers
    }
}

console.log(rangeOfNumber(0, 5))



