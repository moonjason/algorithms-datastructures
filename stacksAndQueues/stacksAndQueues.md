# Stacks and Queues

**Objectives**

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure 



## What is a Stack?

A **LIFO** data structure!

- Last in, first out
- The last element added to the stack will be the first one element from the stack

Uses Pop and Push  or Shift and Unshift 

## How is it used?

Think about a stack of plates, or a stack of markers, or stack of ... anything

As you pile it up the last thing ( or the topmost thing ) is what gets removed first

**We've seen the call stack in the debugger tool's "Call Stack"**



## What is a Queue?

**FIFO**

- First In First Out
- Utilizing Unshift and Pop or Shift and Push



Kinda like a line at a restaurant or queue for matchmaking.



```js
class qNode {
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
        const newNode = new qNode(val);
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
        let removedNode = this.last;
        if (!this.last) return undefined;
        if (this.size === 1) {
        	this.last = null;
            this.first = null;
        } else {
            let current = this.first;
            let newLastNode = current;
    
            while (current.next) {
                newLastNode = current;
                current = current.next;
            }
    
            this.last =  newLastNode;
            this.last.next = null; 
        }

        this.size--;
        
        return removedNode.val;
    }
}
```



