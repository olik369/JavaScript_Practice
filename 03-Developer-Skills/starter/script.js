// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1959));
//* 56장 Installing Node.js and Setting Up a Dev Environment

// 터미널은 기본적으로 컴퓨터에 지시를 내리는 방식

//* 57장 Learning How to Code

//* 58장 How to Think Like a Developer: Become a Problem Solver!

//* 59장 Using Google, StackOverflow and MDN
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 온도의 진폭 계산
// 에러는 무시해야함
const calcTempAmplitude = function (temps) {
  let min, max;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'number') {
      min = temps[i];
      max = temps[i];
    }
  }

  // 유효하지 않은 온도만 받을경우
  if (typeof min !== 'number') return console.log('Invalid Temperatures!');

  for (let i = 1; i < temps.length; i++) {
    let curTemp = temps[i];

    if (curTemp !== 'error') {
      // calc min, max
      max = max < curTemp ? curTemp : max;
      min = min > curTemp ? curTemp : min;
    }
  }

  console.log(`MaxTemp : ${max}, MinTemp : ${min}
Amplitude of Temperature : ${max - min}`);
};

let arrTemp1 = [3, -2, -6, -1];
let arrTemp2 = ['error', 9, 13, 17, 15, 14, 9, 5];

calcTempAmplitude(temperatures);
calcTempAmplitude(['error', 'error']);
calcTempAmplitude(Array.prototype.concat(arrTemp1, arrTemp2));

const calcTempAmplitude2 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(`Temparatures : ${temps}`);
  return calcTempAmplitude(temps);
};

calcTempAmplitude2(arrTemp1, arrTemp2);
*/

//* 60장 Debugging (Fixing Errors)

//* 61장 Debugging with the Console and Breakpoints
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  console.table(measurement);
  // console.log(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;

  return kelvin;
};
console.log(measureKelvin());
*/

//* 62장 Coding Challenge #1
