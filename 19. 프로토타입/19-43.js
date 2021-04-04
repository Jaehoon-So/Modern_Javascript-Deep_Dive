function Person(name) {
    this.name = name;
}

const me = new Person('Jaehoon So');

const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}!`);
    }

};

Object.setPrototypeOf(me, parent);
me.sayHello();

console.log(me.constructor === Object); // true