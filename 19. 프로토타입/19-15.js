const obj = new Object();
console.log(obj.constructor === Object); // true

const add  = new Function('a', 'b', 'return a+b');
console.log(add.constructor == Function); // true;

function Person(name) {
    this.name = name;
}
const me = new Person("Jaehoon So");
console.log(me.constructor === Person); // true;



