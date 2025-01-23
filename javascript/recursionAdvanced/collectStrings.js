// write a function which accepts an object and returns an array of all the values in the object that have a typeof string recursively 

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


const collectStrings = (obj) => {
    let res = [];

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            res.push(obj[key]);
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            res = res.concat(collectStrings(obj[key]));
        }
    }

    return res;
}

// WITH HELPER FUNCTION
// function collectStrings(obj) {
//     var stringsArr = [];
 
//     function gatherStrings(o) {
//         for(var key in o) {
//             if(typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             }
//             else if(typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }
 
//     gatherStrings(obj);
 
//     return stringsArr;
// }


console.log(collectStrings(obj)); // ["foo", "bar", "baz"])


// FOR MORE CONTEXT SEE              stringyNumbers.js