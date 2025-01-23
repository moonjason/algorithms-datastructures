// function accepts a number and returns the factorial of that number
// factorial is product of an integer and all the integeres below 
// facotrial (0) is always 1

const factorial = (num) => {
    if (num === 0) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(4));