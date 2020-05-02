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

