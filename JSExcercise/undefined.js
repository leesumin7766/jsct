// undefined : 정의되어 있는지 확인!
// for x in y : x가 y에 있는지 확인!
let obj = {
  a: 1,
  b: undefined,
};

// 1. 값 비교 (undefined 여부)
console.log(obj["a"] === undefined);  // false (값: 1)
console.log(obj["b"] === undefined);  // true  (값: undefined)
console.log(obj["c"] === undefined);  // true  (존재 X)

// 2. 키 존재 여부
console.log("a" in obj); // true
console.log("b" in obj); // true (값은 undefined지만 key는 존재!)
console.log("c" in obj); // false