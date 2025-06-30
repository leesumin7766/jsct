// 문제 분석
// 1. 가장 먼저 입력 % 3 !== 0 이면 0점(유효성 검사)
// 2. 각 배열 10, 30, 50, 80 배치
// 3. A,B,C 10장씩 배분(10, 30, 50, 80 제외)
// 4. A, B 조건에 맞게 배열에 추가
// 5. 조건 못맞추면 A에 맞춰서 배열 비우고 개수만큼 벌점
// 6. 배열 4개 다 비워지면 게임 종료 / 입력값이 없으면 게임 종료
// 7. 종료 때 A,B,C 벌점 리턴
function play(param0) {
    // 1.
    if (param0.length % 3 !== 0) {
        return new Map([["A", 0], ["B", 0], ["C", 0]]);
    }
    // 2.
    arr = [[10], [30], [50], [80]];
    answer = [0, 0, 0] ;
    players = { A:0, B:1, C : 2} ; // 정확한 인덱스 값에 더하기 위해 추가
    // 턴 구성, 턴 객체 배열
    for (i = 0; i < param0.length; i += 3) {
        turn = [
            { player: 'A', card: param0[i]},
            { player: 'B', card: param0[i + 1]},
            { player: 'C', card: param0[i + 2]}
        ];
        // 정렬
        turn.sort((x, y) => x.card - y.card);
        // 4.
        for (let {player, card} of turn) {
            let target = -1;
            // infinity 상수 설명 https://www.w3schools.com/Jsref/jsref_infinity.asp
            // minDiff : 차이 작은 값 저장 변수, 비교 초기화 하기 위해 Infinity 설정 법
            let minDiff = Infinity;
            let max = -1

            for (let j = 0; j < arr.length; j++) {
                if (arr[j].length === 0)
                    continue;
                let last = arr[j][arr[j].length - 1] ; // 기준 숫자
                let diff = Math.abs(last - card); // 숫자 차이 계산
                // A 만족 target
                if (
                    diff < minDiff || (diff === minDiff && last > max)
                ) {
                    minDiff = diff;
                    max = last;
                    target = j
                }
            }
            // 6. 배열이 비어있을 시
            if (target === -1) {
                return new Map([
                    ["A", answer[0]],
                    ["B", answer[1]],
                    ["C", answer[2]]
                ]);
            }
            let targetarr =arr[target];
            let last = targetarr[targetarr.length -1];
            // B
            if (card < last) {
                targetarr.push(card);
            } else { // 벌점
                // players 추가 , 배열에 직접 덧셈 x
                answer[players[player]] += targetarr.length;
                arr[target] = [];
            }

        }
    }
    // 7.
    return new Map([
        ["A", answer[0]],
        ["B", answer[1]],
        ["C", answer[2]]
    ]);
}

console.log(play([21,9,4]))
console.log(play([55,8,29,13,7,61]))
