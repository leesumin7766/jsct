// for (const 반복 변수 of 배열 or 객체) {
// }
const 배열 = [1, 2, 3, 4]

for (const 요소 of 배열) {
    console.log(요소)
}

for (const 인덱스 in 배열) {
    console.log(인덱스, 배열[인덱스])
}

for (let i = 0; i < 5; i ++) {
    console.log(`for: ${i}`)
}

m = ['a','b','c']
//요소
console.log("i of m");
for (i of m) {
    console.log(i);
}
//인덱스
console.log("i = 0;i < m.length; i++");
for (i = 0;i < m.length; i++) {
    console.log(i);
}
//인덱스2
console.log("i in m");
for (i in m) {
    console.log(i, m[i]);
}