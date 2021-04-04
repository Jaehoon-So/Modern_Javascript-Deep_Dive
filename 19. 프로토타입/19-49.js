// instanceof 연산자를 함수로 표현하면 다음과 같다.
function isInstanceOf(instance, constructor) {
    const prototype = Object.getPrototypeOf(instance);

    if(prototype === null) return false;

    return prototype === constructor.prototype || isInstanceOf(prototype, constructor);
}

function Person(name) {
    this.name = name;
}

const me = new Person('Jaehoon So');

console.log(isInstanceOf(me, Person));
console.log(isInstanceOf(me, Object));
console.log(isInstanceOf(me, Array));


