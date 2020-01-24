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

## Multiple Pointers (such as 2 point, 4 point approaches)

- Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
- **Very** efficient for solving problems with minimal space complexity as well

```js
[-4, -3, -2, -1, 0, 1, 2, 5]
"alksjdalksjdlkasjdlks"
```

```js
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist. 
// assume input IS SORTED

//good method 
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left]+ arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
         	left++;   
        }
    }
}
```

