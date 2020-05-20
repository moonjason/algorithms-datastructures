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
        let newLastNode = current;

        while (current.next) {
            newLastNode = current;
            current = current.next;
        }

        this.last =  newLastNode;
        this.last.next = null; 

        this.size--;
        
        return this;
    }
}

const queue = new Queue()
queue.unshift(55);
queue.unshift(66);
queue.unshift(666);
queue.pop();



// const breadthFirst = (tree.root) => {
//     const queue = new Queue()
//     const results = [];
// }