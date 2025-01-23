// mergeSort

// mergeSort Pseudocode

// Break up the array into halves until you have arrays that are empty or have one element using Slice
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged ( and sorted! ) array


const mergeSortedArrays = (arr1, arr2) => {
    const res = [];
    let i = 0;
    let j = 0;
    while(i + j < arr1.length + arr2.length) {
        if(arr1[i] > arr2[j] || arr1.length === i) {
            res.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j] || arr2.length === j) {
            res.push(arr1[i]);
            i++;
        }
    }

    return res;
}


const mergeSort = (arr) => {

    if (arr.length <= 1) {
        return arr;
    } 

    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle)); 
    let right = mergeSort(arr.slice(middle)); 

    return mergeSortedArrays(left, right); 
}
mergeSort([10,24,76,73])
// console.log(mergeSort([10,24,76,73]));

// right's function call waits for left to be fully defined and fully called recursively
// this means that the left side of the initially input array, is fully sorted, that variable went through the callstack
// so before we even go to the right variable we have a left half sorted array [10, 24]
// this process happens with the right side 
// lets say this entire array is the left side of another one! this processes would occur thanks to our two functions and recursion and assigning our variables, return and base case like this 

// essentially left and right go through the process of splitting themselves and coming back sorted EACH OF THE SAME LENGTH
