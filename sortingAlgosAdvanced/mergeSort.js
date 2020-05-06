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