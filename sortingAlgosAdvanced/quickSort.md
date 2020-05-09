# Quick Sort

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
- Works by selecting one element ( called the "pivot" ) and finding the index where the pivot should end up in the sorted array. 
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot  



## Pivot (or Partition) Helper

- In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter! 
- The helper should do this in place, that is, it should not create a new array 
- When complete, the helper should return the index of the pivot 

## Picking a Pivot

- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
- For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences later)



```js
// Pivot helper example


let arr= [5, 2, 1, 8, 4, 7, 6, 3];

pivot(arr); // 4

// switched first element, 5, with the that array's 4th index

arr;
// an acceptable result => 
[2, 1, 4, 3, 5, 8, 7, 6];
[4, 1, 2, 3, 5, 6, 7, 8];
[2, 3, 4, 1, 5, 8, 6, 7];
[2, 1, 3, 4, 5, 8, 7, 6];
// these aren't all the possible options
// but this is to show that no matter what, it doesn't matter what order is left or right of the swapped element

```



## Pseudocode for Pivot

- It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively);
- Grab the pivot from the start of the  array
- Store the current pivot index in a variable ( this will keep track of where the pivot should end up )
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element (i.e. the pivot) with the pivot index
- Return the pivot index



```js
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
```



## Pseudocode for Quick Sort

- Call the pivot helper on the array
- when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index

- your base case occurs when you have less than 2 elements 

