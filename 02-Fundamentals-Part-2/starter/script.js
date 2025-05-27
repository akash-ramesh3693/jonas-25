/*
//33.ACTIVATE STRICT MODE.
//write more secure code
//forbids us to do certain things
//strict create a visible errors

'use strict';

//example 
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true
if(hasDriversLicense) console.log("i can drive :D");

//reserved words
const interface = 'Audio';
const private = 534;
const if = 23


//34: Functions
//a piece of code used multiple times like variable
//dry code

function logger(){
    console.log('My name is Akash');
}
//calling /running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
console.log(apples, oranges);

const juice = `Juice with ${apples} apples and ${oranges} oranges`

return juice//result of this function.
}
const result = fruitProcessor(5,0);

console.log(result);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23')

console.log(num)





//35:function declarations vs expression
//parameter: local variable inside the function only.
//function declaration. calling/invoking before defining
//function hositing

const age1 = calcAge1(1998);
function calcAge1(birthYear){
  return 2037-birthYear;
}

console.log(age1);

//function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
}

const age2 = calcAge2(1998)
console.log(age1,age2)


//36: Arrow function
//onliner function
const calcAge3 = (birthyear) => 2037-birthyear;
const age3 = calcAge3(1998);
console.log(age3);

const yearsUntilRetirement = (birthyear,firstName) =>{
    const age = 2025 - birthyear;
    const retirement = 65-age
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998, 'Akash'));
console.log(yearsUntilRetirement(1998, 'Akash'));


//37:Function calling another function
function cutFruitPieces(fruit){
    return fruit * 4
}

function fruitProcessor(apples,oranges){

 const applePieces =   cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges)

const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`

return juice//result of this function.
}

console.log(fruitProcessor(2,3))
*/

//38:Reviewing the function.
const calcAge = function(birthYear){
    return 2037-birthYear;
}

const yearsUntilRetirement = function(birthyear,firstName){
    const age = calcAge(birthyear);
    const retirement = 65-age;

    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement
    }else{
        console.log(`${firstName} has already retired`)
        return -1;
    }  // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1998,'Akash'));
console.log(yearsUntilRetirement(1950,'Arasu'));

















