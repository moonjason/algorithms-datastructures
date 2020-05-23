// Minimum Binary Heap
// Smallest Item at the Root, elements get larger as you go down,

class minBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element.val);
        this.bubbleUp();
        return this;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx;
        while(idx > 0) {
            parentIdx = Math.floor((idx - 1) / 2);

            if(this.values[idx] < this.values[parentIdx]) {
                [this.values[idx], this.values[parentIdx]] = [this.values[parentIdx],this.values[idx]];
            } else if (this.values[idx] >= this.values[parentIdx]) {
                break;
            }

            idx = parentIdx;
        }
    }
    extractMin(){
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
                if(this.values[leftChild] < this.values[parentIdx]) {
                    [this.values[leftChild], this.values[parentIdx]] = [this.values[parentIdx], this.values[leftChild]];
                    swap = leftChild;
                }
            }
        
            if(rightChild < this.values.length) {
                if 
                    (
                        (swap === null && this.values[rightChild] < this.values[parentIdx]) || 
                        (swap !== null && this.values[rightChild] < this.values[leftChild])
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