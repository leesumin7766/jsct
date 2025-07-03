// Math 함수
a = [2, 4, 5, 6, 1, 5, 2]
b = 0.66

// 절댓값 Math.abs
console.log(Math.abs(a[1] - a[3])) // 4 - 6
// 올림 Math.ceil
console.log(Math.ceil(b))
console.log(Math.ceil(-3.88))
// 버림 Math.floor
console.log(Math.floor(b))
console.log(Math.floor(-8.7))
// 반올림 Math.round
console.log(Math.round(4.5))
console.log(Math.round(4.4))
// 가장 큰 수 Math.max
console.log(Math.max(...a, 5))
console.log(Math.max(3, 5, -2))
// 가장 작은 수 Math.min
console.log(Math.min(...a, 5))
console.log(Math.min(3, 5, -2))
// 제곱 Math.pow(base, exponent)  base^ exponent
console.log(Math.pow(4, 2))
console.log(Math.pow(4, 0.5))