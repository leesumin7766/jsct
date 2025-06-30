// 문제 분석
// 1. 가장 먼저 입력 % 3 !== 0 이면 0점(유효성 검사)
// 2. 각 배열 10, 30, 50, 80 배치
// 3. A,B,C 10장씩 배분(10, 30, 50, 80 제외)
// 4. A, B 조건에 맞게 배열에 추가
// 5. 조건 못맞추면 A에 맞춰서 배열 비우고 개수만큼 벌점
// 6. 배열 4개 다 비워지면 게임 종료 / 입력값이 없으면 게임 종료
// 7. 종료 때 A,B,C 벌점 리턴
function play(param0) {
    // 1. 입력 검증: 3의 배수가 아니면 무효
    if (param0.length % 3 !== 0) {
        return new Map([["A", 0], ["B", 0], ["C", 0]]);
    }

    // 2.
    const arr = [[10], [30], [50], [80]];
    const answer = [0, 0, 0]; // A, B, C 순
    const players = { A: 0, B: 1, C: 2 }; // 정확한 인덱스 값에 더하기 위해 추가
    // 턴 구성, 턴 객체 배열
    // 3. 3개씩 묶어서 턴 단위로 진행
    for (let i = 0; i < param0.length; i += 3) {
        const turn = [
            { player: 'A', card: param0[i] },
            { player: 'B', card: param0[i + 1] },
            { player: 'C', card: param0[i + 2] }
        ];

        // 정렬
        turn.sort((x, y) => x.card - y.card);

        // 5. 한 명씩 배열에 카드 추가 시도
        for (let { player, card } of turn) {
            let target = -1;
            // infinity 상수 설명 https://www.w3schools.com/Jsref/jsref_infinity.asp
            // minDiff : 차이 작은 값 저장 변수, 비교 초기화 하기 위해 Infinity 설정 법
            let minDiff = Infinity;
            let max = -1;

            // 조건 A: 가장 가까운 배열 찾기
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].length === 0) continue;
                const last = arr[j][arr[j].length - 1]; // 기준 숫자
                const diff = Math.abs(last - card); // 숫자 차이 계산
                if (diff < minDiff || (diff === minDiff && last > max)) {
                    minDiff = diff;
                    max = last;
                    target = j;
                }
            }

            // 조건: 배열이 모두 비어 target을 못찾는 경우 → 게임 종료
            if (target === -1) {
                return new Map([
                    ["A", answer[0]],
                    ["B", answer[1]],
                    ["C", answer[2]]
                ]);
            }

            const targetArr = arr[target];
            const last = targetArr[targetArr.length - 1];

            // 조건 B: 카드가 배열 마지막 숫자보다 작아야 함
            if (card < last) {
                targetArr.push(card); // 정상 추가
            } else {
                // 못 넣으면 벌점 + 배열 초기화
                // players 추가 , 배열에 직접 덧셈 x
                answer[players[player]] += targetArr.length;
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

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];
rl.on('line', (line) => {
    inputs.push(line);
    if (inputs.length === 1) {
        rl.close();
    }
});

rl.on('close', () => {
    const numArray = inputs[0].split(',').map(Number);
    const answer = play(numArray);
    for (const [key, value] of answer) {
        console.log(key + "=" + value);
    }
});