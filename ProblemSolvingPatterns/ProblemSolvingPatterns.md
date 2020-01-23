# Problem Solving Patterns

### Some Patterns ..

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more! 



## Frequency Counters

- this pattern uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or O(N^2) operations with arrays / strings 

```js
 // Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1, 2, 3], [4 ,1 ,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

