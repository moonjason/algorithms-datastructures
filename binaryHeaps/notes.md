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
    insert(element){
        this.values.push(element);
        let index = this.values.length - 1;
        let temp, parentIndex;
        while(index > 0) {
            parentIndex = Math.floor((index - 1) / 2);

            if(this.values[index] <= this.values[parentIndex]) break;
            [this.values[index], this.values[parentIndex] ] = [this.values[parentIndex], this.values[index]]
            // Same as 
            // temp = this.values[index];
            // this.values[index] = this.values[parentIndex];
            // this.values[parentIndex] = temp;

            index = parentIndex;
        }

        return this;
    }
    extractMax(){
        const removedVal = this.values.pop();
        [this.values[0], this.values[this.values.length - 1]] = [this.values[this.values.length-1], this.values[0]]
    }
}
```



### Bubbling Up 

In a Max Binary Heap ... (or Min Binary Heap, change up the condition)

- If you're inserting a value that is larger than its parent , you have to rearrange it so that the inserted value is the parent of the values that are smaller than it 
- You insert the value in the array
- Find its parent and compare 
  - Swap if you need 
- Repeat until you find a parent that is bigger than the value 



### Insert Pseudocode

- Push the value into the values property on the heap
- Bubble the value up to its correct spot! 
  - Create a variable called index which is the length of the values property - 1
  - Create a variable called parentIndex which is the floor of (index - 1)/2
  - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    - Swap the value of the values element at the parentIndex with the value of the element property at the child index
    - Set the index to be the parentIndex, and start over! 



### Removing From a Heap - extractMax()

- Remove the root
- Replace with the most recently added
- Adjust (**sink down)**;
  - Procedure for deleting the root from the heap ( effectively extracting the maximum element in a max-heap or the minimum element in a min-heap ) and restoring the properties is called down-heap( aka bubble-down, percolate-down, sift-down, **sink-down**, and more downs ) 

Works similarly to insert

**Pseudocode extractMax**

- Swap the first value in the values property with the last one 
- Pop from the values property, so you can return the value at the end.
- Have the new root "sink down" to the correct spot...
  - Your parent index starts at 0 (the root)
  - Find the index of the left child: 2 * index  + 1(make sure its not out of bounds)
  - Find the index of the right child: 2 * index  + 2 (make sure its not out of bounds)
  - If the left or right child is greater than the element... swap. If both left and right children are larger, swap with largest child
  - The child index you swapped to now becomes the new parent index
  - Keep looping and swapping until neither child is larger than the element.
  - Return the old  root ! 



## Where are Heaps Used?*

Binary Heaps are used to implement Priority Queues, which are **very** commonly used data structures 

- A queue that stores values with an importance level 

They are also used quite a bit, with **graph traversal** algorithms