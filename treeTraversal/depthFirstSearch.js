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
        const queue = [];
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
    postOrderDFS(){
        const results = [];
        // you can fit a variable declaration here so input can be the starting point of the traversal
        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right);
            results.push(node.val);
            //PostOrder code is same as PreOrder's but we push after we traverse all the way to the left and right sides
        }
        traverse(this.root);
        return results;
    }
}