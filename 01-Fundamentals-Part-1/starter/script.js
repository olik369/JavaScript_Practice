/**
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"; // 변수 선언 (CamelCase)

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; //Syntax Error 작성한 코드에서 오류가발생
// 오류를 발생하는 것은 Console.log를 찍을필요가 없음(Syntax Error)

// Variable name conventions
let jonas_matilda = 'JM'
let $_function = 27;  //오로지 $, _ 만이 특수문자 중 변수명에 쓰일수 있음
let name = 'Jonas'; // 되도록이면 예약어로 쓰일만한 변수명은 사용하지 말기

let person = 'jonas'  //Person처럼 일반적으로 사용되는 변수명에 첫글자를 대문자로 하는건 지양
let PI = 3.1415 //상수로 쓰이는 것에는 대문자로만 하는것이 일반적임

// 변수명 좋은 예
let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

// 변수명 나쁜 예
let job1 = 'Programmer';
let job2 = 'Teacher';

console.log(myFirstJob);
*/

//* 12장 DATA TYPES
/*
JavaScript에서 값은 개체가 아니면 원시값(Primitive)
7가지 원시 데이터 종류가 있음
1. Number (부동 소수점 숫자) 항상 소수점이 존재 (ex. 23 = 23.0) 정수형이 존재하지 않음
2. String
3. Boolean (true / false)
4. Undefined 아직 정의되지 않은 변수(비어있는 값)
5. Null(비어있는 값)
6. Symbol(ES2015) 유니크한 값이면서 변경이 불가능한 값
7. BigInt(ES2020) 매우 큰 정수를 담음
* JavaScript는 동적 타이핑을 지원함 -> 수동으로 데이터 유형을 정의할 필요 X
! JavaScript에서 Value(값)은 타입을 갖고 있지만, 변수는 갖고있지 않음
변수는 단순히 유형이 있는 값을 저장(즉, 루아처럼 같은 변수에 다른 자료형을 넣어도 상관이 없음)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
*/


//* 13장 let, const and var
/**
let, const (ES6), var은 오래된 방법
기본적으로 깨끗한 코드를 짜고 싶으면 const를 기본적으로 사용하고
확실하게 변경되는 곳에는 let을 쓰는것을 매우권장
!var은 되도록 사용하지 말기!!(ES6 이전에 쓰임)
let age = 30;
age = 31; //변수 재할당

const birthYear = 1991;
// birthYear = 1990; // TypeError(Const) Immutable 변수임(mutable이 아니라!)

// const job;  // const값은 항상 초기값이 필요함
var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann'; // 전역변수는 되도록 쓰지않아야함(당연)
console.log(lastName);
*/



//* 14장 Basic Operators
/**
// Math operators (산술 연산자)
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2의 3승 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators (할당 연산자)
let x = 10 + 5; // 15
x += 10;  // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;  // x = x + 1
x--;  // x = x - 1
console.log(x);

// Comparison operators (비교 연산자)
console.log(ageJonas > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

//* 15장 Operator Precedence
/*
MDN operator precedence 연산자 우선순위가 높은 순서대로 실행
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;  // x = y = 10, x = 10 (both x, y is 10!)
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

//* 16장 Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall

* 되도록 질량과 키는 변하지 않는값이라 생각해서 const로 쓰는게 좋을것임
console.log('Data 1');
let markMassKg = 78;
let markHeightMeter = 1.69;
let markBMI = markMassKg / markHeightMeter ** 2;
console.log('Mark`s BMI is ' + markBMI);

let johnMassKg = 92
let johnHeightMeter = 1.95
let johnBMI = johnMassKg / johnHeightMeter ** 2;
console.log('John`s BMI is ' + johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log('Mark has a higher BMI than John : ' + markHigherBMI);

console.log('Data 2');
markMassKg = 95;
markHeightMeter = 1.88
markBMI = markMassKg / markHeightMeter ** 2;
console.log('Mark`s BMI is ' + markBMI);

johnMassKg = 85;
johnHeightMeter = 1.76;
johnBMI = johnMassKg / johnHeightMeter ** 2;
console.log('John`s BMI is ' + johnBMI);

markHigherBMI = markBMI > johnBMI;
console.log('Mark has a higher BMI than John : ' + markHigherBMI);
*/

//* 17장 Strings and Template Literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

*템플릿 리터럴 ``(backtick) 을 사용해서 활용가능(ES6)
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

