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

//challenge 1

const calcAverage=(one,two,three) =>{
    const avg = (one+two+three)/3;
    return avg;
}

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins,scoreKoalas)

const checkWinner = (avgDolphins, avgKoalas) =>{
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`dolphins win ${avgDolphins} vs ${avgKoalas}`)
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`koalas win ${avgKoalas} vs ${avgDolphins}`)
    }else{
        console.log("No team wins...")
    }
}

checkWinner(scoreDolphins,scoreKoalas);


scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas)


checkWinner(scoreDolphins,scoreKoalas);


//40:FIRST DATA STRUCTURE ARRAYS.

const friend1 = 'michael';
const friend2 = 'steven';
const friend3 = 'peter';

const friends = ['Michael','Steven', 'Peter'];
console.log(friends);
 
//array function method
const year = new Array(1991, 1998, 2000, 2020);


console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length)//no of elements in the array.

console.log(friends[friends.length-1])

//array mutate only primitive values can't be mutate
friends[2] = "jay"
friends[3] = 'john'
console.log(friends)

const firstName = 'akash'
const akash = [firstName, 'ramesh', 2037-1998,'programmer', friends]

console.log(akash); 

console.log(akash.length)


const calcAge = function (birthYear){
    return 2037-birthYear;
}

const years = [1990,1967, 2002, 2010,2018];

console.log(calcAge(years))

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);

console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length-1])];
console.log(ages)





//41.basic array operation methods.


const friends = ['Michael','Steven', 'Peter'];

//push method adds elements at the end of the array

//add elements
const newLength = friends.push("jay");
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends)

//remove elements
friends.pop(); //last element

const popped = friends.pop(); //last element
console.log(popped);
console.log(friends)

friends.shift();//first element
console.log(friends)

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('bob'));//-1

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if(friends.includes("Peter")){
    console.log("you have a friends called peter")
}
    
//challenge 2

function calcTip (billValue){
    const tip = billValue >= 50 && billValue <=300 ? billValue * 0.15 :billValue* 0.2
    return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const totals=[bills[0]+tips[0], bills[1]+tips[1] ,bills[2]+tips[2]]
console.log(bills,tips , totals)


//another data structure.
//43.Introduction to Objects(key value pairs)
const akashArray = [
    'Akash',
    'Ramesh',

    2037-1991,
    'programmer',
    ["michael", 'peter', 'steven']
]

//object literal syntax(unstructure data)
const akash = {
    firstName:'Akash',
    lastName :'Ramesh',
    age: 2037-1991,
    job:"programmer",
    friends:['michael', 'peter', 'steven']
}

//44.dot vs bracket notation.

console.log(akash)
console.log(akash.lastName);


//put expression
console.log(akash['lastName'])

const nameKey = 'Name'

//bracket notation.compute the property.
console.log(akash['first'+nameKey]);
console.log(akash['last'+nameKey]);


const interestedIn = prompt('what do you want to know about akash? choose between firstName, lastName, age, job, and friends');

if(akash[interestedIn]){
    console.log(akash[interestedIn]);
}else{
    console.log('Wrong request! choose betweenfirstname,lastname, job, age, friends')
}

akash.location = 'Portugal';
akash['twitter'] = '@akashramesh'

console.log(akash)
//challenge
console.log(`${akash.firstName} has ${akash.friends.length} friends
        and his best friends is called ${akash.friends[0]}
        `)

//45:Object methods
    const akash = {
    firstName:'Akash',
    lastName :'Ramesh',
    birthYear: 1998,
    job:"programmer",
    friends:['michael', 'peter', 'steven'],
    hasDriversLicense:true,
    // calcAge:function(birthYear){//method this.
    //     return 2037-birthYear
    // }
    //  calcAge:function(){//method this.
    //     // console.log(this);
    //     return 2037-this.birthYear;
    // }
    calcAge:function(){//method this.
       this.age = 2037-this.birthYear
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a 
        ${this.calcAge()} old ${this.job}, and he has
         ${this.hasDriversLicense ? 'a':'no'} driver's license`
    }
};

console.log(akash.calcAge(1998));
// console.log(akash['calcAge'](1998));
console.log(akash.age);
console.log(akash.getSummary());



//challenge 3
const mark = {
    fullname:'Mark Miller',
    mass:78,
    height:1.69,

    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height)
        return this.bmi
    }
}
const smith = {
    fullname:'John Smith',
    mass:92,
    height:1.95,
    
    calcBMI:function(){
        this.bmi = this.mass/(this.height*this.height)
        return this.bmi
    }
}

console.log(mark.calcBMI())

if(mark.calcBMI() > smith.calcBMI()){
    console.log(`Mark MIllers BMI ${mark.calcBMI()} is higher than John
    smith's ${smith.calcBMI()}`)
}else{
     console.log(`John smith's BMI ${smith.calcBMI()} is higher than mark
     miller ${mark.calcBMI()}`) 
}


//47.iteration: the for loop(gym)
//automate repetitive tasks over again and again
//dry (violating don't repeat yourself)
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//forloop keeps running while condition is true! 
//counter initalization;condition;increment;
for(let rep=1;rep<=10;rep++){
console.log("Lifting weights repetition "+rep);
}

 

//48.looping Arrays breaking and continue


const akash = [
    'Akash',
    'Ramesh',
     2037-1991,
    'programmer',
    ["michael", 'peter', 'steven'],
    true,
    'dubai'
]

const types = [];

for(let i=0;i<akash.length;i++){
    //reading from akash array
    console.log(akash[i],typeof akash[i]);
    //filling an array

    // types[i] = typeof akash[i]

    //push method
    types.push(typeof akash[i])
}

console.log(types);

const years = [1991,2007,1969,2020];
const ages=[];

for(let i=0;i<years.length; i++){
  ages.push( 2037-years[i]) 
}

console.log(ages);


//continue and break statement;

console.log('----- ONly Strings')
for(let i=0;i<akash.length;i++){
    if(typeof akash[i]!== 'string') continue
    //skipping other types immediately exit the 
    // current iteration

    console.log(akash[i],typeof akash[i]);  
}

console.log('-----Break with number')
for(let i=0;i<akash.length;i++){
    if(typeof akash[i] === 'number') break;
    //skipping other types immediately exit the 
    // current iteration

    console.log(akash[i],typeof akash[i]);  
}
 

//49.looping backwards and loops in loops
const akash = [
    'Akash',
    'Ramesh',
     2037-1991,
    'programmer',
    ["michael", 'peter', 'steven'], 
    true
]
//0, 1,'5

for(let i = akash.length-1; i >= 0 ; i--){
    console.log(i,akash[i])
}

for(let exercise =1 ; exercise < 4; exercise++){
    console.log(`-----------Staring exercise ${exercise}`)

    //loops in loops
    for(let rep = 1; rep < 6; rep++){
        console.log( `Exercise ${exercise} lifting weight repetation ${rep}`);
    }
}


///////////////////////////////////////
//50.while loop
// for(let rep=1;rep<=10;rep++){
// console.log("Lifting weights repetition "+rep);
// }

console.log('========while loop======');
let rep=1;
    // while(rep <= 10){
    // console.log("Lifting weights repetition "+rep);
    // rep++;
    // }

let dice =Math.trunc(Math.random() * 6) + 1;

//rolling a dice is the example use case for using while loop.
while(dice !== 6){
    console.log(`you rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) +1 ;
    if(dice ===6) console.log("loop is about to end....")
}

 */
//51.challenge #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = [];
const totals = [];