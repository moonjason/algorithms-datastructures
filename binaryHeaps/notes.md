# Binary Heaps*



**What are Heaps?**

- They are a <u>category of trees</u> with their own types of rules
  - There are many types of Heaps 



**What is a <u>Binary</u> Heap?**

- **Very** similar to a binary search tree, but with some different rules!



**Comparing and Contrasting Min and Max Heaps**

- In a **MaxBinaryHeap**, parent nodes are always larger than child nodes. 

- In a **MinBinaryHeap**, parent nodes are always smaller than child nodes

  

*Unlike Binary Search Trees, there is no "left" and "right" order in Binary Heaps*

*Same structure with maximum of two children*





## Max Binary Heap

- Each parent has at most two child nodes
- The value of each parent node is **always greater** than its child nodes
- In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes 
- A binary heap is as compact as possible. All the children of each node are as full as they can be and **left** children are **filled out first** 

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/1200px-Max-Heap.svg.png)

*No relationship between siblings*

*The roots children don't necessarily mean they are the biggest and second biggest numbers unlike BSTs*



**Min Binary Heaps** are the same except the parents are smaller than its children





## Storing Heaps*

Easy way of storing a Binary Heap using a list/array



![storing heaps](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Heap-as-array.svg/600px-Heap-as-array.svg.png)





![storingheap2](https://ajaychhimpa1.gitbooks.io/mygeekworld/MinHeap.gif)



*Storing Left Child first and then Right*



**Relationship between Heap and Array***

- For any Index of an array **n**...
- The left child is stored at **2n + 1**
- The Right child is at **2n +2**



**We can also work this backwards, if we want to find a parent of a child node...**

- For any child node at index **n.**.

  - It's parent is at index **(n -1)/2**  floored 

  





## Methods on Heaps*

**Defining Our Class**

```js
class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
}
```





**Insert**





## Where are Heaps Used?*

Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures 

- A queue that stores values with an importance level 

They are also used quite a bit, with **graph traversal** algorithms