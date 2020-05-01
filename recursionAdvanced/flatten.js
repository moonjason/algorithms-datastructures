// funciton accepts an array and returns a new array with all values flattened 

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatten = (arr) => {
    let result = [];
    if (!Array.isArray(arr)) {
        return [arr];
    }
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(flatten(arr[i]))
    }

    return result;
}


console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]