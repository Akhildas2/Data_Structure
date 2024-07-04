// const  bubbleSort = (arr)=>{
//     let  n= arr.length;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort([7,5,8,9,6,4]));


// const insertonSort= (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i];
//         let j=i-1;
//         while(j>=0&&arr[j]>key){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// console.log(insertonSort([7, 5, 8, 9, 6, 4]));

// const selectionSort=(arr)=>{
//     let n= arr.length;
//     for (let i = 0; i < n; i++) {
//        let minIndex=i;
//        for (let j = i+1; j < n; j++) {
//          if(arr[j]<arr[minIndex]){
//             minIndex = j
//          }
//        }
//        if(arr[i] != arr[minIndex]){
//          [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
//        }

//     }
//     return arr
// }
//  console.log(selectionSort([7, 5, 8, 9, 6, 4]));


// function quickSort(arr){
//     if(arr.length<=1)return arr;
//     let pivot = arr[0];
//     let left=[];
//     let right=[];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)] 
// }
//  console.log(quickSort([7, 5, 8, 9, 6, 4]));

// function mergeSort(arr) {
//     if (arr.length <=  1) return arr;
//     let mid = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)

// }

// function merge(left, right) {
//     let sorted = [];
//     while (left.length && right.length) {
//         if (left[0] > right[0]) {
//             sorted.push(left.shift())
//         } else {
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted, ...left, ...right]
// }

// console.log(mergeSort([2, 21, 34, 1, 56, 4, 67, 7]));