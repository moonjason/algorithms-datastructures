// Quick sort

const pivot = (arr, left , right) => {
    let pivot = 0
    let swapIndex = left;
    let temp;

    for (let i = 1; i < right + 1; i++){
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


const quickSort = (arr, left = 0, right = arr.length - 1) => {

    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex + 1,right);
    }

    return arr;
}

console.log(quickSort([2, 6, 12, 1, 0]));