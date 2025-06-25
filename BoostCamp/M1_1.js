function positivemove(position) {
    const positive = { // 올라가는 사다리 
        4 : 14, 8 : 30, 21 : 63, 28 : 76, 50 : 67, 71 : 92, 80 : 99
    }
    return positive[position] || position;
}
function negativemove(position) { //뱀사다리는 뒤로 가므로 negative
    const negative = {
        32 : 10, 36 : 6, 48 : 26, 62 : 18, 88 : 24, 95: 56 , 97 : 78
    }
    return negative[position] || position;
}
function nextPosition(current, dice) {
    let next = current + dice; // next는 바뀌므로 let 변수로 변경
    next = positivemove(next) // 함수 적용
    next = negativemove(next) // 함수 적용
    return next;
}

let position = 1;
let diceRolls = [6, 1, 5, 4, 4, 1, 4, 3]; // 여러 번의 주사위 굴림 결과
for (let i = 0; i < diceRolls.length; i++) { // 주사위 굴린 횟수만큼 i 반복
    let dice = diceRolls[i];
    let next = nextPosition(position, dice);
    console.log(`DiceRoll ${i + 1}: From ${position}, Dice: ${dice} → To ${next}`);
    position = next;
}