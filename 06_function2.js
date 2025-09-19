// 함수 표현식
/**
    변수에 함수를 넣는다.
 */
// func(); //ReferenceError: Cannot access 'func' before initialization
// <- 05_function.js에서는 호출이 됐었는데, const으로 인해서 해당 위치에서는 더 이상 호출이 안된다.
const func = function () {
  console.log("function 호출!");
};
func(); //호출

//화살표 함수
const arrowFunction = () => {};
//function 키워드 생략
// (파라미터) => {본문}
// 자바의 경우 : (패러미터) -> {본문}
// 파이썬의 경우 : lambda : ...

//매개변수가 1개인 경우 --> 괄호() 생략 가능
//const parameter1 = (a) => {};

//값을 바로 return하는 경우
const f = () => 1 + 1; // {} 중괄호를 생략 가능
const f2 = () => {
  return 1 + 1;
}; //f, f2는 같은 구문 --> return 값을 바깥으로 출력
//      -> 별도로 복잡한 다른 구문 없이 연결되는 형태로 return만 존재한다면 생략하고 바로 해당 구문만 {}와 return 생략하고 작성가능.

console.log("-------------------");

//add 기능 여러가지로 구현
const result1 = add1(18, 30); //호이스팅 --> 본문까지 위로 올라가기 때문에 여기에다가 사용가능함.

function add1(a, b) {
  return a + b;
}
console.log("result1: ", result1);

const add2 = function (a, b) {
  return a + b;
};
const result2 = add2(18, 30);
console.log("result2: ", result2);

//화살표 함수
const add3 = (a, b) => {
  return a + b;
};
const result3 = add3(18, 30);
console.log("result3: ", result3);

const add4 = (a, b) => a + b;
const result4 = add4(18, 30);
console.log("result4: ", result4);
