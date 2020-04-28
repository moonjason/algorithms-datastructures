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

