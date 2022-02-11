const myAge = 35;

let earlyYears = 2;
earlyYears *= 10.5;

/* Removing 2 years */
let laterYears = myAge-2;
laterYears *= 4;

/* Calculate dog years */
var myAgeInDogYears = earlyYears + laterYears;

/* My name var - in small letters*/
const myName = 'Steffen' .toLowerCase();

console.log(myAge);
console.log(earlyYears);
console.log(laterYears);
console.log(myName);

/*result*/

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);