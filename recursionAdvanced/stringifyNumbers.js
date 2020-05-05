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

const stringifyNumbers = (obj) => {
    let res = {};
    let objKeys = Object.keys(obj);

    // if (typeof obj[objKeys[0]] === "object")

    console.log(objKeys.slice(0, objKeys.length - 1));
    // set result equal to object property 


    //object assign  



    return res;
} 

stringifyNumbers(obj);