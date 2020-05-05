// function that takes in an object and finds all of the values which are numbers and converts them to strings. 


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
 }

stringifyNumbers(obj);

// assign empty object
// we loop through the keys of our input object
// if the key value is a number
// we give our empty object the key and its value.toString();
// if key is an object and not an array (cuz arrays are objects)
// we set the key in our empty obj, and set it equal to recalling the function with the keys in the object
// we recall here to make any adjustments to keys that are nested in one another
// if the object key is a not a number or object we just return the key

// WE ARE ONLY USING RECURSION HERE TO TRAVERSE THROUGH OUR KEYS THAT ARE OBJECTS 