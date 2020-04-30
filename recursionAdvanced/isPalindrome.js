// function takes a string and returns true if the string reads the same backwards 

// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isPalindrome = (str) => {
    let forward = str; 
    let reverse = [];
    const reverser = (str2) => {
        if(str2.length === 0){
            return;
        }
        reverse.push(str2[str2.length - 1]);
        return reverser(str2.slice(0, str2.length - 1));
    }
    reverser(str);
    
    if (forward === reverse.join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('tacocat'));