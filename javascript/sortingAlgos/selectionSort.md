# Selection Sort

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position..

**Pseudocode**

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted. 



```js
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++) {
      	var lowest = i;
        for(var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}

selectionSort([34,22,10,19,17]);

ES6 Swap function
const swap = (arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

In our first outer pass, we are looping find the smallest item and then swapping the outer loops array[i] with the lowest found element in the second loop 



