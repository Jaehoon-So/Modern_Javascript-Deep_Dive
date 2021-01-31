// 문자열 연결 연산자
'1' + 2;
1 + '2';

//산술연산자
1 + 2;

//true는 1로 타입 변환된다.
1 + true;

//false 는 0으로 타입변환된다.
1 + false;

//null은 0으로 타입변환된다.
1 + null;

//undefined는 숫자로 타입변환되지 않는다.
+undefined
1 + undefined;

// 할당연산자
var x;
x = 10;
console.log(x); // 10

x += 5;
console.log(x);

x -= 5;
console.log(x);

x *= 5;
console.log(x);

x /= 5;
console.log(x);

x %= 5;
console.log(x);

var str = 'My name is ';

//문자열 연결 연산자
str += 'Lee';
console.log(str);

var x1;
// 할당문은 표현식인 문이다.
console.log(x1 = 10);

var a, b, c;
a = b = c = 0;
console.log(a, b, c);

// 동등비교 == 
5 == 5 //->true;

5 == '5' // -> true

// 일치비교 연산자 ===
5 === 5; // true
// 암묵적 타입변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === '5'; // false

// NaN은 자신과 일치하지 않는 유일한 값이다. 주의
NaN == NaN // false

// isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.

var x2 = 2, result;

if(x%2) result = '홀수';
else    result = '짝수';
console.log(result);

var x3 = 10;
var result2  = x3 % 2 ? '홀수' : '짝수';

console.log(result2);

// 논리합 || 연산자
true || true;
true || false;
false || true;
false || false;

// 논리곱 && 연산자
true && true;
true && false;
false && true;
false && false;

// 논리부정 ! 연산자
!true;
!false;