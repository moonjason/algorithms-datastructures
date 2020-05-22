# Priority Queues

A data structure where each element has a "priority".

Elements with <u>higher</u> priorities are served **before** elements with <u>lower</u> priorities. 



Separate than heaps, there is different ways to implement this 

Think of priority queues as an **abstract concept**

- Kind of like an array and a queue 



**Where it's used..**

On every machine's operating system, there are thousands of different things that are running (not at the same time) and you can view this on the command line and each process has a higher priority value a.k.a. "nice" value



**A Naïve Version:**

- Using a list to store all elements

- ```
  [priority:3, priority:2, priority: 5, priority:1, priority 4]
  ```

- Iterate over the entire thing to find the highest priority element 

- Often times, a <u>lower number is considered higher priority</u> 

*This is not a good approach to Priority Queues because we would have to continuously iterate the entire array to find the highest priority*



## A priority queue using heaps 

The root = Highest Priority

All we care about is the top level element, the **minimum or maximum** thing

- And any element close to the root has higher priority than the ones below it
- Every time we **add** something, we start at the end and bring it up to its correct position
- Every time we **remove** something, we remove the **min or max** (whatever is the root) and then readjust the tree/heap

*The insert and extractMax/Min methods are O(Log N) compared to the naive version being O(n)*





**Priority Queue Pseudocode**  - (Using a Minimum Binary Heap)

```js
class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}
```



- Write a Min Binary Heap (or Max) - lower number means higher priority
- Each Node has a val and a priority. Use the priority to build the heap.
- **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority
- **Dequeue** method removes root element, returns it, and rearranges heap using priority 

