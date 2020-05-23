# Hash Tables*



Also known as a Hash Map

Very very commonly used

- In pretty much every language has a variation of a Hash Table or Hash Map with a default type



## What is a Hash Table ?*

- Used to store *key-value* pairs 
  - Sort of like array elements and their indices
  - Keys in Hash Tables <u>don't have to be numbers</u>
- Unlike arrays, hash tables are fast for all of the following operations:
  - Finding values
  - Adding new values
  - Removing values



**Hash Table Examples**

- Python has Dictionaries
- JS has Objects and Maps*
- Java, Go, & Scala have Maps
- Ruby has Hashes

**JavaScript Objects have some restrictions, but are basically hash tables* 

Object keys are only strings.... `sports['basketball']`



**But we want to implement our own Hash Table...**

Introductory Example

- Imagine we want to store some colors
- `const colors = ["#fffff", "#3234", "#14141"]`
- A better way to access these hex codes is to assign a key to them
- E.g. `colors["cyan"]` instead of `colors[2]`

Essentially, we want to rebuild this ^ 



**What Hash Tables offer**

- How can we get <u>human-readability</u> and <u>computer-readability</u>?
- Computers don't know how to find an element at index pink! 



### - The Hashing Part -

- To Implement a hash table, we'll be using an array
- In order to look up values by key, we need a way to <u>convert keys into valid array indices</u>

- A function that performs this task is called a <u>hash function</u>

**Hashing Conceptually**

`[0, 1 , 2 , 3, 4 ,5 ,6 , 7, 8, 9]`

- If we insert ... 
  - `["pink", "#ff69b4"]` at index 0
  - `["cyan", "#00fff"]` at index 3
  - `["orangered", "#ff4500"]` at index 7

we need to coordinate the keys, being a string, with the correct index as well through a hash function 

For example, as of now, computer doesn't know where index of cyan is 



A built in hash function like in Python can be a one way function where we only get the hashed value 



**Real World**

- Hash functions are used to store and add security to data
- Used in Hash Tables, Caching, Cryptography, Cryptocurrency
  - Cryptographic Hash Functions is crazy math and science



**What Makes a Good Hash?**

(Not a cryptographically secure one)

- Fast (i.e. constant time)
- Doesn't cluster outputs at specific indices, but distributes uniformly
  - We want elements somewhat spread out evenly
- Deterministic (same input yields same output)



**Shitty examples** 

```js
//Non-Example Slow
function slowHash(key){
    for(var i =0; i < 10000; i++) {
        console.log('everyday im hashing');
    }
    return key[0].charCodeAt(0);
}

//Non-example Doesn't uniformly distribute values
function sameHashedValue(key) {
    return 0;
}

//Non-example NOT Deterministic
function randomHash(key){
    return Math.floor(Math.random() * 1000)
}
```



## Writing a Hash Function *

Every character has a numeric value associated with it. We can access this with `String.prototype.charCodeAt(index)`

Substracting the charCode of a letter by 96 returns the characters position in the alphabet

```js
// Using String.charCodeAt()

"a".charCodeAt(0) 
// => 97

"a".charCodeAt(0) - 96
// 1

"z".charCodeAt(0) - 96
// 26

"hi".charCodeAt(1)
// grabs char code of "i"
// => 105

const getTotalCharCode = () => {
    let total = 0;
    let string = 'hello';
    for (let i = 0; i < string.length; i++) {
        total += string.charCodeAt(i) - 96
    }
    return total;    
}
```



## What is a good Hashing Algorithm?*



**Simple Hash Example**

Here is a has that works on *strings* only

```js
const hash = (key, arrayLen) => {
    let total = 0;
    for (let char of key) {
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
     }
    return total;
}

// modulo of Array Length apparently gets you a valid index in the target array 


// NOTE
// This function only hashes strings
// Not constant time - linear in key length
// Could be a little more random 
```

We have to optimize this function so we can better distribute our hash values.



**Refining our Hash**

- ```js
  function hash(key, arrayLen) {
      let total = 0;
      let primeNum = 31;
      // If arraynLen is smaller than 100, loop that mount, if arrayLen is larger than 100, just do the first 100 elements
      // This could be useful with larger data 
      for (let i = 0; i < Math.min(key.length, 100); i++) {
          let char = key[i];
          let value = char.charCodeAt(0) - 96;
          total = (total * primeNum + value) % arrayLen;
      }
      return total;
  }
  ```

**Prime Numbers??**

- The prime number in the has is helpful in spreading out the keys more uniformly
  - They reduce the amount of **collisions** made
    - There are studies on different functions working with prime and composite numbers 
- It's also helpful if the array that you're putting values into has a prime length
- You don't need to know why because Math is complicated



## Collisions in Hash Tables*

- When your hash function returns a duplicate value, we can't store the same value into our data set
- Even with a large array and a great hash function, collisions are inevitable

**Handling Collisions**

There are many strategies for dealing with collisions but we'll focus on two: 

- **Separate Chaining**
  - With *separate chaining*, at each index in our array we store values using a more sophisticated data structure ( e.g. an array or a linked list)
  - This allows us to store multiple key-value pairs at the same position 
- **Linear Probing**
  - With *linear probing*, when we find a collision, we search through the array to find the next empty slot



## Handling Collisions Using Separate Chaining or Linear Probing*

