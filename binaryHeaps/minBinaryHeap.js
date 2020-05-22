// Minimum Binary Heap
// Smallest Item at the Root, elements get larger as you go down, items should be stored left first

class minBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        this.values.push(element.val);
        this.bubbleUp()
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
}