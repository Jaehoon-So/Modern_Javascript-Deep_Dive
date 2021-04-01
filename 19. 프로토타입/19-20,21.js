console.log(Person.prototype);

function Person(name){
    this.name = name;
}

const Person2 = name => {
    this.name = name;
};
console.log(Person2.prototype);

// 빌트인 생성자 함수가 아닌 사용자 정의 생성자 함수는 자신이 평가되어
// 함수 객체로 생성되는 시점에 프로토 타입도 더불어 생성되며, 생성된 프로토타입의 프로토타입은
// 언제나 Object.prototype이다.