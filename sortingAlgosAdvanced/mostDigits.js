// most digits function for radix sort, to return the largest number in the array

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


const mostDigits = (nums) => {
    let maxDigits = 0;
    for ( let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

console.log(mostDigits([5, 22222, 1111, 99, 555555555])) 
// => 9
// because 555555555 has the most digits of 9 



