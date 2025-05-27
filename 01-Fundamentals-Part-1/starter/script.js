/*
let js = "amazing";
// console.log(40+8+23 -10);

console.log("akash");

console.log(23);

let firstName = "Akash";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//variable name convention
let akash_ramesh = "ak";

let $function = 27;

let person = "akash";

let PI = 3.1415;

let myFirstjob='programmer';
let myCurrentJob ='coder';

console.log(myFirstjob,myCurrentJob);

true;
let javascriptIsFun = true
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun ='yes!'
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year=1998;

console.log(typeof year)

//bug or error.legacy reasons they didn't 
console.log(typeof null)


let age = 30;
age = 31;

const birthyear=1991;
//birthYear=1990;

// const job;

//oldway of declaring variable
var job ='programmer';
job= "coder"

lastName ="Ramesh";
console.log(lastName);

//ARITHMETIC /MATHEMATICAL OPERATION
const now = 2037;
const ageAkash = now-1998;
const ageSarah = now-2020;

console.log(ageAkash , ageSarah);

console.log(ageAkash * 2 , ageAkash/2 , 2**3);
//2 **3 means 2 to the power of 3 = 2 * 2 * 2

//concatenation
const firstName = "akash"
const lastName = 'ramesh'
console.log(firstName +' '+lastName)


//assignment operator

let x = 10 + 5;//15
x+=10;// x = x + 10;
x*=4// x= x*4 =100;
x++;//x=x+1
x--;//x=x-1
console.log(x)

//comparison operators
console.log(ageAkash > ageSarah);
console.log(ageSarah  >= 18);

const isFullAge= ageSarah >= 18;

console.log(now-1991 > now - 2018)


//operator precedence
const now = 2037;
const ageAkash = now-1998;
const ageSarah = now-2020;

console.log(now-1991 > now - 2018)

// console.log(25-10-5);

let x, y;
x = y = 25-10-5 // x = y=10 


console.log(x,y)

const averageAge =( ageAkash + ageSarah) /2

console.log(ageAkash,ageSarah, averageAge)



//coding challenge 1
const massMark= 95;
const heightMark =1.88;
const massJohn=85;
const heightJohn = 1.76;

const BMIMark = massMark/heightMark**2;
const BMIJohn = massJohn/(heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI)



//strings & template literals
const firstName = 'akash'
const job = 'teacher';
const birthyear = 1998;
const year = 2037
const akash = "I'm " + firstName + ', a '+ ( year-birthyear) +
                ' years old ' + job + '!'

console.log(akash);

const akashNew = `I'm ${firstName}, a ${year-birthyear} year's old ${job}!`

console.log(akashNew);

console.log(`Just a regular string...`)

console.log(`String with \n\
        multiple \n\
        lines
    `)

    console.log(`String
multipe
        lines
        `)


//18.taking decision if/else statements

const age = 15;
// const isOldEnough = age >=18

if( age >=18){
    console.log('Sarah can start driving license 🚗')
}else{
    const yearsLeft = 18 - age
    console.log(`sarah is too young.wait another ${yearsLeft} years`)
}


const birthYear = 2012;

let century
if(birthYear<=2000){
     century = 20;;
}else{
     century = 21;
}

console.log(century)


//19.coding challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */
// if(BMIMark > BMIJohn){
//     console.log(`"Mark's BMI (${BMIMark}) is higher than john's(${BMIJohn})!"`)
// }else{
//     console.log(`"John's BMI (${BMIJohn}) is higher than mark's (${BMIMark})!"`)
// }

//20.typeConversion(manually converts)and  coercion(automatically)

//strings + number = string behind the scenes
/*
const inputYear = '1999'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"))//Nan is invalid one
console.log(typeof NaN);//number

//number to string
console.log(String(23), 23);

//type coercion
//+ operators converts num to strings automatically
console.log('i am'+ 23 + 'years old')

//- acutally triggers the opposite conversion
// strings are converted to numbers
// console.log('23'-'10' -'3')
console.log('23' * '2' )
console.log('23' / '2' )


let n = '1' + 1;
n=n-1;
console.log(n);

*/


//21.TRUTHY AND FALSY VALUES
//5 FALSY VALUE, 0, '',UNDEFINED,NULL,NAN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Akash'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(NaN))
// console.log(Boolean(null))

/*
const money = 10;
//behind the scene type coercion
if(money){
    console.log('Dont spend it all;)');
}else{
    console.log('you should get a job');
}


let height = 0;

if(height){
    console.log('yay! height is defined')
}else{
    console.log('height is undefined')
}
*/

