// 동결된 객체는 읽기만 가능하다.

const person = { name: 'So' };

console.log(Object.isFrozen(person) );

/** person객체를 동결된 객체로 만든다 */
Object.freeze(person);
console.log(Object.isFrozen);

console.log(Object.getOwnPropertyDescriptors(person) );

/** 프로퍼티 값 추가가 금지된다. */
person.age = 20;
console.log(person);

/** 프로퍼티 삭제가 금지된다. */
delete person.name;
console.log(person);

/** 프로퍼티 값 갱신이 금지된다. */
person.name = 'Jaehoon';
console.log(person);

/** 프로퍼티 어트리 뷰트 재정의가 금지된다. */
// Object.defineProperty(person, 'name', { configurable: true })

