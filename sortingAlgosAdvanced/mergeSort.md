

# Intro to Intermediate Sorting

### Objectives

- Understand the limitations of the sorting algorithms we've learned so far
- Implement merge sort, quick sort, radix sort



### Why Learn This ? 

- The sorting algorithms we've learned so far don't scale well 
- Try out bubble sort on an array of 10000 elements, it will take quite some time



### Faster Sorts

- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n);
- Tradeoff between efficiency and simplicity
- More efficient algorithms are much less simple, and generally take longer to understand



# Merge Sort

- A combination of two things, merging AND sorting
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array 

**How does it work?**

- Start by splitting the array in half 
  - and then keep splitting the arrays 'till we get single element arrays
- merge the same pairs but this time putting them in order by merging back to one array again



The idea here is that a <u>**single element array is a sorted array**</u> !!! 



## Merging Arrays

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given to arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
- This function should run in **O(n + m)** time and **O(n + m)** space and **should not** modify  the parameters passed to it .

**Pseudocode**

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at... ( i and j haven't hit their respective arrays)
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array



## mergeSort Pseudocode

- Break up the array into halves until you have arrays that are empty or have one element
  - Using Slice
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged ( and sorted! ) array



## Big O of Merge Sort

| Time Complexity(Best) | Time Complexity(Avg) | Time Complexity(Worst) | Space Complexity |
| --------------------- | -------------------- | ---------------------- | ---------------- |
| O(n log n)            | O(n log n)           | O(n log n)             | O(n)             |

Merge sort doesn't have an edge case even if the given array is already sorted or reversed 

It'll keep splitting and re-concatenating etc. 



Why Time Complexity O(n log n)

O(log n) = > Decomposition  

it is log based 2 of n because :  2^n = length of input array

n is the amount of steps it takes to  get your answer



O(n) => comparisons per decomposition 

Our comparison function "mergeSortedArrays()"

only takes longer the bigger the input size (array length) 



Why Space Complexity is O(n)

As we have a larger array, we have to use more space 