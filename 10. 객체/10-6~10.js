var obj = {};
var key = 'hello';

obj[key] = 'world';

console.log(obj);

var foo = {
    '': ''
    // 빈 문자열도 프로퍼티 키로 사용할 수 있으나 의미가 없다 
};
console.log(foo);

var foo2 = {
    0: 1,
    1: 2,
    2: 3
};
console.log(foo2);

var foo3 = {
    // 예약어를 프로퍼티키로 사용해도 상관없으나, 오류를 발생시킬 여지가 있다.
    var: '',
    function: ''
};
console.log(foo3);

var foo4 = {
    name: 'So',
    name: 'Jaehoon'
    // 이미존재하는 프로퍼티 키를 중복선언하면 나중에선언한 것으로 덮어씌워진다,
    // 에러가 발생하지 않는다.
};
console.log(foo4);