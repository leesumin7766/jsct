// && : and 연산자
// js는 파이썬과 다르게 a < b < c 와 같은 연속 비교 불가
a = [1, 2, 3, 4]
b = [3, 4, 5, 6]

for (i of a) {
    for (j of b) {
        if (i && j){
            console.log(i, j)
        }
    }
}
for (i of a) {
    for (j of b) {
        if (i || j){
            console.log(i, j)
        }
    }
}