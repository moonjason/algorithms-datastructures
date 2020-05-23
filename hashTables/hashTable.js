class HashTable {
    constructor(size=53) { // If we don't include a size when instantiating, default to 53
        this.keyMap = new Array(size); // Storing all our data here
    }
    _hash(key){ 
        let total = 0;
        let primeNum = 31;
        for(let i = 0; i < Math.floor(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * primeNum + value) % this.keyMap.length; // modding our primed value by the keyMap's size
        }
        return total;
    }
    _set(key, value) {
        const newPair = [key, value];
        const hashedKey = this._hash(key);

        if(!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = [];
        } 
        
        this.keyMap[hashedKey].push(newPair)
        return this.keyMap
    }
    _get(key) {
        const hashedKey = this._hash(key);

        for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
            if (key === this.keyMap[hashedKey][i][0]) {
                return this.keyMap[hashedKey][i][1];
            }
        }

        return undefined;
    }
}

let ht = new HashTable();
ht._set('hello, wolrd', 'goodbye world');
console.log(ht._get('hello, wolrd'))