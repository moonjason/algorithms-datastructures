// simplify these big O expressions as much as possible

// 1) O(n + 10)
// => O(n)

// 2) O(100 * n)
// => O(n)

// 3) O(25)
// => 0(1)

// 4) O(n^2 + n^3)
// =>  O(n^3)

// 5) O(n + n + n + n)
// => O(n)

// Determine the time complexity for the following functions

// 1) 
// function logUpTo(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

// => O(n)

// 2)
// function logAtMost10(n) {
//     for (var i = 1; i <= Math.min(n, 10); i++) {
//         console.log(i);
//     }
// }
 
// => O(1)

// 3)
// function logAtLeast10(n) {
//     for (var i = 1; i <= Math.max(n, 10); i++) {
//         console.log(i);
//     }
// }

// => O(n)

// 4)
// function onlyElementsAtEvenIndex(array) {
//     var newArray = Array(Math.ceil(array.length / 2));
//     for (var i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             newArray[i / 2] = array[i];
//         }
//     }
//     return newArray;
// }

// => O(n)

// 5)
// function subtotals(array) {
//     var subtotalArray = Array(array.length);
//     for (var i = 0; i < array.length; i++) {
//         var subtotal = 0;
//         for (var j = 0; j <= i; j++) {
//             subtotal += array[j];
//         }
//         subtotalArray[i] = subtotal;
//     }
//     return subtotalArray;
// }

// => O(n ^ 2)  


