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
class Node {
    constructor(val){
    	this.next = null;
		this.val = val;
    }
}

class Queue { 
	constructor() {
    	this.last = null;
        this.first = null;
        this.size = 0; 
    }
    unshift(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
         	this.first = newNode; 
        }
        
        this.size++;
        
        return this; 
    }
    pop() {
        if (!this.last) return undefined;
        if (this.size === 1) {
        	this.last = null;
            this.first = null;
        }
        let current = this.first;
		let newLast = current;
        
        while(current.next) {
          	newLast = current;
            current = current.next;
        }
        
        this.last = newLast;
        this.last.next = null;
        
        this.size--;
        
        return this;
    }
}

const breadthFirst = (tree.root) => {
    const queue = new Queue()
    const results = [];
}
```





## When to use BFS and DFS*

