*** indicates section**

# Intro to Trees*

- Step up from Linked Lists
- Different types: trees, binary trees, binary search trees 



## What is a tree?

- A data structure that consists of nodes in a **parent/child** relationship



## Difference than Linked Lists?

- Nodes have potential to point to multiple nodes
  - One node can have multiple branches (multiple childs in this case)

- Lists are linear
  - Only one path
  - Doubly Linked Lists can move backwards and forwards but still one path
- Trees are non-linear
  - More than one pathway
  - When traversing a tree, you will avoid branches depending on what the search condition is

- A Singly Linked List can be a **special case of a tree** 
  - Not a great use of a tree though..
- Siblings can't be pointed to, every node is moving **away** (arrow down) from the root node
  - There can only be **one root**



## Tree Terminology

- **Root** - The top node in a tree
- **Child** -  A node directly connected to another node when moving away from the Root
- **Parent** - The converse notion of a child.
- **Siblings** - A group of nodes with the same parent.
- **Leaf** - A node with no children
- **Edge** - The connection between one node and another



# Applications for Trees

Lots of different applications!

- HTML DOM
  - Nested elements such as <ul> and <li>
  - Each of those nodes has a corresponding JavaScript object
- Network Routing
  - Networks need to find the best path to communicate with other networks
- Abstract Syntax Tree
- Artificial Intelligence 
- Folders in Operating Systems 
- Computer File Systems
- JSON (JavaScript Object Notation) - When you parse data into JavaScript, there is code that is creating a tree like structure for you to utilize the data



____



# Kinds of Trees*

![tree](https://www.cdn.geeksforgeeks.org/wp-content/uploads/binary-tree-to-DLL.png)

- Trees
- Binary Trees
  - Special type of Tree
- Binary Search Trees
  - Special type of Binary Tree that excels at searching
  - **At most have two children** per node ( 0 , 1,  2 )
  - Kept in a certain order 
  - Used to store <u>data that can be compared</u>
  - Every node to the **left** of a parent is **always less** than the parent
  - Every node to the **right** of the parent is **always greater** than the parent

*The picture above is not a valid BST*



**Why are BSTs used?**

- Very easy and fast to look things up and to insert things



# Binary Search Tree Class *

 ```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
 ```



## Insert Method for BST

**Pseudocode**

Steps - Iteratively or Recursively

- Create a new node
- Start at the root
  - Check if there is a root, if not - the root now becomes that new node!
  - If there is a root, check if the value of the new node is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the right property
  - If it is less
    - Check to see if here is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, add that node as the left property



```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        let currentNode;
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
           currentNode = this.root;
           while(true) {
               if(value === current.value) return undefined;
               if(value < current.value) {
                  if (current.left === null) {
                      current.left = newNode;
                      return this;
                  } else {
                      current = current.left;
                  }
               } else if (value > current.value){
                   if(current.right === null) {
                       current.right = newNode;
                       return this;
                   } else {
                       current = current.right;
                   }
               }
           }	
        }
    }
}

```



For this line above... 

```js
if(value === current.value) return undefined;
```

We are catching if it is a duplicate value in our tree and we return undefined

Depending on what we want out of our problem/project or whatever, we can change this 



ALSO



We dont need to have an else when checking if we current.left or current.right exists  because we return if it doesn't... 

A stylistic thing 



## Find / Search Method in a BST

Steps - Iteratively or Recursively

- Starting at the root
  - Check if there is a root, if not - we're done searching!
  - If there is a root, check if the value of the new node is the value we are looking for.
    - If we found it, we're done!
  - If not, check to see if the value is greater than or less than the value of the root
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching! 
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps
      - If there is not, we're done searching ! 
  - Return Found Node

*You can change what you return (either the found Node, or true/false) depending on what you need*



```js
class BinarySearchTree{
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        let currentNode;
        if(!this.root) {
            this.root = newNode;
            return this;
        } else {
           currentNode = this.root;
           while(true) {
               if(value === currentNode.value) return undefined;
               if(value < currentNode.value) {
                  if (currentNode.left === null) {
                      currentNode.left = newNode;
                      return this;
                  } else {
                      currentNode = currentNode.left;
                  }
               } else if (value > currentNode.value){
                   if(currentNode.right === null) {
                       currentNode.right = newNode;
                       return this;
                   } else {
                       currentNode = currentNode.right;
                   }
               }
           }	
        }
    }
    search(val){
        if (!this.root) return undefined;
        let currentNode = this.root;
        let found = false;
		while(currentNode && !found) {
            if(val > currentNode.value) {
                currentNode = currentNode.right;
            } else if (val < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
}
```



# Big O of BST*

Insertion - **O(log n)**

- O (log base 2 of n)
- As we 2x the number of nodes, we only take one extra steps

Searching - **O(log n)**



NOT Guaranteed! 

- Only for Avg and Best cases....
- Worst case 
  - A one sided search tree (looks like a singly linked list)



