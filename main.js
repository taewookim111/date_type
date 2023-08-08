/*
값이란?
값은 식(표현식)이 평가되어 생성된 결과를 말합니다
=평가가 가능해야 값이 된다
따라서 모든 값은 데이터 타입을 가지며, 메모리에 2진수로 저장된다
메모리에 저장된 값은 데이터 타입에 따라 다르게 해석이 된다
예) 0100 0001 을 숫자타입으로 해석하면 65입니다
하지만 문자로 해석하면 대문자 A가 됩니다 
평가란?
식을 해석해서 값을 생성하거나 참조하는 것을 말합니다
==리터럴이란?
사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해서
값을 생성하는 표기법 전체를 말합니다
예) 정수 리터럴 1000, 문자 리터럴 "HELLO"
==표현식이란?
값으로 평가될 수 있는 문, 즉 표현식이 평가가 되면 결과로
새로운 값이나 기존값을 참조하여야 하며, 위의 리터럴도 값으로 평가가
되기 때문에 리터럴도 표현식입니다
표현식에는 리터럴, 식별자, 연산자, 함수 등 값으로 평가될 수 있는
모든 것들이 표현식입니다

1 + 2 = 3
1 + 2는 표현식이며 평가가 되서 값 3을 가질 수 있습니다
따라서 1 + 2는 3과 같은것 즉 동치입니다
표현식은 값처럼 사용할 수 있다는 뜻이며,
문법적으로 값의 위치에 표현식이 올 수 있다는 것입니다

예) let scole = 50 + 50; 혹은 let x = 1 + 2;
이처럼 값이 올 수 있는 자리에 표현식을 쓸 수 있습니다

문(statement) - 프로그래밍을 구성하는 기본단위이자 최소 실행단위
문을 명령문이라고도 부르며, 문은 즉 컴퓨터에게 개발자가 내리는 명령
문이 모여서 프로그램이되고, 문을 작성하고 순서에 맞게 나열하는 행위
그것을 프로그래밍이라고 합니다
문은 토큰으로 구성되며, 토큰은 문법적인 의미로서, 문을 문법적으로
나누었을때 더 나눌 수 없는 최소의 단위를 말합니다
예) var sum = 1 + 1; 이 문에서 토큰은 몇개인가?

1. 원시형 자료(primitive type)       
특징) 특정 값이 메모리에 바로 저장된다
값만 저장되는 것으로 따라서 변경이 불가능한 값이다
변수에 할당 시 실제 값이 저장되고, 복사하게 되면
변수에 담은 원시 값은 실제의 값이 복사되어 전달된다

종류 1 : 문자열(string)
문자열의 표현은 '반드시' '', "", ``(작은 따옴표, 큰 따옴표, 백틱(억음부호))로 감싸서 표현합니다
다른 타입과 달리 문자열을 따옴표 등으로 감싸는 이유는
키워드, 예약어, 식별자 등 다른 값들과 구분하기 위해서 사용합니다
다만 억음부호는 ES6 이후 사용가능

let str = "안녕"; //문자열로 인식하고 있음
let ste = 안녕; // 문자열이 아닌 식별자로 인식하고 있음

템플릿 리터럴
- es6부터 생긴 새로운 문자열 표기법
사용방법은 '', "" 대신에 ``을 사용하는 방법
즉 이 말은 따옴표 등으로 표현하기에 어려운 대상을 표현한다는 의미

1. 멀티라인 문자열
일반적인 문자열 내에서는 사용할 수 없는 줄바꿈(개행),
또는 허용되지 않는 표현(""안에 '하나만 쓰거나 """"이런표현)을
사용할 수 있도록 /(백슬러시)로 시작하는
이스케이프 시퀀스를 사용합니다
console.log("Hello,/n World"); 개행, 줄바꿈
console.log("I/'m a programmer");
""안에 '를 하나만 사용할 수 있음
console.log("She said, /"Hello!/""); 쌍따옴표를 독립적으로 인식
console.log("unicode : /u00A9"); 유니코드 문자를 사용할 수도 있다
console.log("Path: C://folder//file.txt")
백슬러시 자체를 사용도 가능


2. 표현식의 삽입

let sung = "Kim";
let name = " Tae Woo"

es5
console.log('My Name is ' + sung + "" + name + ".")

//es6의 템플릿 리터럴 표현
console.log(`My Name is ${sung}${name}.`)
// 반드시 표현식 삽입시 전체를 ``(백틱)을 사용한 템플릿 리터럴을 사용
//하여 감싸고 표현식을 ${}으로 감싸 변수로 인식하도록 합니다
//이때 표현식의 평가값이 문자열이 아니더라도 문자열 타입으로
//강제 형변환이 일어납니다

종류 2 : 숫자(number)
자바스크립트는 다른 언어와 달리 숫자타입이 하나입니다
es에 따르면 숫자타입에 값은 배정밀도 64비트 부동소수점 형식을 따라
모든 수를 실수로만 표현가능합니다
이 말은 정수 등 다른 수의 개념을 표현하기 위한 데이터 타입이 없다
정수, 실수, 2진수, 8진수, 16진수 등을 모두 10진수로 해석해버림

부동소수점 형식이란?
정수를 나타내는 방법인 고정소수점 데이터 형식의 반대로
컴퓨터 내부에서 실수를 표현하는 데이터 형식입니다

따라서 부동소수점 형식으로 계산하는 자바스크립트는
정밀한 숫자의 결과를 얻을 수 없으므로 해당 영역에서는 사용할 수 없다

종류 3 : 불린형(boolean)
true와 false만 존재
true가 1 false 가 0입니다

종류 4: undefined - 변수를 선언하고 할당하지 않으면
암묵적으로 부여되는 값(비어있는데 에러상황)

종류 5 : null - 값이 비어있는것, 하지만 에러상황이 아니라
명시적(일부러)으로 값을 비워둔 경우 - 즉 메모리는 만들어야 하는데
값은 지금 없거나, 넣을 수 없는 상황이라 일부러 비워두는 경우 넣는 값

let abc;
console.log(abc);

let abcd = null;
console.log(abcd);

종류 6 : 심벌타입
 - es6에서 추가된 7번째 타입입니다
 변경이 불가능한 원시타입의 다른 값과 중복되지 않는 유일무이한 값
 예) 주민등록번호 뒷자리
심벌을 제외한 나머지 원시형의 자료값은 리터럴을 이용해서 생성합니다
심벌은 symbol이라는 함수를 통해서 생성해야 합니다



2. 참조형 자료(reference type)
특징) 값의 참조값, 주소값만 메모리에 저장되고 실제값은 다른 곳에 있음
즉 변수의 메모리 공간에 원시형자료 처럼 값이 들어있는 것이 아니라
참조하고 있는 주소의 값이 들어있음 따라서 변경이 가능한 값
따라서 변수에 할당시 (메모리)주소값만 저장이 되고 복사하게 되면
변수에 담은 참조형 자료는 실제가 아닌 주소가 복사되어 전달됩니다

종류 1 배열
같은 성격의 일련의 데이터들을 그룹형태로 저장한 것
인덱스(순번)으로 검색합니다

종류 2 객체

다른 성격의 일련의 데이터들을 그룹형태로 저장한 것으로
프로퍼티로 검색합니다
프로퍼티란?
객체 내에 있는 데이터(나 함수를)를 이름(key) - 값의 쌍으로 표현하는
그것을 프로퍼티라고 합니다 

let student1 = {
    name: "김태우",
    age: 19,
    address: "부천",
    isMale: true
};
console.log(student1.address);
console.log(student1);

console.log(window);

형 변환(타입 변환)
데이터 타입을 다른 데이터 타입으로 변환하는 과정을 말합니다
자바스크립트는 데이터 타입이 런타임중에 결정되기 때문에
잦은 타입간의 형변환이 일어납니다

1. 암시적 형변환
자바스크립트 엔진이 런타임중 자동으로 데이터 타입을 변환하여
연산해버리는 것을 의미
즉 개발자와 상관없이 처리하는 것으로 개발자의 의도와 다른 결과를
나타내기도 합니다

2. 명시적 형변환
개발자가 직접 데이터 타입을 변환하는 과정을 의미합니다

let numStr = "123";
console.log(typeof numStr);
let numNum = Number(numStr);
console.log(numNum);
console.log(typeof numNum);

let boolStr = "true";
let bool = Boolean(boolStr);
console.log(bool);
console.log(typeof bool);

*/

