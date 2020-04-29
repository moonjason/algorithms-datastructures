// recursive fib accepts a nubmer and returns the nth number in the fib sequence 

const fib = (num) => {
    if(num === 1) return 1;

    return num + fib(num -1);
}

console.log(fib(10));