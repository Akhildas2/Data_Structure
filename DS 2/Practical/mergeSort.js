//merge sort
function mergeSort(arr) {//O(log n)
    //Base Case
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right) { //O (n)
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right]
}
console.log(mergeSort([2, 7, 4, 8, 5, 3, 1, 9, 6, 0]));

//Time Complexity - O(nlog n)
//Space Complexity - O(n)
