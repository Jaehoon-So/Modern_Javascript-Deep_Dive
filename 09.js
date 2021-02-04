/** 9-11 */
// if문이나 for문과 같은 제어문 또는 삼항조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓
// 으로 평가되어야 하는 표현식이다.
if('') console.log(1);
if(true) console.log(2);
if(0) console.log(3);
if('str') console.log(4);
if(null) console.log(5);

/** 9-12 */
if(!false) console.log(false + ' is falsy value');
if(!undefined) console.log(undefined + ' is falsy value');
if(!null) console.log(null + ' is falsy value');
if(!0) console.log(0 + ' is falsy value');
if(!NaN) console.log(NaN + ' is falsy value');
if(!'') console.log('' + ' is falsy value');

/** 9-13 */
function isFalsy(v){
    return !v;
}

function isTruthy(v){
    return !!v;
}

isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

isTruthy(true);
isTruthy('0');
isTruthy({});
isTruthy([]);

/**9-14 */
console.log((1).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());
console.log((false).toString() );

/**9-15 */
// 1. Number 생성자 함수를 new연산자 없이 호출하는 방법
console.log(Number('0') ); // 0
console.log(Number('-1') ); // -1
console.log(Number('10.53') ); // 10.53
console.log(Number(true) ); // 1
console.log(Number(false) ); // 0

// 2.parseInt, parseFloat 함수로는 문자열만 숫자 타입으로 변경 가능하다.
console.log(parseInt('0') );
console.log(parseInt('-1') );
console.log(parseInt('10.53') );

// 3. + 단항 산술 연산자를 이용하는 방벙 '문자열타입' => 숫자타입
console.log(+'0');
console.log(+'-1');
console.log(+'10.53');
console.log(+true);
console.log(+false);

/** 9-20 */
var done = true;
var message = '';

if(done) message = '완료';

message = done && '완료';
console.log(message);

/** 9-21 */
var done2 = false;
var message = '';

if(!done) message = '미완료';

message = done || '미완료';
console.log(message);

/** 9-22 */
var done = true;
var message = '';
qaaaa
if(done) message = '완료';
else    message = '미완료';
console.log(message);

message = done ? '완료' : '미완료';
console.log(message);

