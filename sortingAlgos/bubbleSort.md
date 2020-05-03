# Bubble Sort

A sorting algorithm where the largest values bubble up to the top (or end of array)!

<u>Before we sort , we must swap</u>

```js
//ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

//ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```



**Pseudocode**

- Start looping from, with a variable called "i", the end of the array towards the beginning
- Start the inner loop with a variable called "j" from the beginning until i - 1;
- if arr[j] is greater than arr[j + 1], swap those two values
- return the sorted array

**Less Optimized**

```js
function bubbleSort(arr) {
    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37, 45, 29, 8]);
```

This is unoptimized because Bubble Sort sets the highest number at the first time through the outer loop;

But we are still trying to compare every single value every time we outer loop again.

**Slightly More Optimized**

```js
function bubbleSort(arr) {
    for(var i = arr.length; i < 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

By changing the outer loop's variable to the length and decrementing decrementing

We only let our inner loop compare the unsorted values instead of going through the entire array multiple times unnecessarily

In other words, as "i" decrements, we're setting the boundary to only compare until "j", our inner loop, hits an already sorted value

This function does one less comparison per outer pass (every time "i" decrements);



**MORE OPTIMIZATION**

Even if the array is sorted early, we will still iterate through the array. We need to implement a check to break our loop.

```js
function bubbleSort(arr) {
    let noSwaps;
    for(var i = arr.length; i > -1; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
```

We declared a variable noSwaps. Set it to true by default and mark it false when a swap occurs. When a new outer pass occurs, we reset the noSwaps back to true and if there are no swaps in our second pass, we break and return our array.



This saves a lot of time



**Time Complexity**



General  - O(n^2)

- Nested loop
- Gotta make comparisons 

Best - O(N)

- Almost nearly sorted 