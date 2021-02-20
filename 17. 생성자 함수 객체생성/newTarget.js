// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은
// 함수자신을 가리킨다. new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다

function Circle(radius){
    if(!new.target){
        // 생성자 함수를 재귀호출하여 생성된 인스턴스를 반환한다.
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle);