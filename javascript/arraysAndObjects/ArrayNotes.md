# Arrays

Ordered Lists!

```js
let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];
```

## When to use Arrays

- When you need order 
  - Also can use singley-  doubley linked lists 
- When you need fast access / insertion and removal (sort of...)

## Big O of Arrays

- Insertion & Removal - it depends ..
  - Array.push and Array.pop is constant - O(1)
  - Array.shift which is O(N)
    - Inserting at the beginning SUCKS because we have to re-index every element when
    - same with Array.unshift

- Searching - O(N)

- Access - O(1)
  - Accessing through indices 
  - Javascript doesn't count through every element if you need to access Array[9999] , it has direct access 



## Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(N)
- unshift - O(N)
- concat - O(N)
- slice - O(N)
- splice - O(N)
- sort - O(N * log N)
- forEach/map/filter/reduce/etc. - O(N)