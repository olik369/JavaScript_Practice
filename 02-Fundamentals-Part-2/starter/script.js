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

//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//* 자료구조(Data Structure)
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
//* 39장 Introduction to Arrays
/*
같은 데이터의 유형을 묶어줌

대괄호를 사용해서 배열을 묶는것이 더 일반적임
그리고 대괄호를 이용해서 묶는 방법을 '리터럴 구문'이라고도 함

!배열자체는 기본값이 아님 그래서 const로 선언했더라도 내부의 배열값은 변경가능함!!
!const로 선언한 배열은 배열변수에 직접 새로운 배열을 다시 할당하려고 할때가 문제임
*/
//* CODE
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//여기서 Array는 함수임
const Y = new Array(1991, 1984, 2008, 2020);

// 배열은 0부터 시작함(루아랑 다름, 일반적인 프로그래밍 언어와 같음)
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

* const로 선언해도 왜 변경가능할까???
! 가능
friends[2] = 'Jay'
console.log(friends);

! 불가능, 배열변수에 직접 새로운 배열을 할당하는것은 불가능함
// friends = ['Bob', 'Alice'];

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

*Exercise
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));  //NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)
*/

//* 40장 Basic Array Operations (Methods) (Array 함수들)
/*
*Add elements
Array.push(elem)
새로운 배열값을 마지막 인덱스 다음에 추가하고, 추가한 후 배열의 길이를 반환함
Array.unshift(elem)
새로운 배열값을 첫 인덱스에 추가하고, 추가한 후 배열의 길이를 반환함

*Remove elements
Array.pop()
마지막 인덱스의 배열값을 제거하고, 제거한 배열값을 반환함
Array.shift()
첫번째 인덱스의 배열값을 제거하고, 제거한 배열값을 반환함

*Search elements
Array.indexOf(elem)
해당 데이터가 있는 index를 반환함. 만약, 존재하지 않을경우 -1을 반환
Array.includes(elem)
해당 데이터가 존재하는지 boolean값으로 반환
*/
//*CODE
/*
const friends = ['Michael', 'Steven', 'Peter'];
*Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

*Remove elements
friends.pop();  // 마지막 값을 제거 후 반환
const popped = friends.pop(); // 'Peter'
console.log(popped);
console.log(friends);

friends.shift();  // 첫번째 값을 제거 후 반환
console.log(friends);

console.log(friends.indexOf('Steven')); // 해당 값의 index를 반환
console.log(friends.indexOf('Bob')); // 값이 없으면 -1을 반환함

friends.push(23);
console.log(friends.includes('Steven'));  // 해당 값이 있으면 true반환
console.log(friends.includes('Bob')); // 해당 값이 없으면 false반환
console.log(friends.includes('23'));  // 넣은값은 23이란 숫자이고 확인한값은 '23'인 string이므로 false반환
!즉, Array.includes() 강제 형변환을 하지 않음

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

//* 41장 Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array)
*/
//*CODE
/*
const calcTip = function (bill) {
  return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}
console.log(`Test 100$'s tip ${calcTip(100)}`);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const calcTotal = (bill, tip) => bill + tip;
const totals = [calcTotal(bills[0], tips[0]), calcTotal(bills[1], tips[1]), calcTotal(bills[2], tips[2])];
console.log(`bills : ${bills}
tips  : ${tips}
total : ${totals}
`)
*/

//* 42장 Introduction to Objects
/*
배열은 여러개의 자료를 한곳에 모을수는 있지만 각 데이터에 어떠한 의미가 있는지 파악하기 어려움
!그래서 javascript에는 Object자료형이 있음

각 키를 속성(property)라고도 함
Object명 = {
  키1: 자료,
  키2: 자료, ...
}

객체(object)를 생성하는 방법에는 여러가지가 있음
가장 간단한 방법은 중괄호를 이용해서 만드는 것임
!객체와 배열의 차이점은 검색할때 해당 내부 자료의 순서와 전혀 관계가 없다는점(객체)
배열에서는 요소를 지정하는 순서가 매우 중요(왜냐하면 해당 요소를 접근할때 index로 하기 위해)
*/
//*CODE
/*
*5개의 속성(property)를 갖고있음
*객체 리터럴 구문(object literal syntax)
const jonas = {
  firstName: 'Jonas',
  lastName: 'Scmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

//* 43장 Dot vs. Bracket Notation (객체의 데이터 접근방법)
/*
Bracket Notation
프로퍼티의 이름을 계산해야 할때 해당 방법을 자주씀

Dot
일반적인 경우
*/
//*CODE
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Scmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

// Dot
console.log(jonas.lastName);
// Bracket Notation
console.log(jonas['lastName']);

//반복된 키값의 문자열을 따로 빼서 사용하는 방법이 존재
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interesetdIn = prompt('What do you want to know about Jonas? Choose betweend firstName, lastName, age, job, and friends')

if (jonas[interesetdIn]) {
  console.log(jonas[interesetdIn]); // 존재하지 않은 키값을 사용하면 undefined를 뱉어냄
} else {
  console.log(`Wrong request! Choose betweend firstName, lastName, age, job, and friends`)
}

jonas.loaction = 'Protugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

*Chalenge
출력 : "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
*/

//* 44장 Object Methods (객체 매소드)
/*
*/
//*CODE
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Scmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  !매우 중요한 this 키워드(객체 본인을 가리킬수 있음)
  //즉, 객체 내에서 자신 객체의 프로퍼티를 접근을 쉽게 할 수 있게함
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license"`;
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//* Challenge
//* "Jonas is a 46-year old teacher, and he has a driver's license" 만약 없으면 ~ has no driver's license
console.log(jonas.getSummary());
*/

//* 45장 Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/
//*CODE
/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
  },
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2
    return this.BMI
  },
}

if (mark.calcBMI() != john.calcBMI()) {
  const bHigherMarkBMI = mark.BMI > john.BMI;
  console.log(`${bHigherMarkBMI ? mark.fullName : john.fullName}'s BMI(${bHigherMarkBMI ? mark.BMI : john.BMI}) is higher than ${(!bHigherMarkBMI) ? mark.fullName : john.fullName}'s BMI(${!bHigherMarkBMI ? mark.BMI : john.BMI})`)
} else {
  console.log(`${mark.fullName}'s BMI and ${john.fullName}'s BMI are same!`)
}
*/

//* 46장 Iteration: The for Loop
/*
*/
//*CODE
/*
*/

//* 47장 Looping Arrays, Breaking and Continuing


//* 48장 Looping Backwards and Loops in Loops


//* 49장 The while Loop


//* 50장 Coding Challenge #4

