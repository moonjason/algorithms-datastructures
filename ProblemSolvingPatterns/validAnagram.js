// Frequency Counter Pattern

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// you may assume the string contains only lowercase alphabets 

//validAnagram('', '')  => true
//validAnagram('aaz', 'zza) => false


const validAnagram = (str1, str2) => { 
    const map = new Map()
    str1.split('').forEach(letter => {
        map.has(letter) ? map.set(letter, map.get(letter) + 1) : map.set(letter, 1)
    })
    str2.split('').forEach(letter => {
        if (map.has(letter)) {
            map.set(letter, map.get(letter) - 1)
            if(map.get(letter) === 0) {
                map.delete(letter)
            }
        } 
    })
    return (map.size === 0 ? true : false)
}

// second solution

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = first[i] // this doesn't require splitting the string...
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        // cant find letter or letter is zero than it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}