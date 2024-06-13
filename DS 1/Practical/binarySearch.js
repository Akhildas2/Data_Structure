//binary Search
const binarySearch = (nums, target) => {
    let start = 0;

    let end = nums.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1
        }
    }
    return -1
}
console.log(binarySearch([11, 22, 33, 44, 55, 66], 5));