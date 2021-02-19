/** Object.defineProperty 메서드를 사용한다. */

const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Jaehoon',
    writable: true,
    enumerable: true,
    configurable: true,
});

Object.defineProperty(person, 'lastName', {
    value: 'So',
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor)

// 디스크립터 객체의 프로퍼티를 누락시키면, undefined, false가 기본값이다.

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

console.log(Object.keys(person));

// [[Configuration]] 값이 false이면 해당 프로퍼티를 삭제, 재정의 할수 없다
// 이때 프로퍼티를 삭제하려고 하면 에러는 발생하지 않고 무시된다.

delete person.lastName;

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName' + descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter() 함수
    get(){
        return `${this.firstName} ${this.lastName}`;
    },
    set(name){
        // 아직 배우지 않은 배열 디스트럭처링 할당
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true,
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'Jaehoon So';
console.log(person);