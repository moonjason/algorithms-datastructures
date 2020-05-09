// pivot / partitioner function for quickSort algo

// [2, 6, 12, 1, 0]

const pivot = (arr) => {
    let pivot = 0
    let swapIndex = 0;
    let temp;

    for (let i = 1; i < arr.length; i++){
        if (arr[pivot] > arr[i]) {
            swapIndex++;
            temp = arr[swapIndex];
            arr[swapIndex] = arr[i]; 
            arr[i] = temp;
        } 
    }

    temp = arr[swapIndex];
    arr[swapIndex] = arr[pivot];
    arr[pivot] = temp;

    return arr;
}


// ES6 swapping function
// const swap = (arr, idx1, idx2) => {
//  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

console.log(pivot([2, 6, 12, 1, 0]));