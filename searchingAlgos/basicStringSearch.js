const naiveStringSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) {
                break;
            } 
            if(j === short.length - 1) {
                count++;
            }
        }
    }
    return count;
}

// in our nested loop as "j "increments, we are matching the outer loop's string by adding the "j" increment to the stationary "i"