*줄바꿈 ES6 이전 방식
console.log(`String with \n\
multiple \n\
lines`);

*줄바꿈 ES6 이후 방식 (HTML을 Javascript로 작성할때 매우 유용할 것임)
console.log(`String
multiple
lines`);
*/

//* 18장 Taking Decisions: if / else Statements
/*
*제어 구조 if() {}
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log(`Sarah can start driving license 🎈`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

//* 19장 Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/
//* CODE
/*
console.log('Data 1');
let markMassKg = 78;
let markHeightMeter = 1.69;
let markBMI = markMassKg / markHeightMeter ** 2;

let johnMassKg = 92
let johnHeightMeter = 1.95
let johnBMI = johnMassKg / johnHeightMeter ** 2;

let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}

console.log('Data 2');
markMassKg = 95;
markHeightMeter = 1.88
markBMI = markMassKg / markHeightMeter ** 2;

johnMassKg = 85;
johnHeightMeter = 1.76;
johnBMI = johnMassKg / johnHeightMeter ** 2;

markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}
*/

//* 20장 Type Conversion and Coercion (타입 변환/강제 형변환)
/*
Type Conversion
수동으로 형변환 하는것을 말함

Type Coercion
Javascript가 타입을 자동으로 변환하는 경우
*/
//* CODE
/*
* type conversion 형변환
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  //inputYear은 숫자로 변환됨
console.log(inputYear + 18);  //199118

console.log(Number('Jonas')); // NaN 출력(not a number)
console.log(typeof NaN);  // NaN은 number 타입임(숫자가 아닌 유형의 숫자 ㅋㅋ)

console.log(String(23), 23);  // to number, string, boolean은 가능하지만 undefined와 null은 불가

* type coercion 강제 형변환
console.log('I am ' + 23 + ' years old'); // 문자열 사이에 + 연산이 있는경우 숫자는 문자열로 강제 형변환
console.log('23' - '10' - 3); // 문자열 사이에 - 연산이 있는경우 문자열은 숫자로 강제 형변환
console.log('23' * '2');  // 곱셉(나눗셈, 승수) 연산자도 마찬가지 숫자로 됨

let n = '1' + 1;  // 11 문자열
n = n - 1;        // 10 숫자
console.log(n);
*/

//* 21장 Truthy and Falsy Values
/*
! 5가지 falsy Value : 0, '', undefined, null, NaN
*/
//* CODE
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); // 빈 객체
Javascript에서 Boolean으로 강제 형변환을 하는 경우는 단 2가지 경우임
논리 연산자를 사용한 경우, 논리 구문(if ~ else) 사용한 경우

const money = 100;
if (money) {
  console.log(`Don't spend it all ;)`);
} else {
  console.log(`You should get a job!`);
}

let height = 0;
if (height) {
  console.log(`YAY! Height is defined`);
} else {
  console.log(`Height is UNDEFINED`);
}
*/

//* 22장 Equality Operators: == vs. ===
/*
== (loosen) 강제 형변환을 시도함
=== (strict) 강제 형변환을 시도하지 않음(javaScript에서 되도록이면 이것만 쓰는게 맞음)
*/

//* CODE
/*
const age = '18';
if (age === 18) console.log(`You just became an adult :D (strict)`);
=== 은 강제 형변환을 하지 않음(strict)
== 강제 형변환을 함

if (age == 18) console.log(`You just became an adult :D (loose)`);

const favorite = Number(prompt(`What's your favorite number?`));  // prompt는 string을 뱉어냄
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`Cool! 23 is an amazing number!`)
} else if (favorite === 7) {
  console.log('7 is also a cool number')
} else if (favorite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log(`Number is not 23 or 7 or 9`);
}

if (favorite !== 23) console.log(`Why not 23?`);  // !==(strict) !=(loosen)
*/

//* 23장 Boolean Logic
/*
A AND B (true, true -> true) (true, false -> false)
A OR B (false, false -> false) (true, false -> true)
!A (true -> false) (false -> true)
*/

//* 24장 Logical Operators
/*
&& (and)
|| (or)
! (not)
*/

//* CODE
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log('Sarah is able to drive!');
} else {
  console.log(`Someone else should drive...`);
}

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log(`Someone else should drive...`);
}
*/

