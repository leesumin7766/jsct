// HashMap 이해, 구현 (문자열(key)을 숫자 인덱스(inedx)로 변환)
// Map을 그냥 쓰는 건 전자레인지만 쓰는 것, 직접 구현하는 건 전자레인지 내부 회로를 배우는 것!
// 1. 충돌 최소화
// 2. 분산성
// 3. 빠른 계산
// String을 기반으로 정보를 기록하고 관리하는 경우 HashMap 사용

function hash(key) {
    let hashValue = 0;
    for (let i =0; i < key.length; i++) {
        hashValue = (hashValue * 31 + key.charCodeAt(i)) % BUCKET_SIZE;
    } // 충돌을 줄이기 위해 * 31(2**5 -1) 
    return hashValue;
}
const BUCKET_SIZE = 100; // 버킷 개수 (충돌 대비)

// 해시맵 저장소
const buckets = Array.from({ length: BUCKET_SIZE }, () => []);
// 저장 역할
function put(key, value) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value; // update
            return;
        }
    }
    bucket.push([key, value]); // insert
}
// key 해당 value 반환
function get(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let [k, v] of bucket) {
        if (k === key) return v;
    }
    return null;
}
// key가 있다면, [key, value] 쌍 삭제
function remove(key) {
    const index = hash(key);
    const bucket = buckets[index];

    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
            bucket.splice(i, 1);
            return;
        }
    }
}
// null 이 아니면 true / false
function containsKey(key) {
    return get(key) !== null;
}
// key 목록 배열로 반환
function keys() {
    const result = [];
    for (let bucket of buckets) {
        for (let [k, _] of bucket) {
            result.push(k);
        }
    }
    return result;
}
// 전체 초기화, 빈 배열로
function clear() {
    for (let i = 0; i < BUCKET_SIZE; i++) {
        buckets[i] = [];
    }
}
// key, value 쌍 개수 합계
function size() {
    let count = 0;
    for (let bucket of buckets) {
        count += bucket.length;
    }
    return count;
}
// size가 0인지
function isEmpty() {
    return size() === 0;
}
// key : apple, fruit는 조회 함수 작성하지 않으면(예:values) 외부 확인 불가
put("sumin", "human");
console.log(keys());     
put("porche", "car");
put("benz", "vehicle");
put("IU", "human");

console.log(`get: ${get("sumin")}`);      
console.log(`containsKey: ${containsKey("sumin")}`); 
console.log(`containsKey: ${containsKey("audi")}`); 
console.log(keys());    //인덱스값 오름차순 출력
console.log(size());
remove("IU");
console.log(keys());      
console.log(`isEmpty: ${isEmpty()}`);  
clear();
console.log(`isEmpty: ${isEmpty()}`); 

