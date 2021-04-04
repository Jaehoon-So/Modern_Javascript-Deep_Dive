const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        sayHello() {
            console.log(`Hi! Myname is ${this.name}!`);
        }
    };

    return Person;
}());

const me = new Person('jaehoon so');
console.log(me.constructor === Person);
console.log(me instanceof Person);
console.log(me instanceof Object);