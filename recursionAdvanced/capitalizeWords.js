// given an array of words, return  a new array containg each word capitalized;


// Not really recursive???? 
// const capitalizeWords = (array) => {
//     let newArray = [];
//     if(array.length === 1) {
//         return [array[0].toUpperCase()];
//     }
    
//     for (let i = 0; i < array.length; i++) {
//         newArray = newArray.concat(capitalizeWords([array[i]]));
//     }

//     return newArray;
// }

const capitalizeWords = (array) => {
    if(array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let newArray = capitalizeWords(array.slice(0, -1)); 
    newArray.push(array.slice(array.length - 1)[0].toUpperCase()); 

    return newArray;

}

// NOTE ----
// For the second one you'll notice that everytime we shrink our original array 
// that we are pushing to the new array, the last word once we lose it through the slice when recursion occurs 
// then the base case return will concatenate with the capitalized elements of the original array's - array[1] ,array [2] , etc. in that order
// its kinda like we went down a hill but went back up the same way 
  
  let words = ['i', 'am', 'learning', 'recursion'];
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']