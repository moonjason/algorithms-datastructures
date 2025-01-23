// write a recursive function that returns the sum of all een numbers in object which may contain nested objects

const nestedEvenSum = (object) => {
    let sum = 0; 
    let newObj = {};
    let objectKeys = Object.keys(object);
    if (objectKeys.length === 1 && typeof object[objectKeys[0]] !== 'object') {
        if (object[objectKeys[0]] % 2 === 0){
            return object[objectKeys[0]];
        } else {
            return 0;
        }
    }

    for (let key in object) { 
        if (object[key] % 2 === 0) {
            newObj = {key: object[key]};
        } else {
            Object.assign(newObj, object[key]);
        }
        sum += nestedEvenSum(newObj);
        newObj = {};
    }
    return sum; 
}


//  -----
//  OPTIMIZED VERSION:
//  -----
// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
  
  
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10