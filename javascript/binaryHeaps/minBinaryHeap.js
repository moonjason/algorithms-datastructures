// Minimum Binary Heap
// Smallest Item at the Root, elements get larger as you go down,

class PriorityQueue { // also a Minimum Binary Heap, lowest priority is at to root
    constructor() {
        this.values = []
    }
    enqueue(val, rank) { // insert | rank is our priority variable 
        let newNode = new Node(val, rank);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx;
        while(idx > 0) {
            parentIdx = Math.floor((idx - 1) / 2);

            if (this.values[idx].rank  >= this.values[parentIdx].rank) {
                break;
            }

            [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx],this.values[idx]];

            idx = parentIdx;
        }
    }
    dequeue(){ // extractMin
        const min = this.values[0];
        const end = this.values.pop(); //bringing the highest value to the top to reorganize the tree
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let parentIdx = 0;
        while(true) {
            let leftChild = 2 * parentIdx + 1;
            let rightChild = 2 * parentIdx + 2;
            let swap = null;

            if(leftChild < this.values.length){
                if(this.values[leftChild].rank < this.values[parentIdx].rank) {
                    [this.values[leftChild], this.values[parentIdx]] = [this.values[parentIdx], this.values[leftChild]];
                    swap = leftChild;
                }
            }
        
            if(rightChild < this.values.length) {
                if 
                    (
                        (swap === null && this.values[rightChild].rank < this.values[parentIdx].rank) || 
                        (swap !== null && this.values[rightChild].rank < this.values[leftChild].rank)
                    ) {
                    [this.values[parentIdx], this.values[rightChild]] = [this.values[rightChild], this.values[parentIdx]];     
                    swap = rightChild;
                }   
            }

            if(swap === null) break;

            parentIdx = swap;
        }
    }
}


// Priority Queue

class Node {
    constructor(val,rank) {
        this.val = val;
        this.rank = rank; // rank will be our variable for priority
    }
}


let ER = new PriorityQueue();
ER.enqueue('common cold', 4);
ER.enqueue('broken rib', 1);
ER.enqueue('gunshot wound', 0);
console.log(ER);
ER.dequeue();
console.log(ER);


// TO CHANGE THIS TO A MAX BINARY HEAP, THE FIRST ELEMENT IS THE HIGHEST PRIORITY/VALUE
// CHANGE THE < TO > IN THE CONDITIONALS IN THE CLASS

