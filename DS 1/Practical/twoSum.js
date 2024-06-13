//two sum
//Give an array of integers nums and  an interger target
//return indices of the two numss such that they add up to target


//brute force solution
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                console.log("result", [i, j]);
                return [i, j]
            }

        }

    }
}
twoSum([1, 2, 3, 14, 6], 9)

//obj solution
const twoSumObj = (nums, target) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[target - nums[i]] >= 0) {
            console.log("result obj", [target - nums[i], i]);
            return obj[target - nums[i], i]
        } else {
            obj[nums[i]] = i
        }
    }
}
twoSumObj([1, 2, 3, 4, 5], 8)