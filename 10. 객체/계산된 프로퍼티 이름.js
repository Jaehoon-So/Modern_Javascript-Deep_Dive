let prefix = `prop`;
let i = 0;

let obj = {};

obj[prefix + `-` + ++i] = i;
obj[prefix + `-` + ++i] = i;
obj[prefix + `-` + ++i] = i;

console.log(obj);

// 객체 리터럴 내부에서도 계산된 프로퍼티이름으로 프로퍼티키를 동적생성할 수 있다.

const prefix2 = `prop`;
let i2 = 0;

const obj2 = {
    [`${prefix2}-${++i}`]: i,
    [`${prefix2}-${++i}`]: i,
    [`${prefix2}-${++i}`]: i,
};

console.log(obj2);
