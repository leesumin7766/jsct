// Map : 키-값 쌍을 저장하는 자료구조
// 어떤 타입도 가능
// Map 저장 순서대로 반복
// .size로 요소 개수 확인
// 반복 가능
const map = new Map();
//추가
map.set('apple', 3);
map.set('banana', 5);
//조회
console.log(map.get('apple'));

const fruit = new Map([
    ['cherry', 7]
])

console.log(map.has('banana'));  // true
console.log(fruit.has('cherry'));
console.log(map.has('grape'));   // false

for (let [key, value] of fruit) {
    console.log(`${key} , ${value}`);
}
map.delete('banana');
map.clear();