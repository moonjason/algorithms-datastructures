// digitCount function for radix sort to get the largest number of digits in the array

const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}



// again math.abs is incase the number is negative
// Math.log10  =  log base 10 423  (423 being our input)
// NOTE ABOUT LOGARITHMS:
// If there is no base written in a log, assume its 10

console.log(digitCount(423)); // 3

// Math.log10(423)
// 2.626340~
// Math.floor(2.626340~)
// 2 
// 2 + 1
// 3