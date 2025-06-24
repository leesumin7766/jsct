// 비교 연산자 예제 (Comparison Operators)
let x = 10;
let y = 20;
let z = '10'; // 문자열

// 1. 동등 비교 (==)
// 값만 비교 (자료형은 무시)
console.log("x == y:", x == y);     // false
console.log("x == z:", x == z);     // true (숫자 10과 문자열 '10'은 값만 비교하면 같음)

// 2. 일치 비교 (===)
// 값과 자료형 모두 비교
console.log("x === y:", x === y);   // false
console.log("x === z:", x === z);   // false (자료형 다름)

// 3. 부등 비교 (!=)
// 값만 다르면 true
console.log("x != y:", x != y);     // true
console.log("x != z:", x != z);     // false (값은 같음)

// 4. 불일치 비교 (!==)
// 값 또는 자료형이 다르면 true
console.log("x !== y:", x !== y);   // true
console.log("x !== z:", x !== z);   // true (자료형 다름)

// 5. 크다, 작다, 크거나 같다, 작거나 같다
console.log("x > y:", x > y);       // false
console.log("x < y:", x < y);       // true
console.log("x >= y:", x >= y);     // false
console.log("x <= y:", x <= y);     // true

console.log("x >= 10:", x >= 10);   // true
console.log("y <= 20:", y <= 20);   // true
