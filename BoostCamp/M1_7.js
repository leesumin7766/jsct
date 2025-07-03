/* 문제 해결
마지막 /v파일 이름 기준으로 같은지 확인
이름_v1.파일종류 에서 _v1은 같은 파일로 
파일 종류는 v1 ~ v9까지
중복 파일이 2개 이상만 map형태로 파일 : 개수 형태로 출력
*/
function match(param0) {
    const answer = new Map();
    for (i of param0) {
        const files = i.split('/').pop(); // 파일명만 추출
        const newFiles = files.replace(/_v[1-9]/, ''); // 파일 버전 종류 제거
        
        answer.set(newFiles, (answer.get(newFiles) || 0)+ 1);
        // newFiles라는 파일 이름이 answer Map에 이미 존재하면 기존값 +1, 존재하지 않으면 0 + 1

    }

    const result = new Map();
    for (let [j, k] of answer) { //중복되는 파일 추출
        if (k >= 2) {
            result.set(j,k);
        }
    }
// 중복 추출 이후에도 answer의 변화가 없다 ?
// reason: 새로운 Map을 만들지 않았기 때문
// 기존에 있던 값을 다시 set으로 덮어쓰기 때문에 값도 그대로, 구조도 그대로
// 조건에 맞는 항목만 골라 새로운 Map에 넣어야 한다
    return result;
}

console.log(match(["/a/a_v2.xa", "/b/a.xa", "/c/t.zz", "/d/a/t.xa", "/e/z/t_v1.zz", "/k/k/k/a_v9.xa"]));
console.log(match(["/t.zp", "/z/z_v2.zp", "/a.za", "/d/b.zb", "/d/a/t.zp"]));
console.log(match(["/t.yg", "/b/b.zg", "/a.zg", "/e/a.zz", "/d/a/x_v2.zg"]));