//22. Equality ==/ type coercion
// strict equality === operator  no type coercion

/*
const age = "18";

if(age ===18) console.log("you just became an adult(strict)");

if(age == 18) console.log("you just became an adult(loose)");

  const favourite = Number(prompt("what's your favourite number"));

  console.log(favourite);
  console.log(typeof favourite);

  if(favourite === 23){
    console.log('cool! 23 is an amazing number');
  }else if(favourite ===7){
    console.log('7 is also a cool number');
  } else if(favourite === 9){
    console.log('9 is also a cool number');
  }else{
    console.log("Number is not 23 or 7 or 9");
  }
//different !== equality operator
  if(favourite != 23) console.log('why not 23?');

  */

  //23. Boolean logic: the AND , OR , Not operators


  // A AND B //TRUE, TRUE =TRUE ALLOF THEM.
  //A OR B // FALSE ,FALSE = FALSE, TRUE WHEN ONE IS TRUE!
  // NOT A , NOT B inverts true.false value.
//************************************* */
  //24. LOGICAL OPERATOR

// const hasDriverLicense = true; //A
// const hasGoodvision = true//B

// console.log(hasDriverLicense && hasGoodvision);
// console.log(hasDriverLicense || hasGoodvision);
// console.log(!hasDriverLicense);


// if(hasDriverLicense && hasGoodvision){
//     console.log("sarah is able to drive")
// }else{
//     console.log('Someone else should drive')
// }
/*
const isTired = false; //C

console.log(hasDriverLicense && hasGoodvision &&
    isTired
)

console.log(hasDriverLicense || hasGoodvision ||
    isTired
)
if(hasDriverLicense && hasGoodvision && !isTired){
    console.log("sarah is able to drive")
}else{
    console.log('Someone else should drive')
}
*/
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 10

*/
// const scoreDolphins = (96 + 108 +89)/3;
// const scorekoalas = (88 + 91 + 100)/3

// console.log(scoreDolphins, scorekoalas);

// if(scoreDolphins > scorekoalas){
//     console.log("Dolpins win the trophy");
// }else if(scorekoalas > scoreDolphins){
//     console.log("koalas win the trophy");
// }else if(scoreDolphins === scorekoalas){
//     console.log("both win the trophy");
// }

//Bonus1
/*
const scoreDolphins = (97+ 112 +80)/3;
const scorekoalas = (109 + 95 + 50)/3

console.log(scoreDolphins, scorekoalas);

if(scoreDolphins > scorekoalas  && scoreDolphins >= 100){
    console.log("Dolpins win the trophy");
}else if(scorekoalas > scoreDolphins && scorekoalas >= 100){
    console.log("koalas win the trophy");
}else if(scoreDolphins === scorekoalas && scoreDolphins >=100
    && scorekoalas >=100){
    console.log("both win the trophy");
}else{
    console.log("no one wins the trophy")
}
    */

//26: Switch statement

/*
const day = 'tuesday';

switch(day){
    case 'monday'://day === 'monday'
        console.log('Plan course structure');
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log("Not a valid day !")
}

if (day === 'monday'){
        console.log('Plan course structure');
        console.log("Go to coding meetup");
}else if (day === 'tuesday'){
         console.log("prepare theory videos");
}else if (day === 'wednesday' || day === 'thursday'){
           console.log('Write code examples');
}else if (day === 'friday'){
    console.log('record videos');
}else if ( day === 'saturday' || day === 'sunday'){
        console.log('enjoy the weekend');

}else{
     console.log("Not a valid day !")
}
     */

//27: statements(declares the full sentences; no produce values)
// ) and expressions(piece of code produce value)
// 3 + 4
// 1998
// true && false && !false

// if ( 23> 10){
//     const str = '23 is bigger';
// }


//28.the conditional ternary operator
//(writing if else statement all in one line)

// const age = 15
// age  >= 18 ? console.log('i like to drink wine 🍷') :
// console.log('i like to drink water💧 ');

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink)

// let drink2
// if(age >= 18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water';

// }
// console.log(drink2)

// console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`)

//29: coding challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �

*/
const bill = 40;

const tip = bill <= 300 && bill >=50 ? bill * 0.15 :
bill * 0.2;
console.log(`“The bill was ${bill}, the tip was ${tip}, and the total value
${bill + tip}”`)