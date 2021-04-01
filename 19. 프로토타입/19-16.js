const obj = {};

const add = function (a, b) { return a + b; };

const arr = [1, 2, 3];

const regexp = /is/ig;
console.log(obj.constructor === Object); // true
// 객체 리터럴로 객체를 생성했지만 constructor 프로퍼티가 Object 생성자 함수를 가리키고 있다.