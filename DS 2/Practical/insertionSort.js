//insertion sort
const insertionsort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {//n
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {//n
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}
console.log(insertionsort([34, 3, 23, 22, 12, 32, 45, 9]));

//Best Time Complexity = O(n)
//Worst Time Complexity = O(n^2)
//Average Time Complexity = O(n^2)
//Space Complexity = O(1)
