const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // Person 생성자 함수의 프로토타입을 객체 리터럴로 교체한다.
    Person.prototype = {
        sayHello() {
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Jaehoon So');

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수간의 연결이 파괴된다.
console.log(me.constructor === Person); // false
console.log(me.constructor === Object); // true







