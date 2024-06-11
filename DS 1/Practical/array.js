//array
//An array is a data structure in JavaScript that stores an ordered collection of elements.


//object 
let person = {
    name: "akhil",
    age: 20
}

let arr = ['apple', 'mango', 'pineapple', 'watermelone', person]
console.log("init arr", arr[4]);



//adding on the last of array
arr.push(23)
console.log("push arr", arr[5]);



//for remove from the last 
arr.pop()
console.log("pop arr", arr);



//for adding the element in first
arr.unshift("orange")
console.log("unshift arr", arr);



//for adding the element in first
arr.shift()
console.log("shift arr", arr);



//for looping the array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}



//inbuilt loop method
const numbers = [2, 3, 9, 4]
//map 
//creates a new array by applying a function to every element in the original array.
const newNumsMap = numbers.map((item, index, array) => {
    return item + index
})
console.log("numbers map", newNumsMap);



//filter
//creates a new array with all elements that pass the test implemented by the provided function
const newNumsFilter = numbers.filter((item) => {
    return item > 5
})
console.log("numbers filter", newNumsFilter);



//reduce
//method applies a function against an accumulator and each element in an array to reduce it to a single value.
const newNumsReduce = numbers.reduce((prev, item) => {
    return prev + item
}, 0)
console.log("numbers reduse", newNumsReduce);



//some 
//it is similar to filter. It's a helpful function for checking if at least one element in an array meets a certain condition.
//it give true or false
const newNumsSome = numbers.some((item) => {
    return item > 3
})
console.log("numbers some", newNumsSome);



//every
//every element in an array satisfies a condition specified by a callback function.
//it give true or false
const newNumsEvery = numbers.every((item) => {
    return item < 10
})
console.log("numbers every", newNumsEvery);



//find
//to search an array for the first element that meets a specific condition defined by a callback function.
//first iitems or undefind
const newNumsFind = numbers.find((item) => {
    return item > 2
})
console.log("numbers find", newNumsFind);



//spread operator and rest operator
//he spread operator is a syntax that allows you to expand an iterable (like an array, string, or object) into its individual elements at specific locations in your code.
//The rest operator allows us to represent an indefinite number of arguments as an array. 
const nums1 = [1, 2, 3, 4, 5]
const nums2 = [6, 7, 8, 9]
const final =[...nums1,...nums2]//spread operator
console.log("final ",final);
function nums(...number) {
    return number;
}
console.log("nums ",nums(2,3,4,5));



//more array  methods
//concate
//method is used to merge two or more arrays into a single new array
const nums3 = [5, 6, 37, 4, 55]
const nums4 = [46, 47, 58, 97]
const concatArr = nums3.concat(nums4)
console.log("concate array",concatArr);



//slice
//is a non-mutating method that extracts a portion of an array, returning a new array containing the selected elements.
const newSlice = arr.slice(0,2)
console.log("slice array",newSlice);


//splice
//modifies the content of an array by removing elements and/or adding new elements at a specified index. It also returns an array containing the removed elements.
 arr.splice(1,2,"cherry")
console.log("splice array",arr);



//fill
//method fills specified elements in an array with a value. It can modify the entire array or a specific range of elements.
const dummy=[3,4,5,6,7]
dummy.fill(2)
console.log("fill dummy",dummy);



//findIndex
//Finds the index based on a custom condition
//it give index or -1
const index = nums4.findIndex((items)=> items===97)
console.log("find index" ,index);



//flat
//creates a new array with all sub-array elements concatenated into it up to a specified depth.
const num5= [1,[2,3],[4,5,[6]]]
const flatArray = num5.flat(Infinity)
console.log("flat",flatArray);



//reverse
//that directly modifies the original array. It reverses the order of elements in-place, making the last element the first, the second-to-last element the second, and so on.
flatArray.reverse()
console.log("reverse",flatArray);



//sort
//sort the elements of an array in a specific order. 
const unsorted =[4,3,23,6,16]
unsorted.sort((a,b)=>a-b)
console.log("sort",unsorted);



//from
//It's a versatile tool used to create a new array from various iterable objects or array-like objects. 
//convert into array
const str="hello"
const charArray = Array.from(str);
console.log("from array",charArray);





