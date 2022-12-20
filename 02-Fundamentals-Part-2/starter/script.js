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


//* 36장 Functions Calling Other Functions


//* 37장 Reviewing Functions


//* 38장 Coding Challenge #1


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

