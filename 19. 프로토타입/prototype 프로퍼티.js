const Person = name => {
    this.name = name;
}

console.log(Person.hasOwnProperty('prototype'));
console.log(Person.prototype);

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor이다.
const obj = {
    foo() {}
};

console.log(obj.foo.hasOwnProperty('prototype'));
console.log(obj.foo.prototype);
