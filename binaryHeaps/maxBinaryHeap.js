class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        let index = this.values.length - 1;
        let temp, parentIndex;
        while(index > 0) {
            parentIndex = Math.floor((index - 1) / 2);

            if(this.values[index] <= this.values[parentIndex]) break;
            [this.values[index], this.values[parentIndex] ] = [this.values[parentIndex], this.values[index]]
            // Same as 
            // temp = this.values[index];
            // this.values[index] = this.values[parentIndex];
            // this.values[parentIndex] = temp;

            index = parentIndex;
        }

        return this;
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;        
            this.sinkDown();
        }
        return max;
    }
    // 0
    // [33, 39, 41, 18, 27, 12]
    sinkDown() {
        let idx = 0;
        const length = this.values.length; 
        const element = this.values[0];
        while(true) {
            let leftChildIdx = 2 * idx + 1; // grabbing two child indices of the current element 
            let rightChildIdx = 2 * idx + 1;
            let leftChild, rightChild;
            let swapIdx = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swapIdx = leftChildIdx;
                }
            } 

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swapIdx = rightChildIdx;
                }
            }
            if(swapIdx === null) break;

            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;

            idx = swapIdx;
        }

    }
}

const heap = new MaxBinaryHeap();
heap.values.push(41);
heap.values.push(39);
heap.values.push(33);
heap.values.push(18);
heap.values.push(27);
heap.values.push(12);
heap.insert(55);
console.log(heap.values)

// [41, 39, 33, 18, 27, 12, 55];
//  0   1    2  3   4   5   6   

//  Math.floor ( (n - 1) / 2 );
//  Math.floor ( 5 / 2)
// Math.floor ( 2.5)
// 2 
// this.value[2] = 33 
// 33 is the parent of 55
// 55 > 33 


// [41, 39, 33, 18, 27, 12, 55];
// [41, 39, 55 ,18, 27, 12, 33]
// [55, 39, 41, 18, 27, 12, 33];
// [55, 39, 41, 18, 27, 12, 33];



// ALTERNATE WAY 

// insert(element) {
//     this.values.push(element);
//     this.bubbleUp();
// }
// bubbleUp(){
//     let index = this.values.length - 1;
//     const element = this.values[index];
//     while(index > 0) {
//         let parentIdx = Math.floor((index - 1) / 2);
//         let parent = this.values[parentIdx];

//         if(element <= parent) break;

//         this.values[parentidx] = element;
//         this.values[index] = parent;

//         index = parentIdx;
//     }
// }