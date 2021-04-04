function Person(name) {
    this.name = name;
}

const me = new Person('Jaehoon So');

console.log(me instanceof Person); // true
console.log(me instanceof Object); // true

const parent = {};

Object.setPrototypeOf(me, parent);
console.log(Person.prototype === parent); // false
console.log(parent.constructor === Person); // false
console.log(me instanceof Person); // false
console.log(me instanceof Object); // true



