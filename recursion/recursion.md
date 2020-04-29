# Recursion

is a different way to write a solution.

The other way is to write a solution in iterations and now we are learning it recursively 

### Objectives

- Visualize the call stack to better debug and understand recrusive functions
- Understand the two essential components of a recursive function 
- Use helper method recursion and pure recursion to solve more difficult problems 

## What is Recursion? 

- A process (a function in our case) that calls itself 

## Why Use Recursion?

- It's used all the time 
  - JSON.parse / JSON.stringify utilize recursion often throughout browsers
  - document.getElementById and DOM traversal (especially when elements are nested )
  - Object traversal 
  - We will see it with more complex data structures when you want to traverse through graphs, trees, etc.
- Sometimes a leaner alternative to iteration



## Call Stack 

- in almost all program langs, there is a built in data structure that manages what happens when functions are invoked 
- Call Stack
  - A data structure called a **stack**
  - Anytime a function is invoked it is placed (**pushed**) on the top of the call stack
  - When javascript sees the **return** keyword or when the function ends, the compiler will remove (**pop**)

- **Why do I care?**
  - You're used to functions being pushed on the call stack and popped off when they are done
  - When we werite recrusive functions, we keep pushing new functions onto the call stack! 



## How Recursive Functions work

- invoke the **same** function with a different input until you reach your base case 

**Two essential parts of a recursive function**

- Base Case
- Different Input
  - input changed when recalling the function 

**Base Case** 

- The condition when the recursion ends
- most important concept to understand 



Example 

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3)
	3 + sumRange(2)
			2 + sumRange(1)
							1

sumRange(3) 
=> 6
```





Example 2 - Factorial 

```js
//  ---- ITERAVELY 
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i
  }
  return total;
}

//  ---- RECURSIVELY

function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}
```



## Common Recursion Pitfalls

- Not having a base case or not using the right one
  - may cause an infinite loop 
- Forgetting to return or returning the wrong thing
  - is your base case reachable? 
- Stack overflow! 



## Helper Method Recursion 

- Two Functions 

- Outer method that holds something like a variable inner function that does the recursive work

- example

  - ```js
    function outer(input) {
      var outerScopedVariable = [];
      
      function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
      }
      helper(input)
      
      return outerScopedVariable;
    }
    ```

An outerscoped variable and inner scoped function is useful because in a normal recursive function data could be reset every time the function is called again 

```js
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) { // if helperInput is empty
            return; 
        }
        
        if(helperInput[0] % 2 !== 0){ // push item to outer scoped variable if odd
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1)) // recall with sliced array
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```



## Pure Recursion

- Function itself is recursive, no external data structure 

example 

```js
function collectOddValues(arr) {
  let newArr = [];
  
  if(arr.length === 0) {
    return newArr;
  }
  
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
[1].concat(collectOddValues([2,3,4,5]))
					[].concat(collectOddValues([3,4,5]))
									[3].concat(collectOddValues([4,5]))
														[].concat(collectOddValues(5))
																		[5].concat(collextOddValues([]))
																								[]
// Above equals to [1].concat[].concat[3].concat[].concat[5].concat[]
// => [1,3,5]
```

### Pure Recursion Tips

- For arrays, use methods like **slice**, the **spread operator**, and **concat** that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like **slice**, **substr**, or **substring** to make copies of strings
- To make copies of objects use **Object.assign**, or the **spread operator**

