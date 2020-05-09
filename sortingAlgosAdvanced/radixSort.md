# Radix Sort



**Comparison Sorts**

- Avg Time Complexity
  - Bubble Sort - O(n^2)
  - Insertion Sort - O(n^2)
  - Selection Sort - O(n^2)
  - Quick Sort - O(n log (n))
  - Merge Sort - O(n log (n))



We can go **faster** than this but **not by comparing.** 

There are **integer sorting algorithms** that work with only numbers

**Radix** is not a comparison sort, it is a special sorting algorithms that works on lists of numbers 

- It never makes comparisons between elements!
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number ! 



## Helper Functions

- We need to write a function to grab different digit places of each element in the array

- In order to implement radix sort, its' helpful to build  a few helper functions first:

  - getDigit(num ,place) - return the digit in num at the given place val

  ```js
  const getDigit = (num, place) => {
      return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  
  ```

  - Need to figure out how many times we need to sort through the array
    - Which number has the largest number of digits?	
    - digitCount(num) - returns the number of digits in num



