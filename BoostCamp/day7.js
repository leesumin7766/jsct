// 문제 풀이 부분
function match(param0) {
    const answer = new Map();
    for (i of param0) {
        const files = i.split('/').pop(); 
        const newFiles = files.replace(/_v[1-9]/, ''); 
        answer.set(newFiles, (answer.get(newFiles) || 0)+ 1);
    }

    const result = new Map();
    for (let [j, k] of answer) { 
        if (k >= 2) {
            result.set(j,k);
        }
    }
    return result;
}

// 데이터 입력/출력 부분
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
	const fileArray = inputs[0].split(',');
	const answer = match(fileArray);
        if (answer.size == 0) {
             console.log("!EMPTY");
             rl.close();
             return;
        }
	for (const [key, value] of answer){
		console.log(key+"="+value);
	}
	rl.close();
});
