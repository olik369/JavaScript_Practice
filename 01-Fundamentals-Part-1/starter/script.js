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

// 19장 Coding Challenge #2


// 20장 Type Conversion and Coercion
// 21장 Truthy and Falsy Values
// 22장 Equality Operators: == vs. ===
// 23장 Boolean Logic
// 24장 Logical Operators
// 25장 Coding Challenge #3
// 26장 The switch Statement
// 27장 Statements and Expressions
// 28장 The Conditional(Ternary) Operator
// 29장 Coding Challenge #4
// 30장 JavaScript Releases: ES5, ES6 + and ESNext
