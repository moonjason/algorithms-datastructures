// Write a funciton called min SubArrayLen which accepts two parameters - an array of positive integers and a positive integer

// function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//minSubArrayLen([2,3,1,2,4,3], 7) //2 because [4,3] is the smallest subarray
//minSubArrayLen([2,1,6,5,4], 9) //2 because [5,4] is the smallest subarray
//


//     ------
//     MY ATTEMPTED SOLUTION 
//     ------

// const minSubArrayLen = (arr, num) => {
//     let result = 0;
//     let temp = 0;
//     let counter = 0;
//     if (arr.length < 1) { return 0 } 
//     for (let i = 0; i < arr.length; i++) {
//         counter++;
//         if(arr[i] >= num) {
//             temp = 0; 
//             counter = 1;
//             return counter;
//         }
//         if(temp + arr[i] >= num) {
//             if (result === 0) {
//                 result = counter;
//             } 
//             if (result > counter) {
//                 result = counter;
//             }
//             counter = 0;
//             temp = 0;
//         } else {
//             temp += arr[i];
//         }
//     }
//     return result; 
// }


//              ----
//              PRO SOLUTION
//              ----

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }
  

// console.log(minSubArrayLen([2,1,6,5,4], 9))
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11))