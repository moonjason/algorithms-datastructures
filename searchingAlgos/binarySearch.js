// function which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return - 1. 

// algorithm should be more efficient than linearSearch

const binarySearch = (array, val) => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((left + right) / 2);

    while(array[middle] !== val  && left <= right) {
        middle = Math.floor((left + right) / 2);
    
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

console.log(binarySearch([1,2,3,4,5], 3));