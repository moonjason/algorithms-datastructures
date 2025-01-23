// Write a function that takes two strings and checks whether the chars in the first string for ma subsequence of the characters in the second string 
// funciton should check whether the chars in the first string appear somewhere in the second string, without their order changing

// examples
// isSubsequence('hello', 'hello world'); // true 
// isSubsequence('sing', 'sting'); // true 
// isSubsequence('abc', 'acb'); // fase, order matters


const isSubsequence = (s1, s2) => {
    // loop through the second string 
    // if s2 letter matches s1 letter, move s1 pointer to the right and s2 pointer to the right 
    let counter1 = 0;
    let counter2 = 0; 
    while (counter2 < s2.length) {
        if(s2[counter2] === s1[counter1]) {
            counter1++;
            counter2++;
        } else {
            counter2++;
        }
    }

    return (counter1 === s1.length ? true: false);
};

console.log(isSubsequence('abc', 'abracadabra'))


// Iterative 
// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//       if (str2[j] === str1[i]) i++;
//       if (i === str1.length) return true;
//       j++;
//     }
//     return false;
//   }

// Recrusive but not O(1) space
// function isSubsequence(str1, str2) {
//     if(str1.length === 0) return true
//     if(str2.length === 0) return false
//     if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//     return isSubsequence(str1, str2.slice(1))
//   }