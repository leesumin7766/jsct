// 문자열이나 배열에서 일부분을 잘라서 새로운 값
// slice.(x,y) x부터 y전까지
const str = "banana";
console.log(str.slice(0));    // "banana" (전체)
console.log(str.slice(1));    // "anana"
console.log(str.slice(2));    // "nana"
console.log(str.slice(2, 5)); // "nan"  (2번 인덱스부터 4번까지)
console.log(str.slice(-1));   // "a" (뒤에서부터 1글자)

const arr = [10, 20, 30, 40, 50];
console.log(arr.slice(1));      // [20, 30, 40, 50]
console.log(arr.slice(1, 3));   // [20, 30]
console.log(arr.slice(-2));     // [40, 50]

function solution(my_string) {
    var answer = [];
    for (i = 0; i < my_string.length; i++) {
        answer.push(my_string.slice(i))
        console.log(answer)
    }
    answer.sort()
    return answer;
}