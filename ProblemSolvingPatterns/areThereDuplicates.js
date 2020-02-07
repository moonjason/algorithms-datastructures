// frequency counter/ multiple pointers

// function with a variable number of arguements, checks whether there are any duplicates among the arguments passed in. You can solve this using the freqauency counter pattern OR the multiple pointers pattern 

// areThereDuplicates(1, 2, 3) false
// areThereDuplicates()

const areThereDuplicates = (...num) => {
    const finder = [...num];
    let left = 0;
    let counter = left + 1; 
    while(left < finder.length) {
        if(finder[left] === finder[counter]){
            return true;
        } else if (counter === finder.length){
            left++;
            counter = left + 1;
        } else {
            counter++;
        }
    }
    return false; 
}

console.log(areThereDuplicates(1, 2, 2));