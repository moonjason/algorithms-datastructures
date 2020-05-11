// function which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return - 1. 

// algorithm should be more efficient than linearSearch

const binarySearch = (array, val) => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(array[middle] !== val  && left <= right) {
        middle = Math.floor((left + right) / 2);
    
        // When array closes and gets to one element;
        if(left === right && array[left] !== val) {
            return -1;
        }   

        if(array[middle] > val) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }

    } 

    return middle;
}    

// =======
// REFINED VERSION 
// =======

// const binarySearch = () => {
//     let start = 0;
//     let end = array.length - 1;
//     let middle = Math.floor((start + end ) / 2);

//     while(array[middle] !== val && start <= end) {
//         if(elem < arr[middle]) end = middle - 1;
//         else start = middle + 1;
//         middle = Math.floor((start + end) / 2);
//     }
//     return arr[middle] === elem ? middle : -1;
// }


// NOTES
// the reason why our while loop case is if array doesn't equal to the value AND start is less than or equal to the end 
// is because when we don't find a middle, we break the loop of the start reaches the end and the value was never found in the middle
console.log(binarySearch([1,2,3,4,5], 3));