// getDigit function for radix sort to get the digit the nth place of a number



const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}


// Math.abs() converts negative number to a positive number because we just want to get the digits place 


console.log(getDigit(123456, 2)); // => 4

// Math.floor(123456 / 10 * 10 )
// Math.floor(1234.56) 
// 1234 % 10 
// 1234 / 10 = 123.4
// return 4 
