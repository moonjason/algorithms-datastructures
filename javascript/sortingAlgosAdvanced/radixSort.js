// HELPER FUNCTIONS 

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const getDigit = (nums, place) => {
    return Math.floor(Math.abs(nums) / Math.pow(10, place)) % 10;
}

const mostDigits = (nums) => {
    let largest = 0;
    for (let i = 0; i < nums.length; i++) {
        largest = Math.max(largest, digitCount(nums[i]));
    }
    return largest;
}

// RADIX SORT

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);

    for (let i = 0; i < maxDigitCount; i++) {
        // Creating an array of ten empty arrays , our buckets...
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let k = 0; k < nums.length; k++) {
            // grabbing the ith digit of each num
            digitBuckets[getDigit(nums[k], i)].push(nums[k]);

        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        // spread operator allows us to just copy the values instead of concatenating [[11], [522], [63]] we want [11, 522, 63]
        console.log(nums)
    }


    return nums;
}



console.log(radixSort([12, 23, 2345, 5467, 9852]));