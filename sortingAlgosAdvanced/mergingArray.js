// Function that simply merges two sorted arrays 

const mergeSortedArrays = (arr1, arr2) => {
    const res = [];
    let i = 0;
    let j = 0;
    while(i + j < arr1.length + arr2.length) {

        if(arr1[i] > arr2[j] || i === arr1.length) {
            res.push(arr2[j]);
            j++;
        } else if (arr1[i] < arr2[j] || j === arr2.length)  {
            res.push(arr1[i]);
            i++
        }

    }

    return res;
}


// ----
// A little more readable way
// ----

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
    }

    while(j < arr2.length) {
        resultspush(arr2[j]);
    }

    return results;
}

console.log(mergeSortedArrays([1, 10, 50], [2 ,14, 99, 100]));