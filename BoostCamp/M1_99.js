// 윷에 따른 칸 이동
const scores = {
    D: 1,
    K: 2,
    G: 3,
    U: 4,
    M: 5,
};

// 경로 맵 정의
// 분기점으로 꺽이지 않고 직진
const graph = {
    Z: "ZW1",
    ZW1: "ZW2",
    ZW2: "ZW3",
    ZW3: "ZW4",
    ZW4: "ZW5",
    ZW5: "WX1", // 직진용
    WX1: "WX2",
    WX2: "WX3",
    WX3: "WX4",
    WX4: "WX5",
    WX5: "XY1", // 직진
    XY1: "XY2",
    XY2: "XY3",
    XY3: "XY4",
    XY5: "YZ1",
    YZ1: "YZ2",
    YZ2: "YZ3",
    YZ3: "YZ4",
    YZ4: "Z",

    // 분기점
    WV1: "WV2",
    WV1: "WV2",
    WV2: "WV3",

    VZ1: "VZ2",
    VZ2: "Z",
};

// 도착했을 때만 꺾이는 분기점
const forkRedirect = {
    ZW5: "WV1",
    WX5: "XV1",
    WV3: "VZ1",
};

function play(participantsHorses) {
    if (!validation(participantsHorses)) {
        return ["ERROR"];
    }
    let scoresMap = [];

    // 한명씩 이동
    for (let participant of participantsHorses) {
        scoresMap.push(moveByPerson(participant));
    }

    return scoresMap.map(([score, location]) => `${score}, ${location}`);
}

function validation(participantsHorses) {
    // 문자열 배열 2개이상 최대10개까지 포함
    if (participantsHorses.length < 2 || participantsHorses.length > 10) {
        return false;
    }

    // 참가자 한명씩 개수 같은지 체크
    const len = participantsHorses[0].length;
    return participantsHorses.every((p) => p.length === len);
}

// 한명씩 이동
function moveByPerson(participant) {
    let currentLocation = "Z";
    let currentScore = 0;

    for (let yuk of participant) {
        // D, G, D 윷
        // 점수 확인
        let moveScore = scores[yuk];
        // 없는 윷이있는지 체크
        if (!moveScore) return [currentScore, "ERR"];

        // 다음 위치 찾기
        let nextLocation = findNextLocation(currentLocation, moveScore);

        if (nextLocation === "Z") {
            currentScore++;
        }
        if (nextLocation === "ERR") {
            return [currentScore, "ERR"];
        }
        currentLocation = nextLocation;
    }

    return [currentScore, currentLocation === "Z" ? "Z" : currentLocation];
}

function findNextLocation(currentLocation, moveScore) {
    let position = currentLocation;

    for (let i = 0; i < moveScore; i++) {
        // 시작할때 분기점이 있다면 꺾기
        if (i === 0 && forkRedirect[position]) {
            position = forkRedirect[position];
        } else {
            const nexts = graph[position];
            if (!nexts) return "ERR";
            position = nexts; // 항상 첫 번째 경로 사용
        }
    }

    return position;
}

console.log(play(["DG"])); // ["ERROR"]
console.log(play(["DG", "D"])); // ["ERROR"]
console.log(play(["DGD", "MGG"])); // ["0, ZW5", "1, Z"]
console.log(play(["DGGG", "MGGA"])); // ["0, WX5", "1, ERR"]
console.log(play(["DGDGGK", "DDDDDK", "KKKKKD"])); // ["1, ZW2", "0, WV2, "0, XV1"]