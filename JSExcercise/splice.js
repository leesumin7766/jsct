// splice란 : 접합, 따라서 특정 위치에 요소 추가도 가능
// splice(인덱스, 0, 추가 요소) : 특정 위치에 요소 추가

a = [3, 'hi', 999, 'js']
console.log(a)
a.splice(2, 0, 'sumin') // 3번째위치, 0개 제거, sumin 추가
console.log(a)