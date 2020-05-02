// function which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return - 1. 

// algorithm should be more efficient than linearSearch

const binarySearch = (array, val) => {
    let left = 0;
    let right = array.length - 1;
    let middle;
     
    while(left < right) {
        middle = left + right / 2;
        if(array[middle] === val) {
            return middle;
        }   

        if(array[right] !== val || array[left] !== val) {
            if(array[middle] > val) {
                right = middle;
            } else {
                left = middle;
            }
        } else {
            if (array[right] === val) {
                return right;
            } else {
                return left;
            }
        }
    } 

    return -1;
}    

console.log(binarySearch([1,2,3,4,5], 5))