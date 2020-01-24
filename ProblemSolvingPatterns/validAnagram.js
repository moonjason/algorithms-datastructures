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

