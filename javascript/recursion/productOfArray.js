// function that takes in an array of numbers and returns the product of them all

const productOfArray = (arr) => {
    let num = 1; 
    if(arr.length === 0) {
        return num; 
    }
    num = num * arr[0]

    return num * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]))