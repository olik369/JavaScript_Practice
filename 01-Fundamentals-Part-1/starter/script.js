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

// 12장 DATA TYPES

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
*/

//* JavaScript는 동적 타이핑을 지원함 -> 수동으로 데이터 유형을 정의할 필요 X
//! JavaScript에서 Value(값)은 타입을 갖고 있지만, 변수는 갖고있지 않음
// 변수는 단순히 유형이 있는 값을 저장(즉, 루아처럼 같은 변수에 다른 자료형을 넣어도 상관이 없음)

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// 13장