//* 25장 Coding Challenge #3
/*
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
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//*CODE
/*
console.log(`Data 1`);
const scoreDolphins_1 = 96
const scoreDolphins_2 = 108
const scoreDolphins_3 = 89
const avgScoreDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3

const scoreKoalas_1 = 88
const scoreKoalas_2 = 91
const scoreKoalas_3 = 110
const avgScoreKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3

console.log(`Dolphins's avg score : ${avgScoreDolphins} Koalas's avg score : ${avgScoreKoalas} `)
if (avgScoreDolphins > avgScoreKoalas) console.log(`Dolphins is Winner!`);
else if (avgScoreDolphins < avgScoreKoalas) console.log(`Koalas is Winner!`);
else console.log(`Dolphins and Koalas Draw!`);

Dolphins is Winner!

console.log(`Bonus 1`)
const MinScoreToWin = 100

const scoreDolphins_1 = 97
const scoreDolphins_2 = 112
const scoreDolphins_3 = 101
const avgScoreDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3
const overMinScoreDolphins = avgScoreDolphins >= MinScoreToWin

const scoreKoalas_1 = 109
const scoreKoalas_2 = 95
const scoreKoalas_3 = 123
const avgScoreKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3
const overMinScoreKoalas = avgScoreKoalas >= MinScoreToWin

console.log(`Dolphins's avg score : ${avgScoreDolphins} Koalas's avg score : ${avgScoreKoalas} `)
if (avgScoreDolphins > avgScoreKoalas && overMinScoreDolphins) console.log(`Dolphins is Winner!`);
else if (avgScoreDolphins < avgScoreKoalas && overMinScoreKoalas) console.log(`Koalas is Winner!`);
else if (avgScoreDolphins === avgScoreKoalas) console.log(`Dolphins and Koalas Draw!`);
else console.log(`No one wins trophy`);

Koalas is Winner!

console.log(`Bonus 2`)
const MinScoreToWin = 100
const scoreDolphins_1 = 97
const scoreDolphins_2 = 112
const scoreDolphins_3 = 101
const avgScoreDolphins = (scoreDolphins_1 + scoreDolphins_2 + scoreDolphins_3) / 3
const overMinScoreDolphins = avgScoreDolphins >= MinScoreToWin

const scoreKoalas_1 = 109
const scoreKoalas_2 = 95
const scoreKoalas_3 = 106
const avgScoreKoalas = (scoreKoalas_1 + scoreKoalas_2 + scoreKoalas_3) / 3
const overMinScoreKoalas = avgScoreKoalas >= MinScoreToWin

console.log(`Dolphins's avg score : ${avgScoreDolphins} Koalas's avg score : ${avgScoreKoalas} `)
if (avgScoreDolphins > avgScoreKoalas && overMinScoreDolphins) console.log(`Dolphins is Winner!`);
else if (avgScoreDolphins < avgScoreKoalas && overMinScoreKoalas) console.log(`Koalas is Winner!`);
else if (avgScoreDolphins === avgScoreKoalas && overMinScoreDolphins && overMinScoreKoalas) console.log(`Dolphins and Koalas Draw!`);
else console.log(`No one wins trophy`)

Dolphins and Koalas Draw!
*/

//* 26장 The switch Statement
/*
switch (변수) {
  case 조건1 : 엄격한 비교로 적용함 (변수 === 조건1)
  break;
  case 조건2 :
  break;
  case 조건3 :
  break;
  default :
}
*/

//* CODE
/*
const day = 'thursday';
switch (day) {
  case 'monday':  // day === 'monday'
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend :D`);
    break;
  default:
    console.log(`Not a valid day!`);
}

if (day === 'monday') {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`Not a valid day!`);
}
*/

//* 27장 Statements and Expressions
/*
선언(declaration)은 문장(statement) ==> 특정한 로직을 결정
표현(expression)은 단어 (즉, 문장을 구성함) ==> 값을 생성

! Example
if (23 > 10) {
  const str = `23 is bigger`;
}
if ~ 구문은 문장(statement)
`23 is bigger` ==> 표현
const str = `23 is bigger`; ==> 구문
*/

//* 28장 The Conditional(Ternary) Operator
/*
조건 연산자(3항 연산자)
(조건) ? 참값 : 거짓값
*/

//* CODE
/*
const age = 23;
age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 🥚`)

const drink = age >= 18 ? 'wine 🍷' : 'water 🥚'
console.log(drink);

!너무 비효율적임
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 🥚';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 🥚'}`);
*/

//* 29장 Coding Challenge #4
/*

*/

// 30장 JavaScript Releases: ES5, ES6 + and ESNext
