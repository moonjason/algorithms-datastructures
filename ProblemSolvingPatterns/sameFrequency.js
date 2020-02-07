// frequency counter problem

// given two positive integers, find out if the two numbers have teh same frequency of digits
// Time : O(N)

// sameFrequency(182, 281) true
// sameFrequency(34, 14) false
// sameFrequency(22, 222) false

const sameFrequency = (num1, num2) => {
    if (num1.length !== num2.length) return false;
    const counter = {};
    for (const number of num1.toString()){
        if (!counter.hasOwnProperty(number)){
            counter[number] = 1;
        } else {
            counter[number]++
        }
    }
    for (const number of num2.toString()){
        if(!counter.hasOwnProperty(number)){
            return false;
        } else {
            counter[number]--;
            if (counter[number] === 0){
                delete counter[number]
            }
        }
    }
    return (Object.keys(counter).length === 0 ? true : false);
}

console.log(sameFrequency(34, 14));