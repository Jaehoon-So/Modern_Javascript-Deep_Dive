function Person(name){
    this.name = name;
}

// 프로토타입에 메서드를 추가하면 프로토타입 체인에 즉각적으로 반영된다.
Person.prototype.sayHello = function () {
    console.log(`Hi! my name is ${this.name}`);
}

const me = new Person(`Jaehoon`);
const you = new Person(`so`);

me.sayHello();
you.sayHello();