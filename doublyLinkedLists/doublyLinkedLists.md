# What makes a linked list doubly?

- Almost identical to Singly Linked Lists, except every node has **another** pointer to the **previous** node
- Two directional comparted to one direction singly linked list



**Comparing to Singly Linked Lists..**

- Gaining <u>flexibility</u> usually means using <u>more memory</u>
  - i.e. We have to add a variable for the previous node but we can use the variable for our other instance methods



## Push Method

- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail 
- Set the tail to be the newly created node 

## Pop Method

Much easier to implement in a Doubly Linked List vs Singly Linked List

<u>Don't have to loop here</u>

- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.

## Shift Method

- If length is 0, returned undefined
- Store the current head property in a variable ( we'll call it shifted node )
- If length is 1, set the head and tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- Set the old head's next to null
- Decrement the length
- Return the old head

## Unshift Method

- Create a new node with the value passed to the function
- If length is 0, set the head to be the new node, set the tail to be the new node
- Otherwise
  - Set the prev property on the head of the list to be the new node
  - Set the next property on the new node to be the head property
  - Update the head to be the new node
- Increment the length
- Return the list

## Get Method

We can do a more optimized version than a singly linked list

<u>The optimal solution is to start at either the beginning or the end depending on the given index</u>

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - Loop through the list starting from the tail and loop towards the middle
  - Return the node once it is found

## Set Method

- Create a variable which is the result of the **get** method at the index passed to the function
  - If the **get** method returns a valid node, set the value of that node to be the value passed to the function

## Insert Method

Very similar way to Singly Linked List

We can optimize it by allowing us to loop from the beginning or end ----- GET METHOD WE ALREADY WROTE IT DAWG

- If the index is less than zero or greater than or equal to the length return false
- If the index is 0, **unshift**
- If the index is the same as the length, **push**
- Use the **get** method to access the index - 1
- set the next and prev properties on the correct nodes to link everything together
- Increment the length;

## Remove Method

- If index is less than zero or greater than or equal to the length return undefined
- If the index is 0, **shift**
- If the index is the same as the length - 1, **pop**
- Use the **get** method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Set next and prev to null on the found node
- Decrement length
- Return the removed node



**Setting up our classes...**

```js
class Node {
    constructor(val) {
        this.prev = null; // not in singly linked lists 
        this.next = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
     	const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        
        this.tail.next = newNode;
       	newNode.prev = this.tail;
        this.tail = newNode;
        
        this.length++;
        
        return this;
    }
    pop(){
        if (!this.head) return undefined;
       	const removedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
        	this.tail = removedNode.prev;.
        	this.tail.next = null;
       		removedNode.prev = null; //removedNode's next should already be null   
        }
        
      	this.length--;
        return removedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        const shiftedNode = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {  
    		this.head = this.head.next;
        	shiftedNode.next = null;
        	this.head.prev = null;            
        }
        
        this.length--;
        return shiftedNode;
    }
    unshift(val) {
        const newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        let currentNode, counter;
        if(index < 0 || index >= this.length) return null;
        if(index <= this.length / 2) {
  			currentNode = this.head;
            counter = 0;
			while(counter !== index ) {
                currentNode = currentNode.next;
                counter++;
            }
        } else if (index > this.length / 2) {
            currentNode = this.tail;
            counter = this.length - 1;
            while(counter !== index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }
        
        return currentNode;
    }
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
          	return true;
        }
        
        return false;
    }
    insert(index, val){
        if(index < 0 || index >= this.length) return false;
       	if(index === 0) return !!this.unshift(val);
		if(index === this.length - 1) return !!this.push(val);
        const newNode = new Node(val);
        const findNode = this.get(index);

        newNode.prev = findNode.prev;
        newNode.next = findNode 
        findNode.prev = newNode;
        
        this.length++;
        
   		return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length - 1) return !!this.pop();
        
       	const findNode = this.get(index);
		let beforeNode = findNode.prev;
        let afterNode = findNode.next;
        
       	beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        //	removedNode.prev.next = removedNode.next;
		//  removedNode.next.prev = removedNode.prev;
        
        findNode.prev = null;
        findNode.next = null;
        
        this.length--;
        return findNode;
    }
}
```



## Big O of Doubly Linked Lists 

- Insertion - **O(1)**
- Removal - **O(1)**
- Searching - **O(N)**
  - Technically **O(N / 2)**, but that's still **O(N)**
- Access - **O(N)**



Recap

- Doubly linked lists are almost identical to singly linked lists except there is an additional pointer to previous nodes 
- Better than Singly Linked Lists for finding nodes and can be done in half the time!
- However, they do take up more memory considering the extra pointer 