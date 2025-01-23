// Multiple pointers (such as  2 point 4 point) approach

/*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

    countUniqueValues([1,1,1,1,1,2]) => 2
    countUniqueValues([-2, -1, -1, 0, 1]) => 4
*/

// time complexity - O(n)
// space complexity - O(n)

const countUniqueValue = (arr) => {
    let count;
    arr.length > 0 ? count = 1 : count = 0
    let j = 0;
    for(let i = 1; i < arr.length; i++) {     
        console.log(arr[j], arr[i])       
        if (arr[j] !== arr[i]) {
            count++;
            j = i;
        } 
    }
    return count;
}

console.log(countUniqueValue([-2, -1, -1, 0, 1]));

// alternate solution

const countUniqueValues = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j] // replaces index with unique number
        }
    }
    return i + 1; // returns how many elements were replaced depending unique value
}