# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted.

**Pseudocode**

- Start by picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted 

```js
function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
    	var currentVal = arr[i];
        for(var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
               arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);
```

Here in our inner loop, we only run it if the the element previous to our current outer loop array index element is bigger 

We decrement the inner loop because we are sorta creating a mini array that is sorted as index "i" of the outerloop acts as the length/end of this mini array

We set arr[j+1] to the current value

**Big O Complexity**

Worst case O(N^2)