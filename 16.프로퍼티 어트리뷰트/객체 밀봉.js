// 밀봉된 객체는 읽기와 쓰기만 가능하다

const person = { name: 'Lee', };

console.log(Object.isSealed(person) );

Object.seal(person);
console.log(Object.isSealed(person) );

// configurable이 false임을 확인할 수 있다.
console.log(Object.getOwnPropertyDescriptors(person) );
// console.log(Object.getOwnPropertyDescriptor(person, 'name') );
/** descriptors 와 descriptor는 모든 프로퍼티를 나타낸다는 것과 명시해서 나타낸다는 것의 차이이다. */

person.age = 20; // 무시된다. strict mode에서는 에러가 발생한다.
console.log(person);

delete person.name;
console.log(person);

// 프로퍼티 값 갱신은 가능하다.
person.name = 'So';
console.log(person);


/** 프로퍼티 어트리뷰트 재정의가 금지된다. */
// Object.defineProperty(person, 'name', { configurable: true, });


