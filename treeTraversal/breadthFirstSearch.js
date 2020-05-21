// Queue node v
class qNode {
    constructor(val){
    	this.next = null;
		this.val = val;
    }
}


// Tree Node v 

class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
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

const queue = new Queue()
queue.unshift(55);
queue.unshift(66);
queue.unshift(666);
queue.pop();



// const breadthFirst = (tree) => {
//     const queue = new Queue()
//     const results = [];
//     queue.unshift(tree.root.val);
    
//     while(queue.size > 0) {
//         let current = queue.last.val;
//         results.push(queue.last);
//         queue.pop();
//         if(tree.search(current).left) {
//             queue.unshift(tree.search(current).left.val)            
//         }
//         if(tree.search(current).right) {
//             queue.unshift(tree.search(current).right.val)            
//         }
//     }

//     return results;
// }


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
        const queue = new Queue()
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

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.breadthFirstSearch());