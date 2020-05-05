

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