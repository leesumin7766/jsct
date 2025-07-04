/* 문제 분석
상태 전이 다이어그램 코드로 표시
IDLE 시작
상태값 : 타원
화살표 : 이벤트값(요청, 응답, timeout)
변환 못하는 이벤트 무시
상태, 이벤트 값 상수
비교문 직접 비교 x, FROM - TO 상태 데이터 구조 설계
*/
// 상태
const STATES = {
    IDLE: "IDLE",
    INVITED: "INVITED",
    ACCEPTED: "ACCEPTED",
    AUTH_REQUESTED: "AUTH REQUESTED",
    REDIRECTING: "REDIRECTING",
    CANCELLING: "CANCELLING",
    FAILED: "FAILED",
    REDIRECTED: "REDIRECTED",
    CANCELLED: "CANCELLED",
    CLOSING: "CLOSING",
    TERMINATED: "TERMINATED",
    ESTABLISHED: "ESTABLISHED",
}
//이벤트
const EVENTS = {
    INVITE: "INVITE", 
    ACK: "ACK",
    BYE: "BYE",
    CANCEL: "CANCEL",
    TIMEOUT: "<timeout>",
}
// 상태 전의
const TRANSITIONS = [
  { from: "IDLE", event: "INVITE", to: "INVITED" },
  { from: "INVITED", event: "CANCEL", to: "CANCELLING" },
  { from: "CANCELLING", event: "200(CANCEL)", to: "CANCELLED" },
  { from: "CANCELLED", event: "487", to: "FAILED" },
  { from: "FAILED", event: "ACK", to: "TERMINATED" },
  { from: "INVITED", event: "180", to: "ACCEPTED" },
  { from: "ACCEPTED", event: "200", to: "ESTABLISHED" },
  { from: "ESTABLISHED", event: "BYE", to: "CLOSING" },
  { from: "CLOSING", event: "200(BYE)", to: "TERMINATED" },
  { from: "INVITED", event: "407", to: "AUTH REQUESTED" },
  { from: "AUTH REQUESTED", event: "ACK", to: "INVITED" },
  { from: "INVITED", event: "301", to: "REDIRECTING" },
  { from: "REDIRECTING", event: "ACK", to: "REDIRECTED" },
  { from: "REDIRECTED", event: "<timeout>", to: "TERMINATED" },
  { from: "INVITED", event: "404", to: "FAILED" },
  { from: "FAILED", event: "<timeout>", to: "TERMINATED" },
];

function path(events) {
    const answer = [];
    let now = "IDLE";

    for (const i of events) {
        let next = TRANSITIONS.find(
            (t) => t.from === now && t.event === i
        );

        if (next) {
            now = next.to;
            answer.push(now);
        }
    }

    return answer;
}

console.log(path(["INVITE", "CANCEL", "200(CANCEL)", "487", "ACK"]));
console.log(path(["INVITE", "180", "200", "ACK", "BYE", "200(BYE)"]));
console.log(path(["INVITE", "407", "ACK", "301", "ACK", "<timeout>"]));
console.log(path(["INVITE", "404", "ACK", "<timeout>"]));