// function that accepts a string and returns the length of the longest substring with all distinct characters 

// findLongestSubstring('') => 0
// findLongestSubstring('rithmschool') => 7
// findLongestSubstring('bbbbbb) => 1 


// -----------
// ATTEMPTED VERSION 
// -----------

// const findLongestSubstring = (str) => {
//     let longestSubstring = [];
//     let tempString = []
//     // let tempString = '';
//     let start = 0;
//     let end = 0; 
//     while(start < str.length - 1) {
//         let temp = tempString.indexOf(str[end]);
//         console.log(tempString, end, temp, 'temp')
//         if(temp >= 0){ 
//             tempString = tempString.slice(temp + 1, end) 
//             tempString.push(str[end])        
//             start = temp + 1; 
//         } else {
//             tempString.push(str[end])
//         }
//         if (end === str.length - 1) {
//             if (longestSubstring.length < tempString.length) longestSubstring = tempString;
//             break;
//         }

//         end++;
//     }
//     console.log(longestSubstring)
//     return longestSubstring.length; 
// }


// -----------
// WORKING VSN
// -----------

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      // i - start  => grabbing length with the iterating end  point being i , you add 1 because we are counting index positions and subtracting them to get a length !!! 
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
}


console.log(findLongestSubstring('longestsubstring'))
