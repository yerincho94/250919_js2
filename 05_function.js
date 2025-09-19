//함수 function
//상자 함 / 숫자 수 -> 상자 형태로 표현한 수
//input -> box -> output
// 입력값 -> (  ) -> 출력값

//이미 정의되어 있는 특정한 실행의 묶음
// 프로시져(Procedure) -> return값이 일반적으로 없음 즉, 값으로 취급 X, 변수에 할당할 수 있음
// 함수 (Function) -> 일반적으로는 할당이 가능함. (불가능한 경우도 있음)
//              -> js는 100% 가능(일급 객체 취급)

//function 함수명() {}
function myFun() {
  //함수 선언식
  console.log("Hello myFun");
}
// myFun(); //함수 호출식
// myFun();

// for (let i = 0; i < 5; i++) {
//   //   myFun();
// }

// if (Math.random() > 0.5) {
//   myFun();
// }

function sayHello() {
  //함수명에 의미를 줘서 알아보기 쉽게
  console.log("안녕하세요!!");
}

sayHello();

//함수, 입력값, 출력값
function login1() {
  console.log("로그인했습니다!");
}

login1(); //함수명() -> () 호출
login1; //변수명 취급. 함수라는 값

//매게변수 : 입력값 받음
function login2(id) {
  //{} 안에만 생명주기(유지가 되는)변수
  // console.log(id + "가 로그인 했습니다.");
  // console.log(id, "로그인 했습니다.");
  console.log(`${id}가 로그인 했습니다.`); //`${변수명}`
}
login2("yerin"); // "yerin" : 인자(arguments), id : 매개변수(parameter)

function login3(id, pw) {
  console.log("----- login3 -------");
  if (pw) {
    // pw == true ? --> undefined, "" 문자열이 아니어야함
    console.log(`${id}가 로그인 했습니다.`);
  } else {
    console.log("로그인을 실패했습니다.");
  }
}
login3("yerin", "");
login3("yerin", "pw");
//매개변수 자리가 2개인데 1개만 입력하면 나머지 자리 1개는 뭐가 입력될까요? --> undefined
login3("yerin");
login2(); // 적게 넣었을땐 undefined
login2(1, 2, 3, 4, 5, 6); // 더 넣으면 추가된 매개변수는 무시된다.

//성공/실패 여부를 boolean타입으로 알려주고 싶을때 --> return사용
function login4(id, pw) {
  //id : admin , pw : pass가 통과
  if (id == "admin" && pw == "pass") {
    return true;
  }
  /**
    함수의 경우에는 return을 만나면 마치 break나 continue 처럼 작업 종료된다.
    break 하고 continue랑 다른 점은 :
        * break랑 continue는 해당 '블록'이 종료되는 거고,
        * return은 해당 '함수'가 종료된다.
   */
  return false;
}

const loginResult = login4("admin", "pass");

if (loginResult) {
  console.log("로그인 성공");
} else {
  console.log("로그인 실패");
}

// 호이스팅 예고(?)
awesomeFun(); // (선언전에?) 호출을 한다
// 미리 HTML에 javascript 관련된 내용을 작성을 하고
// -> 나중에 javascript에서 기술하는 경우가 많다보니까...
// javscript의 함수나 변수들은 var, function으로 만들어지는 대부분의 '선언'되는 것들은
// 문제가 일어나지 않도록 -> 최상단에 불러서 '미리' 선언을 해놓는 '호이스팅'
// -> 방어적 코딩의 일환으로 이 호이스팅을 막거나 지양하는 코딩을 배울 예정 (예: 함수 표현식.)

function awesomeFun() {
  console.log("멋진 기능!");
} // 선언을 하고

awesomeFun(); // 호출을 한다
