// 불(Boolean) 자료형은 true(참) 또는 false(거짓) 두 가지 값만 가질 수 있는 논리형 데이터입니다.
// 1. 직접적인 불 값
let isTrue = true;
let isFalse = false;

console.log("isTrue:", isTrue);   // true
console.log("isFalse:", isFalse); // false
// 2. 비교 연산 ==> boolean2.js

// 3. 조건문에서 사용되는 boolean
// if (불 표현식) {
//     불 표현식이 참일 때 실행 될 문장
// }
if (a < b) {
    console.log("a는 b보다 작습니다.");
} else {
    console.log("a는 b보다 크거나 같습니다.");
}

// 4. Boolean() 함수로 변환하기
// 다음 값들은 'false'로 간주됩니다: false, 0, '', null, undefined, NaN
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// 나머지 값들은 모두 true로 간주됩니다.
console.log(Boolean(123));       // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true