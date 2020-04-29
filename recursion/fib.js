// recursive fib accepts a nubmer and returns the nth number in the fib sequence 

const fib = (num) => {
    if(num <= 2) return 1;

    return fib(num-2) + fib(num -1);
}

console.log(fib(10));