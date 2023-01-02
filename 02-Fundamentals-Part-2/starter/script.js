'use strict';
//activate strict mode

//* 32장 Activating Strict Mode
/*
기본적으로 javascript를 사용할때 첫문장에 'use strict'를 기입하여 strict mode를 활성화하기
? 이유
!1. 특정 작업을 금지함
!2. 눈에 보이는 오류를 발생시킴
*/
//* CODE
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`)

! 해당 예약어의 사용을 금지함
const interface = 'Audio';
const private = 534;
*/

//* 33장 Functions
/*
함수는 하나 이상의 완전한 코드행을 보유할 수 있다.
함수는 데이터를 받는것과 리턴 둘다 가능하다.
function 함수이름 (매개변수) {
  코드
}

함수에 반드시 매개변수와 리턴값이 존재할 필요는 없음!
*/
//* CODE
/*
function logger() {
  console.log(`My name is Jonas`);
}

! 함수 호출(실행) calling/ running / invoking function
logger();
logger();
logger();

! apples, oranges는 매개변수(parameters)
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

! 함수에 실질적으로 들어가는 데이터를 '인수'라고 함
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//* 34장 Function Declarations vs. Expressions
/*
! 서로 같은 의미가 아님!!
매개변수(parameters) : 함수에서 사용하는 변수
인수(arguments) : 함수를 호출하는 곳에서 사용하는 실제 값

!일반적인 함수 선언 VS 익명 함수 선언
일반적인 함수 선언을 통해 함수를 사용할 시에는 먼저 함수를 정의할 필요가 없음!!
ex)
변수 = 함수호출
일반적인 함수선언
(문제 없음!!)

변수 = 함수호출
익명함수 선언
(에러 발생!!)
?==> 이러한 차이는 내부에서 호이스팅(hoisting)이라는 과정때문에 차이를 보이는 것임
익명함수 선언은 커링을 사용할때나 내부함수를 사용할때 매우 유용하게 쓰일것임
*/
//* CODE
/*
일반적인 함수 선언(함수 선언 방법1)
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

함수 호출!
const age1 = calcAge1(1991);

익명 함수(함수 선언 방법2)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

//* 35장 Arrow Functions
/*
1. 중괄호가 필요 없음(한줄 이상일 경우 필요, return도 같이 필요함)
2. 반환이 실제로 암묵적으로 발생함
간단한 한줄 함수에 적합함

매개변수를 괄호로 묶어 래핑이 가능함

기존 함수 vs 화살표 함수 : this키워드에서 부터 차이를 시작함
*/
//* CODE
/*
!Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonnas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

//* 36장 Functions Calling Other Functions (함수 내부에서 다른 함수 호출)
/*
함수 내부에서
한 함수에서 다른 함수를 호출하는 것은 매우 흔한일
!이유는 DRY 원칙
!반복되는 코드의 경우 함수로 묶어서 호출
!반복되는 로직의 경우 수정이 매우 쉬워짐!! (ex.4조각 -> 3조각으로 바꾸는 경우)
*/
//* CODE
/*
*@ 과일을 조각조각 내는 함수
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;

  return juice;
}
console.log(fruitProcessor(2, 3)); // !데이터의 흐름을 이해하기
*/

//* 37장 Reviewing Functions
/*
다른 함수에서 매개변수의 이름이 중복되는것은 문제가 없음(매우 흔한일)

! 함수를 정의하는 방법들
1. Function declaration 함수 선언 : 해당함수를 선언전에 사용할 수 있음
function calcAge(birthYear) = {
  return 2037 - birthYear;
}

2. Function expression 함수 표현 : 필수적으로 변수에 함수를 저장해야함
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

3. Arrow function 화살표 함수 : 한줄 함수에 적합한 함수임(this 키워드를 갖고 있지 않음)
const calcAge = birthYear => 2037 - birthYear;

! 함수선언에는 함수이름, 매개변수, 코드조각이 존재함
*/
//* CODE
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const calcRetirement = function (age) {
  return 65 - age;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = calcRetirement(age);

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired `)
    return -1;  // -1은 프로그래밍에서 일종의 표준 숫자임
  }

  // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

//* 38장 Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores
*/
//* CODE
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win trophy! (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win trophy! (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins');
  }
}

console.log('Data 1');
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

console.log('Data 2');
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

//* 39장 Introduction to Arrays


//* 40장 Basic Array Operations (Methods)


//* 41장 Coding Challenge #2


//* 42장 Introduction to Objects


//* 43장 Dot vs. Bracket Notation


//* 44장 Object Methods


//* 45장 Coding Challenge #3


//* 46장 Iteration: The for Loop


//* 47장 Looping Arrays, Breaking and Continuing


//* 48장 Looping Backwards and Loops in Loops


//* 49장 The while Loop


//* 50장 Coding Challenge #4