let numStr = "123";
console.log(typeof numStr);
let numNum = Number(numStr);
console.log(numNum);
console.log(typeof numNum);

let boolStr = "true";
let bool = Boolean(boolStr);
console.log(bool);
console.log(typeof bool);

let num1 = "2";
let num2 = 3;
let num3 = 5;

let result1 = num1 + num2;
let result2 = num2 + num3;
console.log(result1);
console.log(result2);
console.log(typeof result1);
console.log(typeof result2);

let result3 = num1 + num2 + num3;
let result4 = num3 + num2 + num1;
console.log(result3);
console.log(result4);
console.log(typeof result3);
console.log(typeof result4);

let student1 = {
    name: "김태우",
    age: 19,
    address: "부천",
    isMale: true
};
console.log(student1.address);
console.log(student1);

console.log(window);
//성격이 다른 데이터

let colors = ["red", "yellow", "brown", "blue"];
console.log(colors[3]);
console.log(colors[8]); //undefined

let sung = "Kim";
let name = " Tae Woo"

console.log('My Name is ' + sung + "" + name + ".")

//es5
console.log("Hello,/n World"); //개행, 줄바꿈
console.log("I/'m a programmer");

//es6의 템플릿 리터럴 표현
console.log(`My Name is ${sung}${name}.`)
// 반드시 표현식 삽입시 전체를 ``(백틱)을 사용한 템플릿 리터럴을 사용
//하여 감싸고 표현식을 ${}으로 감싸 변수로 인식하도록 합니다
//이때 표현식의 평가값이 문자열이 아니더라도 문자열 타입으로
//강제 형변환이 일어납니다


let abc;
console.log(abc);

let abcd = null;
console.log(abcd);

let sum = 5;
sum = 11;



let str = "안녕";
let ste = 안녕;
