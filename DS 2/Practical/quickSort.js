//Quick sort
function quickSort(arr) {
    //base case
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([4, 3, 6, 1, 8, 5, 9, 0, 7]));

//Time Complexity -
//Average Case -O(nlog n)
//Best Case -O(nlog n)
//Worst Case -O(n^2)

//Space Complexity -
//Average Case -O(nlog n)
//Worst Case -O(n)