//includes() : 포함되어있는지 확인
// string.includes(찾고자 하는 문자열, start인덱스)
// array.includes(찾고자 하는 요소, 검색을 시작할 위치)

const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));  // true
console.log(fruits.includes("grape"));   // false
console.log(fruits.includes("apple", 1)); // false (인덱스 1부터 검색)

const text = "hello world";
console.log(text.includes("hello"));  // true
console.log(text.includes("world"));  // true
console.log(text.includes("worlds")); // false
console.log(text.includes("lo", 3));  // false (3번 인덱스부터 검색)