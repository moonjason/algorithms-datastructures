# Tree Traversal* 



**Traverse the tree, and visit every node once...**

- Very easy on a linked list
- Many different approaches which is why there is a section for traversing trees 



### Two Main Approaches

- **Breadth First Search (BFS)**
  - Primary direction going across 
- **Depth First Search (DFS)**
  - Primary direction is going down and up
  - InOrder
  - PreOrder
  - PostOrder

![Difference between Depth First Search and Breadth First Search - DEV](https://res.cloudinary.com/practicaldev/image/fetch/s---f65OlYQ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/e2ru41fjhqs4ombbcedf.png)



### Breadth First Search (BFS)*

- "We want to visit every node on the same level, every sibling on the same level before we look at a child"

- We are working horizontally 

  

**Steps - Iteratively**

- Create a queue (this can be an array) and a variable to store the values of the nodes visited
- Place the root node in the queue 
- Loop as long a there is anything in a queue 
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  - If there is a left property on the node dequeued - add it to the queue
  - If there is a right property on the node dequeued - add it to the queue 
- Return the variable that stores the values 





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
               if(val === currentNode.val) return undefined;
               if(val < currentNode.val) {
                  if (currentNode.left === null) {
                      currentNode.left = newNode;
                      return this;
                  } else {
                      currentNode = currentNode.left;
                  }
               } else if (val > currentNode.val){
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
        return currentNode;
    }
    breadthFirstSearch() {
        const queue = []; // Can make an actual queue instead.. 
        const results = [];
        let currentNode = this.root
        queue.unshift(currentNode);
        
        while(queue.size > 0) {
            let currentNode = queue.pop();
            results.push(currentNode.val);
            if(currentNode.left) queue.unshift(currentNode.left);
            if(currentNode.right) queue.unshift(currentNode.right);
        }

        return results;
    }
}
```



### Depth First Search*

- Working down (Depth) first, than horizontally (Breadth) first **



____



**DFS PreOrder**

Visit the root node first, and then traverse left, then traverse the right

**Steps - Recursively**

- Create a variable to store the values of nodes visited
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - Push the value of the node to the variable that stores the values 
  - If the node has a **left** property, call the helper function with the **left** property on the node
  - If the node has a **right** property, call the helper function with the **right** property on the node 
- Invoke the helper function with the current variable
- Return the array of values



```js
    preOrderDFS(){
        const results = [];
        // you can fit a variable declaration here so input can be the starting point of the traversal
        const traverse = (node) => {
            results.push(node.val);
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return results;
    }
```

____



**DFS PostOrder**

Explore from the bottom up all the left side, then all the right side, then back to the root

**Pseudocode - Recursively**

- Create a variable to store teh values of nodes visisted
- Store the root of the BST in a variable called current
- Write a helper function which accepts a node
  - If the node has a **left** property, call the helper function with the **left** property on the node
  - If the node has a **right** property, call the helper function with the **right** property on the node 
  - Push the value of the node to the variable that stores the values
- Invoke the helper function with the current variable 
- Return the array of values 

**PostOrder code is same as PreOrder's but we push after we traverse all the way to the left and right sides**

```js
    postOrderDFS(){
        const results = [];
        // you can fit a variable declaration here so input can be the starting point of the traversal
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right);
            results.push(node.val);
        }
        traverse(this.root);
        return results;
    }
```

____



## When to use BFS and DFS*

