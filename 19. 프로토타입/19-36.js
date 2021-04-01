const Person = (function () {
    // 생성자 함수
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log(`Hi! my name is ${this.name}!`);
    }

    return Person;
}());

const me = new Person('Lee');

me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
}

me.sayHello();

// 19-37

delete me.sayHello;
me.sayHello();
