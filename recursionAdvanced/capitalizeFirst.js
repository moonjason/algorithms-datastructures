// function given an array of strings, capitalize the first letter of each string in the array

const capitalizeFirst = (array) => {
    if(array.length === 1) {
        return [`${array[0][0].toUpperCase()}${array[0].substr(1)}`];
    }

    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}
  
// using slice and substring for arrays and strings 
// we are concatenating capitalized letter and the rest of the string via substr();
// array.slice(array.length - 1) is grabbing the last index of array
// and then we will recursively call the function with the array but the last one so it would be ['car' , 'taco]
// leaving 'Banana' out

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
  