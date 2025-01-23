# Why Big O? - Who Cares?

- It's important to have precise vocabulary to talk about our code performs
- Useful for dicusssing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find paint points in our applications 



## What Does Better Mean ? ( better code )

- Faster ?
- Less memory - intensive?
- More Readable?

All of the above but Faster / Less memory - intensive code comes at the cost of readability



##  The Problem with Time ( running a test like performance.now() or console.time())

- Different machines will record different times
- The same machine will record different times!
- For fast algorithms, speed measurements may not be precise enough? 

This is where BigO notation comes in so we can talk about time without having to actually type code/ it is universal terminology



**<u>Big O is counting the number of simple operations the computer has to perform</u>**

- Way to formalize fuzzy counting
- Allows us to talk formally about how the runtime of an algorithm grows as the input grows



## Big O Definition

We say that an algorithm is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a constant times **f(n)**, as **n** increases 

- f(n) could be linear (f(n) = n)
  - example: A loop
- f(n) could be quadratic (f(n) = n^2) / exponential growth 
  - example: A nested loop
- f(n) could be constant (f(n) = 1)
  - example: running a constant number of operations 
- f(n) could be something entirely different 

As an input (n) grows, how much time will elapse

*When we talk about Big O, we're talking about the worst case scenario, we're talking about the upward bound of run time* 



## Simplifying Big O Expressions

### Rule of thumbs

- When determining the *time complexity* of an algorithm, there are some helpful rule of thumbs for big O expressions
- These rules of thumb are consequences of the definition of big O notation
- **Constants don't matter**
  - ~~O(2n)~~  => O(n)
  - ~~O(500)~~ => O(1)
  - ~~O(13n^2)~~ => O(n^2)
- **Smaller Terms don't matter**
  - ~~O(n + 10)~~ => O(n)
  - ~~O(1000n + 50)~~ => O(n)
  - ~~O(n^2 + 5n + 8)~~ => O(n)

### Big O Shorthands

1. Arithmetic operations are constant
   1. your CPU will have the same run time for 2 + 2 and 1,000,000 + 2
2. Variable assignment is constant 
   1. CPU will have the samee run time for x = 1000, and x = 1,000,000
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop 



