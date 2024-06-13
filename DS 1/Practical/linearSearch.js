//linear search

const linearSearch = (num, target) => {
    for (let i = 0; i < num.length; i++) {
        if (target === num[i]) {
            return i
        }
    }
    return -1
}
//Time Complexity - O(n)
//Space Complexity - O(1)
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8], 3))

//global linear search

const globalLinearSearch = (num, target) => {
    let result = [];
    for (let i = 0; i < num.length; i++) {
        if (target === num[i]) {
            result.push(i)
        }
    }
    if (result.length === 0) return -1;
    return result;

}
//Time Complexity - O(n)
//Space Complexity - O(n)
console.log(globalLinearSearch([1, 2, 3, 4, 3, 6, 7, 3], 3))
