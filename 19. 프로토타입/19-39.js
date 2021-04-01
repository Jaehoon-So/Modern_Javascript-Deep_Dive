const Person = function (name){
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}!`);
}
let me = new Person(`Jaehoon So`);
me.sayHello();

// 프로토타입 메서드를 삭제하려면 프로토타입 체인으로 검색하는 것이
// 아니라 프로토타입에 직접 접근해야한다.

delete Person.prototype.sayHello;
me.sayHello() // error


