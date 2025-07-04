/*
문제 분석
Z 시작
W, V, X에 도착하면 짧은 쪽
말은 같은 위치에 있을 수 있음
2명이상이라 가정, 입력값 배열
*/
// 위치값 : 출발도착숫자
const POINT = {
    ZW: ["Z", "ZW1", "ZW2", "ZW3", "ZW4", "ZW5"],
    WV: ["WV0", "WV1", "WV2", "WV3"],
    XV: ["XV0", "XV1", "XV2", "XV3"],
    VZ: ["VZ0", "VZ1", "VZ2", "VZ3"],
    WX: ["WX1", "WX2", "WX3", "WX4", "WX5"],
    XY: ["XY1", "XY2", "XY3", "XY4", "XY5"],
    YZ: ["YZ1", "YZ2", "YZ3", "YZ4", "YZ5"],
};

const SPLIT_POINTS = {
  ZW5: ["WV", "VZ", "ZW", "WX", "XY", "YZ"],
  WV3: ["VZ", "ZW", "WX", "XY", "YZ"],
  XV3: ["VZ", "ZW", "WX", "XY", "YZ"],
  WX5: ["XV", "VZ", "ZW", "WX", "XY", "YZ"],
};

const MOVE = { D: 1, K: 2, G: 3, U: 4, M: 5 };
const SEQUENCE = ["ZW", "WX", "XY", "YZ"]; // 연결 순서 => 기본 경로로 변경
//호출 함수
// 보드를 Z → W → V → WX → XY → YZ 순으로 연결
function getPath(route) {
    const path = [];
    for (let section of route) {
        path.push(...POINT[section]);
    }
    return path;
}
// getPath에서 배열 받아서 이동
// 분기점이면 SPLIT_POINT
// 넘어가면 Z
    //출력이 제대로 작동하지 않음. 인덱스를 -1로 시작하는 방법으로 변경
function movePosition(pos, move, route) {
    const path = getPath(route);
    let index = pos === "Z" ? 0 : path.indexOf(pos);
    if (index === -1) return { pos: "ERR", route, score: 0 };

    let score = 0;
    for (let i = 0; i < move; i++) {
        index++;
        if (index >= path.length) {
            return { pos: "Z", route, score: 1 }; // 도착점(Z) 넘어서면 1점
        }
    }

    let nextPos = path[index];

    // 분기점일 경우 경로 전환
    if (SPLIT_POINTS.hasOwnProperty(nextPos)) {
        const newRoute = SPLIT_POINTS[nextPos];
        route = [...newRoute];
        nextPos = POINT[route[0]][1]; // 진입 위치 (0번 제외)
    }

    return { pos: nextPos, route, score };
}
// 문자열 돌면서 칸 수 이동
// Z 도착 or 넘으면 점수 
// ERR => "0, ERR"
function play(playerInput) {
    let pos = "Z";
    let route = ["ZW", "WX", "XY", "YZ"];
    let score = 0;

    for (let ch of playerInput) {
        if (!MOVE[ch]) return `0, ERR`;

        const move = MOVE[ch];
        const result = movePosition(pos, move, route);

        if (result.pos === "ERR") return `0, ERR`;

        pos = result.pos;
        route = result.route;
        score += result.score;
    }

    return `${score}, ${pos}`;
}

function score(yut) {
    if (yut.length < 2 || yut.length > 10) return ["ERROR"];
    const len = yut[0].length;
    if (!yut.every(v => v.length === len)) return ["ERROR"];
    return yut.map(play);
}

console.log(score(["DG", "D"]))
console.log(score(["DGD", "MGG"]))
console.log(score(["DGGG", "MGGA"]))
console.log(score(["DGDGGK", "DDDDDK", "KKKKKD"]))