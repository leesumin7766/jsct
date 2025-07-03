// || : OR 연산자로 앞의 값이 false로 평가 되면 뒤의 값을 반환
let a = 3;
let b = 5;

if (a === b || a < b) {
    console.log('ok')
}

if (a === b || a > b) {
    console.log('ok')
} else {
    console.log('no')
}