/* 문제 분석
data.model 파일을 읽어오기
각 오브젝트 파일 파싱
-vertex 목록
-triangle 목록
triangle x,y,z 길이 계산, 3D삼각형 면적 계산, x/y/z 중 긴 변 또는 가장 넓은 삼각형
결과 출력
5초간 progress bar
*/
// M1_10.js
const fs = require("fs/promises");
const path = require("path");

// ProgressBar
function showProgressBar(duration = 5000) {
    const totalSteps = 20;
    let step = 0;
    const interval = duration / totalSteps;

    const timer = setInterval(() => {
        step++;
        const filled = "█".repeat(step);
        const empty = "░".repeat(totalSteps - step);
        const percent = Math.floor((step / totalSteps) * 100);
        process.stdout.write(`\r${filled}${empty} ${percent}%`);

        if (step === totalSteps) {
            clearInterval(timer);
            console.log("\n✅ 분석 완료\n");
        }
    }, interval);
}

// 📦 모델 파일 파싱
function parseModelFile(content) {
    const [vertexSection, triangleSection] = content.split("\n\n");
    const vertexLines = vertexSection.split("\n").filter(l => l && !l.startsWith("#"));
    const triangleLines = triangleSection.split("\n").filter(l => l && !l.startsWith("#"));

    const vertices = vertexLines.map(line => {
        const x = parseFloat(line.match(/x="([^"]+)"/)?.[1]);
        const y = parseFloat(line.match(/y="([^"]+)"/)?.[1]);
        const z = parseFloat(line.match(/z="([^"]+)"/)?.[1]);
        return { x, y, z };
    });

    const triangles = triangleLines.map(line => {
        const v1 = parseInt(line.match(/v1="([^"]+)"/)?.[1]);
        const v2 = parseInt(line.match(/v2="([^"]+)"/)?.[1]);
        const v3 = parseInt(line.match(/v3="([^"]+)"/)?.[1]);
        return { v1, v2, v3 };
    });

    return { vertices, triangles };
}

// ➕ 길이 계산
function getMaxDimensionLength(tri, vertices) {
    const v = [vertices[tri.v1], vertices[tri.v2], vertices[tri.v3]];
    const xs = v.map(p => p.x);
    const ys = v.map(p => p.y);
    const zs = v.map(p => p.z);

    return {
        xLen: Math.abs(Math.max(...xs) - Math.min(...xs)),
        yLen: Math.abs(Math.max(...ys) - Math.min(...ys)),
        zLen: Math.abs(Math.max(...zs) - Math.min(...zs)),
    };
}

// ⛰️ 면적 계산
function getTriangleArea(tri, vertices) {
    const a = vertices[tri.v1];
    const b = vertices[tri.v2];
    const c = vertices[tri.v3];

    const ab = { x: b.x - a.x, y: b.y - a.y, z: b.z - a.z };
    const ac = { x: c.x - a.x, y: c.y - a.y, z: c.z - a.z };

    const cross = {
        x: ab.y * ac.z - ab.z * ac.y,
        y: ab.z * ac.x - ab.x * ac.z,
        z: ab.x * ac.y - ab.y * ac.x,
    };

    return 0.5 * Math.sqrt(cross.x ** 2 + cross.y ** 2 + cross.z ** 2);
}

// 📊 분석
function analyzeModel(vertices, triangles) {
    let maxX = { index: -1, length: 0 };
    let maxY = { index: -1, length: 0 };
    let maxZ = { index: -1, length: 0 };
    let maxArea = { index: -1, area: 0 };

    triangles.forEach((tri, idx) => {
        const { xLen, yLen, zLen } = getMaxDimensionLength(tri, vertices);
        const area = getTriangleArea(tri, vertices);

        if (xLen > maxX.length) maxX = { index: idx, length: xLen };
        if (yLen > maxY.length) maxY = { index: idx, length: yLen };
        if (zLen > maxZ.length) maxZ = { index: idx, length: zLen };
        if (area > maxArea.area) maxArea = { index: idx, area };
    });

    return {
        maxX: maxX.index,
        maxY: maxY.index,
        maxZ: maxZ.index,
        maxArea: maxArea.index,
    };
}
// 🎯 실행
async function main() {
    try {
        const filePath = path.resolve(__dirname, "1747822362626models/objects/A.model");
        const content = await fs.readFile(filePath, "utf-8");
        const { vertices, triangles } = parseModelFile(content);

        const result = analyzeModel(vertices, triangles);

        showProgressBar(5000);

        setTimeout(() => {
            console.log("📊 분석 결과:");
            console.log("🔴 X축 가장 긴 삼각형 index:", result.maxX);
            console.log("🟢 Y축 가장 긴 삼각형 index:", result.maxY);
            console.log("🔵 Z축 가장 긴 삼각형 index:", result.maxZ);
            console.log("⚫ 가장 넓은 면적의 삼각형 index:", result.maxArea);
        }, 5000);

    } catch (err) {
        console.error("❌ 오류 발생:", err.message);
    }
}


main();