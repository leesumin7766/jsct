a = [4, 2, 3, 6, 8, 1]

a.sort()
console.log(a)
a.sort().reverse() // .reverse() 
console.log(a)

a.sort((a, b) => a - b); // 오름차순
// a - b < 0 : a가 b보다 작다 -> a 앞에
console.log(a)
a.sort((a, b) => b - a); // 내림차순
// a - b > 0 : a가 b보다 크다 → b 앞에
console.log(a)