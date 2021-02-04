var person = {
    name: 'Lee',
    sayhello: function(){
        console.log(`Hello! mt name is ${this.name}.`);
    }
};

console.log(typeof person);
console.log(person);

// 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.

var empty = {};
console.log(typeof empty);