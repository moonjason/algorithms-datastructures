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
    _keys() {
        const keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keys.includes(this.keyMap[i][j][0])) {   // This check is so we don't store duplicate key value pairs in which we should never have this issue .
                        keys.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }    
    _values() {
        const values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!values.includes(this.keyMap[i][j][1])) {
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
}

let ht = new HashTable();
ht._set('hello, wolrd', 'goodbye world');
ht._set('lebron james', 'goat');
ht._set('cristiano ronaldo', 'goat 2');

console.log(ht._values())

ht._keys().forEach(key => {
    console.log(ht._get(key))
})



// NOTE 
// This example isn't really a real world example but it covers the concept of what a Hash Table is
// in the real world, there will be much more complex methods to securely store and organize key value pairs