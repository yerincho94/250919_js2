// 배열(Array) <- 자료구조(Data Structure)
/**
    1. 동일한 타입인 0개 이상의 데이터의 묶음
    2. 인덱스(index)를 사용하여 순서를 참조할 수 있음
    3. 길이는 최초에 메모리에 배정하여 선언한 길이에 고정적임
    
    * js는 여기서 따라가는건 2번째 밖에 없음 ㅇㅅㅇ

    // js 배열 (JavaScript Array)
    1. 0개 이상의 데이터 묶음 (동일한 타입일 필요 없음)
    2. 인덱스(index)를 사용하여 순서를 참조할 수 있음
        -> 정확히는 : '숫자'로 되어 있는 키의 경우 인덱스로 분류되어 사용될 수 있음
    3. 길이는 유동적이며 심지어 외부에서 변화시킬 수 있는 값임.
 */

// 이제까지 데이터를 변수를 1개씩 표현함, 비슷한 역할을 하는 데이터를 묶어서.
// 1) 순서가 있는 경우 2) 순서가 없는 경우
// 배열(Array) : []
console.log([1, 2, 3, 4, 5]);

// 배열은 const로 변수 선언한다.
// 이유: 배열 자체를 재대입하지 않고(배열 자체 참조는 고정하고), 내부에 있는 요소(원소)들을 다시 변경하기 때문에 const로 선언한다.
const arr = [1, 3, 5, 7, 9];
console.log(arr);

//빈 배열
const emptyArr = [];
//boolean에서는 비어있으면 -> false

//일반적으로 데이터 다루기 -> C.R.U.D
/**
    Create -> 추가, 생성
    Read -> 조회, 불러오기
    Update -> 수정, 덮어씌우기
    Delete -> 삭제
 */

//배열.push(추가할 데이터)
const numArr = [1, 1, 1];
numArr.push(10); //(📌) 맨 끝에 추가됨
console.log("numArr :", numArr);

numArr.unshift(300); //맨 앞에 추가됨
console.log("numArr :", numArr);

//특정한 값을 읽어와주고 싶으면?
//배열[인덱스]
//numArr = [ 300, 1, 1, 1, 10 ]
//배열 -> 0부터 시작함 : [0] [1] ... [전체길이 -1]
console.log("numArr.length: ", numArr.length);
console.log("numArr[0]: ", numArr[0]); //배열명[인덱스]

//const로 해놓는건 실수로라도 재할당을 해서 전체적으로 덮어씌우는 걸 방지하기 위함
//react 등 상태관리에서 mutate 방지 -> property 변경을 일으키는걸 위해서 권장하는 것도 있음.

//Update (수정, 덮어씌우기)
numArr.splice(2, 0, 62); //2번째 인덱스에서 0개 삭제 후 64를 넣겠다.
console.log("numArr :", numArr);

console.log(numArr.slice(3, 5)); //끝점 포함 X

numArr[3] = 32;
console.log("numArr :", numArr);

//Delete (삭제)
console.log(numArr.pop());
console.log("numArr :", numArr);

console.log(numArr.shift()); //맨앞에 추가 unshift <-> 삭제 shift
console.log("numArr :", numArr);
//delete numArr[0]는 구멍(undefined)을 남기므로 권장하지 않음!!

//push
const arr2 = ["a", "b", "c", "d"];
console.log(arr2.length); //4
arr2.length = 1;
console.log(arr2.length); //1
console.log(arr2); //['a']

arr2.length = 4;
console.log(arr2.length); //4
console.log(arr2); //[ 'a', <3 empty items> ]

const arr3 = [];
arr3.length = 100;
console.log(arr3);

//js에서는 별도의 'clear'는 없는데, 그냥 length를 0으로 만들면 자리가 0으로 되면서 해당 데이터도 같이 지워져버림..
arr3.length = 0;
console.log(arr3[10]); //undefined : 에러로 안띄우움!!!!!!!!!!!
//그래서 검증해야하는 방법은 if문으로 계속 물어봐줘야함!!
