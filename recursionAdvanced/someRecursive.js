// function accepts array and callback
// function returns true if a single value in the array returns true when passed to the callback. otherwise return false 

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const someRecursive = (arr, cb) => {
    let length = arr.length;
    let val = arr[0];
    let x = cb(val);
    
    if(length === 0) {
        return false;
    }

    arr.shift();

    if (x) {
        return true;
    } else {
        return someRecursive(arr, cb);
    } 
}

console.log(someRecursive([4,6,8], val => val > 10)); // false
