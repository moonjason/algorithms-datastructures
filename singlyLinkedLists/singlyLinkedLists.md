# Singly Linked Lists 

**What is a Linked List?**

- A data structure that contains a **head**, **tail**, and **length** property
- Linked Lists consist of nodes, and each **node** has a **value** and a **pointer** to another node or null 



**Linked Lists vs Arrays**

You can think of an array as a skyscraper with an <u>elevator</u>

And a linked list as a skyscraper with adjustable <u>stairs</u>

**Lists**

- Do not have indexes!
- Connected via nodes with a **next** pointer
- Random access is not allowed

**Arrays**

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index



## Linked List Instance Methods

## Push Method

**Pseudocode**

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node 



## Popping Method

```js
//  One way to traverse through a Linked List 
	    traverse(){
      		let current = this.head;
       	 	while (current) {
         			console.log(current.val);
           			current = current.next;
        	}
   	    }
```



Removing a **node** from the end of the Linked List! 

**Pseudocode**

- If there are no nodes in the list, return undefined
- Loop through the entire list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- Return the value of the node removed



## Shifting Method

- Removing a new **node** from the beginning of the Linked List

**Pseudocode**

- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed 



## Unshifting Method

- Adding a new **node** to the beginning of the Linked List!

**Pseudocode**

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the Linked List 



## Get Method

- Retrieving a **node** by its position in the linked ist

**Pseudocode**

- This function should accept an index
- If the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at that specific index 



## Set Method

- Changing the value of a node based on it's position in the Linked List

**Pseudocode**

- This function should accept a value and an index
- Use your **get** function to find the specific node
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true



## Insert Method

- Adding a **node** to the Linked List at a **specific** position 

**Pseudocode**

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next 



## Remove Method

- Removing a node from the Linked List at a **specific** position

**Pseudocode**

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length - 1, pop
- If the index is 0, shift
- Otherwise, using the **get** method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed 



## Reverse Method 

- Reversing the Linked List **in place!**

**Pseudocode**

- Swap the head and tail
- Create a variable called next, prev, and node and initialize it to the head property
- Loop through list
- Set next to be the next property on whatever node is
- Set the next property on the node to be whatever prev is
- Set prev to be the value of the node variable
- Set the node variable to be the value of the next variable



```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        length++;
        
        return this;
    }
    pop() {
        // if LinkedList is empty
        if(!this.head) return undefined;
        
        let current = this.head;
        let newTail = current;
        
        while(current.next) {
            newTail = current;
            current = current.next
        }
        
        this.tail = newTail;
       	this.tail.next = null;
        length--;
        
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        
        return current;
   	}
	shift(){
        if(!this.head) return undefined;
        
    	let removed = this.head;
        this.head = removed.next;
        
     	length--;
        if(length ==== 0) {
            this.tail = null;
        }
        
        return removed;
    }
    unshift(val){
        const newNode = new Node(val);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        
		newNode.next = this.head;
        this.head = newNode;
        this.length++;
        
        return this;
    }
   	get(index){
        if (index < 0 || index >= this.length) return null;
        
        let counter = 0;
        let current = this.head;
        
        while (counter !== index) {
            current = this.head.next; // or current.next
            counter++;
        }

        return current;
    }
    set(index, val){
		let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        
        return false;
    }
    insert(index, val){
        if (index < 0 || index > this.length) return false;
		if (index === this.length) {
            this.push(val);
            return true;
        }
   		if (index === 0) {
            this.unshift(val);
            return true;
        }
        
		// to make a couple cases above become one liners...
        // if(index === this.length) return !!this.push(val);
        // if(index === 0) return !!this.unshift(val);
        // ! converts return to a boolean 
        
        let prevNode = this.get(index - 1);
        let temp = foundNode.next 
        let newNode = new Node(val);
        
        prevNode.next = newNode;
   		newNode.next = nextNode;
       	this.length++; 
        
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) {
            this.pop();
        }
        if (index === 0) return this.shift();
        
        let prevNode = this.get(index - 1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
       	this.length--;
        
        return removed;
    }
    reverse(){
        //swapping head and tail
    	let node = this.head;
        this.head = this.tail;
        this.tail = node;
       
        let next;
        let prev = null; // start off null because we are starting from the end
        
        for(let i = 0; i < this.length; i++) {
            next = node.next;	
          	node.next = prev; // set new node's next to previous node
            prev = node;	// set current node as the next node's next node....
            node = next; // current node is now the new node
        }
        
        return this;
    }
}
```



## Big O for Singly Linked Lists

| Insertion | Removal                     | Searching | Access |
| --------- | --------------------------- | --------- | ------ |
| O(1)      | It depends ... O(1) or O(N) | O(N)      | O(N)   |



**Conclusion**

Singly Linked Lists excel at **Insertion** and **Deletion** compared to Arrays

<u>Singly Linked Lists are good for data that you just need to access in order instead of random access</u>



