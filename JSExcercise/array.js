// 배여열 [], index 0, 1, 2, 3...
const array = [273, 'string', true]

console.log(array[2])
console.log(array.length) // 배열의 길이

array.push(100) // push : 배열 추가
console.log(array)

// splice : 배열 제거
array.splice(2,1) // splice(인덱스 위치, 위치부터 몇 개)
console.log(array)

// indexOf : 배열에서 해당 위치 찾기
console.log(array.indexOf(100))
console.log(array.indexOf(true)) // 배열에 없을 경우 -1 출력