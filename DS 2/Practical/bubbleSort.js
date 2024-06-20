
//bubble sort
const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) { //n
        for (let j = 0; j < n; j++) {//n
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
};
console.log(bubbleSort([28, 12, 10, 23, 34, 68, 44]));

//Best Time Complexity = O(2n)=>O(n)
//Worst Time Complexity = O(n^2)
//Average Time Complexity = O((n/2)*n)=O(n^2)
//Space Complexity = O(1)


