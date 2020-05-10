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
  - What is the max number if digits in the array utilizing digitCount(num)
    - mostDigits(num)
    - You loop through and return the highest digit count found through the elements

## Pseudocode

- Define a function that accepts a list of numbers 
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop :
  - Create buckets for each digit ( 0 to 9 )
  - Place each number in the corresponding bucket based on its kth digit 
- Replace our existing array with the values in our bucket starting with 0 and going up to 9
- Return list at the end





## Radix Sort Big O

| Time Complexity (BEST ) | Time Complexity    (Average) | Time Complexity    (Worst ) | Space Complexity |
| ----------------------- | ---------------------------- | --------------------------- | ---------------- |
| O(nk)                   | O(nk)                        | O(nk)                       | O(n + k)         |

- n - length of array
- k - number of digits(average)

