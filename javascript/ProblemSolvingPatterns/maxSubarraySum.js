// Sliding Window Problem

// Given an array of integers and a number, write a function that finds the maximum sum of a subarray with the lenght of the number passed to the function 

// note that a subarray must consist of conseuctive elements from the original array. 

// [100, 200, 300, 400]

// 2 
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    
    let maxSum = 0;
    let tempSum = 0; 
    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum; 
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]; // resetting temporary sum 
        maxSum = Math.max(maxSum, tempSum); // set the bigger number as max sum 
    }
    return maxSum; 
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))