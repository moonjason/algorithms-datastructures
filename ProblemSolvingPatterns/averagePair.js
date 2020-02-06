// multiple pointer problem 

// given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there maybe more than one pair that matches the average target 

// averagePair([1,2,3], 2.5) true
// averagePair([1,3,3,5,6,7,10,12,19], 8) true 
// averagePair([], 4) false
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) false

const averagePair = (arr, num) => {
    if(arr.length < 2) return false; 

    let i = 0;
    let counter = i + 1
    while (i < arr.length - 1) {
        if (arr[i] + arr[counter] / 2 === num) { 
            return true;
        } else if (counter === arr.length - 1) {
            i++
            counter = i + 1;
        } else {
            counter++; 
        }
    }

    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))