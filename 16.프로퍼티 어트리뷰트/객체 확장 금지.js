// 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
// Object.preventExtensions

const person = {
    name: 'So',
};

// person이라는 객체가 확장이 금지된 객체인지 확인한다.
console.log(Object.isExtensible(person) );

Object.preventExtensions(person);
console.log(Object.isExtensible(person) );

// 프로퍼티의 추가가 금지된다
person.age = 20; // 무시되고, strict mode에서는 금지된다.
console.log(person);

// 프로퍼티 추가는 금지되지만, 삭제는 가능하다.
delete person.name;
console.log(person);

// defineProperty를 이용한 프로퍼티 추가도 금지된다.
// Object.defineProperty(person, 'age', { value: 20 }) // TypeError