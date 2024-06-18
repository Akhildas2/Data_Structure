//selection sort
const selectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {//n
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {//n
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (arr[i] != arr[minIndex]) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}
console.log(selectionSort([23, 22, 34, 2, 14, 56, 44]));

// Time Complexity = O(n^2)
//Space Complexity = O(1)
