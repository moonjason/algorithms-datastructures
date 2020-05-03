# What is Sorting? 

Sorting is the process of rearranging the items in a collecting (e.g. an array) so that the items are in some kind of order.

Examples

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue



### Why do we need to learn this?

- Sorting is an incredibly common task, so it's good to know how it works
  - Despite languages having built-in sorting functions
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages 
- Classic interview question

https://www.toptal.com/developers/sorting-algorithms

### Objectives

- Implement Bubble Sort
- Implement Selection Sort
- Implement Insertion Sort
- Understand why it is important to learn these simpler sorting algorithms



### JavaScript has a sort method

- But it doesn't always work the way you expect
- Array.sort()
  - By default every item is converted to a string and ordered by its unicode
  - Accepts an optional comparator function 
  - You can use this comparator function to tell JavaScript how you want it to sort
  - The comparator looks at pairs of elements ( a and b ), determines their sort order based on the return value
    - If it returns a **negative** number, a should come **before** b
    - If it returns a **positive** number, a should come **after** b 
    - If it returns 0, a and b are the same as far as the sort is concerned

Defining basic sorts using Array.sort();

```js
function numberCompare(num1, num2) {
    return num1 - num2;
}
[6, 4, 15, 10].sort(numberCompare(num1, num2)) 
// => [4, 6, 10, 15];

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}
```



