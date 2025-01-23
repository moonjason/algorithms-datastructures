 ### objectives

- Describe what a searching algo is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algo
- Implement the KMP string searching algorithm

### How do we search?

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

JavaScript has search methods on arrays 

- indexOf
- includes
- find
- findIndex



# Linear Search

Pseudocode 

- Write a function that accepts an array and value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found ,return -1



```js
const linearSearch = (arr, num) => {
	for( let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
   	return -1;
}
```

#### Time Complexity

O(1) - Best

Find your element immediately 

O(n) - Avg

O(n)  - Worst

Takes longer the longer the array / what element you wanna find



# Binary Search

- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!    

**Divide and Conquer**

- Cut sorted array in half and compare if the item is  greater than the ends of the halved arrays

**Pseudocode**

- Function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array 
- While the left pointer comes before the right pointer :
  - Create a pointer in the middle
  - Check if element is equal to the middle return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

``` js
const binarySearch = () => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end ) / 2);

    while(array[middle] !== val && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}
```

### Time complexity

**Worst and Avg Case :**  **O(log n)**

<u>It takes the longest if we search for something that is not there</u> 

This is technically O (log2 N) *log base 2 of N*

because for every X amount of elements because the steps it takes to get our result is 2^N = X;. For an array of 32 items, it'll take us 5 steps because  2^5 = 32. 

**Best Case : O(1)** 



# Naive String Search 

- Suppose you want  to count the number of times a smaller string appears more than a longer string

- A straightforward approach involves checking pairs of characters individually  

**Pseudocode**

- Loop over the longer string 
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match ,keep going
- If you complete the inner loop and find a match, increment the count of matches,
- return the count



