const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        constructor: Person,
        sayHello(){
            console.log(`Hi! Myname is ${this.name}`);
        }
    };

    return Person;
}());

const me = new Person('Jaehoon so');

console.log(me.constructor === Person); // true
console.log(me.constructor === Object); // false
