# Section notes:
Adding elements to the beginning of an array is costly
Compare and contrast the runtime for arrays and objects, as well as built-in methods

# Big O of Objects 

- Insertion - O(1) constant
- Removal - O(1) constant
- Searching - O(N)  linear time 
- Access - O(1) constant 

When you don't need ordering objects are an excellent choice 

## When to use objects

- When you  don't need order
- When you need fast access/insertion and removal



``` js
let instructors = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
```

## Big O Object Methods

```js
Keys O(N) // these are O(N) because bigger object, longer it'll take to search
Object.keys(instructor)
=> ["firstName", "isInstructor", "favoriteNumbers"]
// ^ just the keys of the obj

Values O(N)
Object.values(instructor) 
=> ["Kelly", true, [1,2,3,4]]
// ^ just the values 

Entries O(N)
Object.entries(instructor)
=> [["firstName", "Kelly"], ["isInstructor", true], ["favoriteNumbers", [1,2,3,4]]]
// ^ An array of arrays that hold key and value

HasOwnProperty O(1) // just looking at one key/property
Object.hasOwnProperty("firstName") 
=> true
// just checks if a key exists 

```



