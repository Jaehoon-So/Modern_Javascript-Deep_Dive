function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hi! my name is ${this.name}`);

};

const me = new Person('So');
console.log(me.hasOwnProperty('name')); // hasOwnProperty는 Object.prototype의 메서드이다.
// me 객체의 프로토 타입은 Person.prototype 이다.
console.log(Object.getPrototypeOf(me) === Person.prototype);
// Person.prototype 객체의 프로토타입은 Object.prototype 이다.
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)

Object.prototype.hasOwnProperty.call(me, 'name')