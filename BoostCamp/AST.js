/* 
Abstract Syntax Tree : 추상 구문 트리
구문에서 나타나는 모든 정보를 세세히 표현하진 않는다.
1. Lexical Analysis (어휘 분석): 코드 문자열을 토큰으로 나눔
2. Parsing (구문 분석): 토큰을 기반으로 AST(Abstract Syntax Tree)을 생성
3. Semantic Analysis (의미 분석): 변수 타입, 정의 여부 등의 의미 체크
4. Intermediate Code Generation (중간 코드 생성): AST를 IR(Intermediate Representation)로 변환
5. Optimization (최적화): 코드 성능 개선
6. Code Generation (코드 생성): 최종 머신코드 또는 바이트코드 출력
https://astexplorer.net/
*/
// var a = new A.init();
// JS 객체 표현
const ast = {
  type: "VarDeclaration",
  identifier: "a",  //변수 이름
  value: {
    type: "NewExpression",
    class: "A", //클래스 이름
    methodCall: {
      type: "CallExpression", //메서드 호출
      method: "init",   
      args: []
    }
  }
}
function traverse(node) {
  switch(node.type) {
    case "VarDeclaration":
      console.log(node.identifier);
      traverse(node.value); //value 탐색
      break;
    case "NewExpression":
      console.log(node.class);
      traverse(node.methodCall);    //init 함수 호출 부분 탐색
      break;
    case "CallExpression":
      console.log(node.method);
      break;
  }
}

traverse(ast);