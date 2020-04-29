// function which accepts a base and an exponent. return power of the base to the exponent 
// function should mimic Math.pow() - don't worry about negative bases and exponents 


//power(2,0) // 1
// power(2,2) //4
//power(2, 4) //16

function power(num, exp){
    if(exp === 1) {
        return num;
    }

    return num *= power(num, exp - 1);
}   

console.log(power(2,4))