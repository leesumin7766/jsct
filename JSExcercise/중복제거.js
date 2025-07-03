// Js 중복제거 하는 법 set함수
// 그외 : indexOf(), filter
// 그외 : forEach, includes()

// 배열 -> Set -> 배열
const dupArr = [1, 2, 3, 1, 2];
//중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후,
const set = new Set(dupArr);
//set 객체 다시 배열로.
const uniqueArr = [...set];

console.log(Array.isArray(uniqueArr));
console.log(uniqueArr);
